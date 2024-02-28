import path from 'path';
import webpack from 'webpack';
import devServer from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';


interface IEnv {
    mode: "development" | "production";
}


export default (env: IEnv) => {
    const config: webpack.Configuration = {
        mode: env.mode ?? "development",
        entry: './src/index.ts',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html") })
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node-modules/,
                }
            ]
        },
        resolve: {
            extensions: ["tsx", "ts", "js"]
        }
    };

    return config;
}