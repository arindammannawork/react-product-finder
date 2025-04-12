const path = require('path');

module.exports = {
    entry: './src/MyButton.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index.js',
        library: 'MyReactUI',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
