/* */ 
var makeString = require('./helper/makeString');
var from = 'ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž',
    to = 'aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz';
from += from.toUpperCase();
to += to.toUpperCase();
to = to.split('');
from += 'ß';
to.push('ss');
module.exports = function cleanDiacritics(str) {
  return makeString(str).replace(/.{1}/g, function(c) {
    var index = from.indexOf(c);
    return index === -1 ? c : to[index];
  });
};
