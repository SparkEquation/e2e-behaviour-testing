const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: "node",
    mode: "production",
    externals: [nodeExternals()],
    entry: './src/index.ts',
    output: {
        filename: './main.js'
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
