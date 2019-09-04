const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const INTEGRATION_FOLDER = path.resolve('integration')
const POSTINSTALL_FOLDER = path.resolve('postinstall');
const PLUGIN_FILE = 'plugins.js';
const SUPPORT_FILE = 'support.js';
const TSCONFIG_FILE = 'tsconfig.json';


module.exports = {
    target: "node",
    mode: "development",
    externals: [nodeExternals()],
    entry: './src/index.ts',
    devtool: "cheap-source-map",
    output: {
        library: 'ui-testing-template',
        filename: './main.js',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: [".js", ".ts"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'awesome-typescript-loader',
            }
        ]
    },
    plugins: [
        new CopyPlugin([
            {
                from: path.resolve(INTEGRATION_FOLDER, 'plugins', PLUGIN_FILE),
                to: path.resolve(POSTINSTALL_FOLDER, `${PLUGIN_FILE}.template`)
            },
            {
                from: path.resolve(INTEGRATION_FOLDER, 'support', SUPPORT_FILE),
                to: path.resolve(POSTINSTALL_FOLDER, `${SUPPORT_FILE}.template`)
            },
            {
                from: path.resolve(INTEGRATION_FOLDER, TSCONFIG_FILE),
                to: path.resolve(POSTINSTALL_FOLDER, `${TSCONFIG_FILE}.template`)
            }
        ]),
    ],
};
