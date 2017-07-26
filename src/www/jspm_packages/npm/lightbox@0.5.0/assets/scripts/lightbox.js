/* */ 
'use strict';
var $ = window.jQuery ? window.jQuery : require('jquery'),
    _ = require('lodash'),
    Mousetrap = require('mousetrap'),
    transit = require('jquery.transit');
if (!$.fn.transition)
  $.fn.transition = transit.fn.transition;
var Lightbox = function(options) {
  options = options || {};
  this.fd = options.fd || 300;
  this.base_url = options.base_url || '';
  this.localContent = options.localContent || {};
  this.isDesktop = $(window).width() > 767;
  this.isVisible = false;
  this.lastScrollpos = 0;
  this.inline_transforms = require('./inline-transforms');
};
Lightbox.prototype = {
  applyTransforms: function(transforms) {
    $.each(transforms, function(key, value) {
      if (this.inline_transforms.hasOwnProperty(key))
        this.inline_transforms[key](this, value);
    }.bind(this));
  },
  do_inline_transforms: function(html) {
    var match;
    var patt = /<!--\s*([a-z\-]+):\s*(.*?)\s*-->/mg;
    var transforms = {};
    while ((match = patt.exec(html)) !== null)
      transforms[match[1]] = match[2];
    this.applyTransforms(transforms);
  },
  show_content_desktop: function() {
    var $window = $(window);
    this.$inner.stop().css({
      'margin-top': -this.$inner.outerHeight() / 2,
      'margin-left': -this.$inner.outerWidth() / 2,
      'top': $window.scrollTop() + $window.height() / 2,
      display: 'block',
      opacity: 0,
      transform: 'scale(0.6) translate(0, 40px)'
    }).transition({
      opacity: 1,
      scale: 1,
      y: 0
    }, this.fd);
  },
  show_content_mobile: function() {
    this.lastScrollpos = $(window).scrollTop();
    this.$page.hide();
    this.$inner.show();
  },
  _show_content: function(content) {
    this.$content.empty().append(content);
    this.$loader.hide();
    this.do_inline_transforms(content.html ? content.html() : content);
    if (this.isDesktop)
      this.show_content_desktop();
    else
      this.show_content_mobile();
    this.fixScroll();
    this.isVisible = true;
    $('body').addClass("lightbox-showing");
    var lb = this;
    Mousetrap.bind(['esc'], function(e) {
      if (e.preventDefault)
        e.preventDefault();
      lb.close();
      Mousetrap.unbind(['esc']);
    });
  },
  fixScroll: function() {
    if (this.isVisible && this.isDesktop) {
      var st = $(window).scrollTop();
      var lt = this.$content.offset().top;
      var lb = lt + this.$content.height();
      var minSt = Math.max(0, Math.min(lt - 50, lb + 50 - $(window).height()));
      var maxSt = Math.max(minSt + 10, lb + 50 - $(window).height(), lt - 50);
      if (st < minSt)
        $(window).scrollTop(minSt);
      else if (st > maxSt)
        $(window).scrollTop(maxSt);
    }
  },
  load_content: function(target, ajaxOptions, loaderText) {
    if (loaderText) {
      this.$loader.text(loaderText).show();
    } else
      this.$loader.hide();
    this.$over.stop().fadeIn(this.fd);
    var matches = /@(.*)/.exec(target);
    if (matches !== null && this.localContent.hasOwnProperty(matches[1]))
      this._show_content(this.localContent[matches[1]]);
    else
      $.ajax($.extend(true, {}, {
        url: this.base_url + target,
        headers: {'is-lightbox-content': 'true'},
        dataType: 'html',
        success: this._show_content.bind(this)
      }, ajaxOptions));
  },
  show_content: function(content) {
    this.$over.stop().fadeIn(this.fd);
    this._show_content(content);
  },
  close: function() {
    this.$inner.fadeOut();
    this.$over.fadeOut(this.fd);
    $('body').removeClass("this-showing");
    this.isVisible = false;
    if (!this.isDesktop) {
      this.$page.show();
      $(window).scrollTop(this.lastScrollpos);
    }
  },
  closePending: function() {
    this.$inner.fadeOut();
  }
};
module.exports = Lightbox;
