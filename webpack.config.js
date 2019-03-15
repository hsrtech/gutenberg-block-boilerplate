// sets mode webpack runs under
const NODE_ENV = process.env.NODE_ENV || 'development';
const path = require(`path`);

module.exports = {
    mode: NODE_ENV,

    // entry is the source script
    entry: './blocks/blocks.js',

    // output is where to write the built file
    output: {
        path: path.join( __dirname, 'dist'),
        filename: 'blocks.build.js',
    },
    module: {
        // the list of rules used to process files
        // this looks for .js files, exclude files
        // in node_modules directory, and uses the
        // babel-loader to process
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
};