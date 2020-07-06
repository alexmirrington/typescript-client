const path = require('path');


module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: [
            ".ts",
            ".tsx",
            ".js",
            ".jsx"
        ]
    },
    module: {
        rules: [
            {
                // All files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};