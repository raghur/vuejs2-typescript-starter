const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const bundleOutputDir = './wwwroot/dist'
var babelLoader = {
    loader: 'babel-loader',
    options: {
        cacheDirectory: true,
        presets: [
            'es2015'
        ],
        plugins: ['syntax-dynamic-import']
    }
}
const tsLoader = {
    loader: 'ts-loader',
    options: {
        appendTsSuffixTo: [/\.vue$/],
        transpileOnly: true
    }
}
module.exports = (env) => {
    const isDevBuild = !(env && env.prod)
    const isTestBuild = (env && env.test)
    const isDebugging = (env && env.debugging)
    let tsLoadersArrInstrumented = null
    let vuetsloaders = [babelLoader, 'ts-loader']
    let tsLoadersArr = [babelLoader, tsLoader]
    if (isTestBuild && !isDebugging) {
        vuetsloaders = ['istanbul-instrumenter-loader'].concat(vuetsloaders)
        tsLoadersArrInstrumented = ['istanbul-instrumenter-loader'].concat(tsLoadersArr)
    } else {
        tsLoadersArrInstrumented = tsLoadersArr
    }
    console.log('Is running tests:', isTestBuild)
    console.log('Dev Build:', isDevBuild)
    return [{
        stats: {
            modules: false
        },
        context: __dirname,
        resolve: {
            extensions: ['.js', '.ts', '.vue']
        },
        entry: {
            'main': ['./ClientApp/boot.ts']
        },
        module: {
            rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                include: /ClientApp/,
                options: {
                    loaders: {
                        js: vuetsloaders,
                        ts: vuetsloaders
                    }
                }
            },
            {
                test: /\.js$/,
                loader: babelLoader,
                exclude: /node_modules/
            },
            {
                test: /\.ts$/,
                include: /ClientApp/,
                use: isTestBuild ? tsLoadersArrInstrumented : tsLoadersArr
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
            ].concat(isTestBuild ? [{
                test: /\.ts$/,
                include: /test/,
                use: tsLoadersArr
            }] : [])
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
        ].concat(isDevBuild || isTestBuild ? [
            // this is required for source map debugging
            new webpack.SourceMapDevToolPlugin({
                filename: null, // only inline source maps seem to work when debugging with chrome
                moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]'), // Point sourcemap entries to the original file locations on disk
                test: /\.(ts|js|vue)$/
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
    }]
}
