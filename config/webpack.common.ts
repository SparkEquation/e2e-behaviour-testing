import nodeExternals from 'webpack-node-externals';
import webpack = require('webpack');
// @ts-ignore
import packageInfo from '../package.json'

// Caused by https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/31
process.env['TS_NODE_PROJECT'] = '';

export const commonConfig = {
    target: 'node',
    mode: 'development',
    devtool: "cheap-source-map",
    externals: [nodeExternals()],
    resolve: {
        extensions: ['.js', '.ts', '.json'],
    },
    plugins: [
        new webpack.DefinePlugin({
            PACKAGE_VERSION: JSON.stringify(packageInfo.version),
            PACKAGE_NAME: JSON.stringify(packageInfo.name),
        })
    ]
};

export const babelOptions = {
    presets: [
        ['@babel/preset-env',
            {
                'targets': {
                    'node': '8',
                },
                corejs: 3,
                useBuiltIns: 'usage',
            },
        ],
        "@babel/preset-typescript"
    ],
    plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        "@babel/proposal-class-properties",
        "@babel/proposal-object-rest-spread",
    ],
};
