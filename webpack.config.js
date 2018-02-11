const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        libraryTarget: "commonjs",
        library: "durationToSentence"
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        new UglifyJSPlugin()
    ],
    module: {
        rules: [
            { test: /\.ts$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    }
};
