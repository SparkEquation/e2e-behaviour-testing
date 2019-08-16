const nodeExternals = require('webpack-node-externals');

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
        extensions: [".js", ".ts"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'awesome-typescript-loader'
            }
        ]
    }
};
