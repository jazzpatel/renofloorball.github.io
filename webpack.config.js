const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const ExtendedDefinePlugin = require('extended-define-webpack-plugin');
var appConfig = require('./app.config.js');

//var data = require('src/www/routes/routes.js');
var locals = {
  routes: [
    '/',
  ]
}

var debug = (process.env.NODE_ENV !== 'production' ? true : false )

var output = undefined   

var context_entry = (typeof output === 'undefined' ? 'src/www/public' : 'src/www' )
var PUBLIC = ( context_entry === 'src/www/public' ? true : false )

console.log('context_entry: ',context_entry)
console.log('PUBLIC: ',PUBLIC)

const config = {
    //Declarations
    watch: true,
    context: path.resolve(context_entry),
    entry: {
      lightbox: [ './ext/lightbox/lightbox.min.js' ],
      log4javascript: [ './ext/log4javascript-1.4.13/log4javascript_uncompressed.js'],
      main: ['./main.js']
    },
    output: {
      path: path.resolve(__dirname,'./dist'),
      //publicPath: 'http://mycdn.com',
      filename: '[name].js'
    },


    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },

            { test: /(\.png|\.jpg|\.jpeg|\.gif|\.svg)$/,
              loader: "url-loader?limit=1024&publicPath=./&name=images/[name].[ext]",
              //query: { limit: 1024 }
            },

            { test: /\.(woff|woff2|eot|ttf|wav|mp3)$/, loader: "file-loader?publicPath=./&name=fonts/[name].[ext]" },

            { test: /bootstrap\/dist\/js\/\//, loader: 'file-loader?imports?jQuery=jquery' },

            { test: /\.jsx?$/,
              enforce: "pre",
              loader: "eslint-loader",
              exclude: /node_modules/,
              options: {
                emitWarning: true,
                configFile: "./.eslintrc.json"
                }
            },

            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: {
                    loader: 'html-loader',
                      options: {
                        interpolate: true
                    }
                }
            },

            {
              test: /\.(js|jsx)$/,
              //loader: ['babel-loader'],
              //loader: ['react-hot-loader/webpack', 'babel-loader'],
              //loaders: ['babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=react,plugins[]=transform-runtime'],
              loaders: ['babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=react'],
              exclude: /node_modules/,
              // query: {
              //   cacheDirectory: true,
              //   presets: [  'es2015', 'react-hot','stage-0'],
              // }
            },

            {
              test: /(\.scss|\.css)$/,
              //include: [ path.resolve(__dirname, 'src/css'), path.resolve(__dirname,'src/extras'), path.resolve(__dirname,'src/components') ],
              loader: ExtractTextPlugin.extract( { loader: 'css-loader', query: { modules: true, localIdentName: '[local]', importLoaders: true, /* minimize: true */ } }), //  'css!postcss!sass'),

              //loader: ExtractTextPlugin.extract( "style-loader", "css-loader")
            },



            // {
            //     test: /(\.scss|\.css)$/,
            //     include: path.resolve(__dirname, 'src'),
            //     loader: ExtractTextPlugin.extract('css-loader', 'css!postcss!sass')
            // }, {
            //     test: /(\.scss|\.css)$/,
            //     exclude: path.resolve(__dirname, 'src'),
            //     loader: ExtractTextPlugin.extract('css-loader', 'css sourceMap&modules&importLoaders=1&localIdentName=[local]!postcss!sass')
            // },


        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery',
        }),

        new ExtendedDefinePlugin({
          APP_CONFIG: appConfig,
          PUBLIC: PUBLIC,
          DEBUG: debug
        }),

        // new webpack.NormalModuleReplacementPlugin(
        //   /(.*)-APP_TARGET(\.*)/,
        //   function(resource){
        //     resource.request = resource.request
        //       .replace(/-APP_TARGET/, `-${appTarget}`);
        //   }
        // )

        //ENABLE THIS FOR FINAL PRODUCTION BUILD
        // new webpack.optimize.UglifyJsPlugin( {
        //   uglifyOptions: {
        //     compress: {
        //       drop_console: debug,
        //     }
        //   }
        // }),

        //new ExtractTextPlugin({ filename: 'mainWebpack.css', disable: false, allChunks: true }),
        //new ExtractTextPlugin('[name].[hash].css'),

        //new StaticSiteGeneratorPlugin('main', local.routes),
         new HtmlWebpackPlugin({
              template: 'mainOrig.tpl.html',
              //inject: 'body',
              filename: 'index.html'
        }),
        //new HtmlWebpackPlugin({ template: 'mainOrig.html' }),
        new ExtractTextPlugin('[name].css', { allChunks: true }),



        // OccurenceOrderPlugin is needed for webpack 1.x only
        //new webpack.optimize.OccurenceOrderPlugin(),
        //new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoEmitOnErrorsPlugin()

        new CopyWebpackPlugin([

            // Copy directory contents to {output}/
            { from: 'favicon.ico' },
            { from: 'components/portal/a.inc' },
            //{ from: 'deprecated', to: 'deprecated'},
            { from: 'assets/images/img', to: 'images/img'},
            { from: 'assets/sound', to: 'sound'},
            { from: 'assets/images/team', to: 'images/team'},
            { from: 'assets/videos', to: 'videos'},
            { from: 'assets/svg', to: 'svg'},
            { from: 'fonts', to: 'fonts'},

            // Copy directory contents to {output}/to/directory/
            //{ from: 'from/directory', to: 'to/directory' },

            // Copy glob results to /absolute/path/
            //{ from: 'from/directory/**/*', to: '/absolute/path' },
        ], {
            ignore: [
                // Doesn't copy any files with a txt extension
                '*.txt',

                // Doesn't copy any file, even if they start with a dot
                //'**/*',

                // Doesn't copy any file, except if they start with a dot
                //{ glob: '**/*', dot: false }
            ],

            // By default, we only copy modified files during
            // a watch or webpack-dev-server build. Setting this
            // to `true` copies all files.
            copyUnmodified: true
        }),

        // Make sure that the plugin is after any plugins that add images
        new ImageminPlugin({
          //disable: process.env.NODE_ENV !== 'production', // Disable during development
          pngquant: {
            quality: '95-100'
          }
        }),

        new LiveReloadPlugin()
    ]
};

config.plugins.push(function(){
    this.plugin('done', function(stats) {
        console.log(('\n[' + new Date().toLocaleString() + ']') + ' Begin a new compilation.\n');
    });
});


module.exports = config;


