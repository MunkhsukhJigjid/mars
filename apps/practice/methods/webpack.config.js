const path = require('path')

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist')
        }
    }
}