const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const bundleOutputDir = './wwwroot/dist';
var babelLoader = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    presets: [
        "env"
    ],
    plugins: ["syntax-dynamic-import"]
  }
};
module.exports = (env) => {
    const isDevBuild = !(env && env.prod);

    return [{
        stats: {
            modules: false
        },
        context: __dirname,
        resolve: {
            extensions: ['.js', '.ts', '.vue']
        },
        entry: {
            'main': './ClientApp/boot.ts'
        },
        module: {
            rules: [{
                    test: /\.vue$/,
                    include: /ClientApp/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            js: 'ts-loader',
                            ts: 'ts-loader'
                        }
                    }
                },
                {
                    test: /\.ts$/,
                    include: /ClientApp/,
                    use: [
                        babelLoader,
                        {
                            loader: 'ts-loader',
                            options: {
                                appendTsSuffixTo: [/\.vue$/],
                                transpileOnly: true
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: isDevBuild ? ['style-loader', 'css-loader'] : ExtractTextPlugin.extract({
                        use: 'css-loader?minimize'
                    })
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg)$/,
                    use: 'url-loader?limit=25000'
                }
            ]
        },
        output: {
            path: path.join(__dirname, bundleOutputDir),
            filename: '[name].js',
            publicPath: 'dist/'
        },
        plugins: [
            new ForkTsCheckerWebpackPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(isDevBuild ? 'development' : 'production')
                }
            }),
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./wwwroot/dist/vendor-manifest.json')
            })
        ].concat(isDevBuild ? [
            // Plugins that apply in development builds only
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map', // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
            })
        ] : [
            // Plugins that apply in production builds only
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map', // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new ExtractTextPlugin('site.css')
        ])
    }];
};