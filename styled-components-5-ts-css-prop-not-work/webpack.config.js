const path = require("path");

module.exports = {

    entry: "./src/demo.tsx",
    output: {
        // path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
              },
              {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
              },
              {
                test: /\.js$/,
                use: 'source-map-loader',
                enforce: 'pre',
              },
        ]
    },

    // File extensions to support resolving
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    mode: 'development',
    devtool: "eval-source-map",
    devServer: {
        // contentBase: path.resolve(__dirname, "build"),
        host: '0.0.0.0',
        port: 8999,
        // open: true,
        compress: true,
        inline: true,
        hot: true,
        historyApiFallback: true,
    },
};