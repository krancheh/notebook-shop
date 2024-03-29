import path from "path";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import dotenv from "dotenv";

interface IEnv {
    mode: "development" | "production";
    port?: number;
}

export default (env: IEnv) => {
    const $env = env.mode === "production" ? process.env : dotenv.config().parsed;

    const isDev = env.mode !== "production";

    const config: webpack.Configuration = {
        mode: env.mode ?? "development",
        entry: path.resolve(__dirname, "src", "index.tsx"),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name]_[contenthash].js',
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.module\.s(a|c)ss$/,
                    use: [
                        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName: '[name]__[local]--[hash:base64:5]',
                                },
                                sourceMap: isDev,
                            },
                        },
                        "sass-loader",
                    ],
                },
                {
                    test: /\.s[ac]ss$/i,
                    exclude: /\.module.(s(a|c)ss)$/,
                    use: [
                        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.(png|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.svg$/i,
                    issuer: /\.[jt]sx?$/,
                    use: [{
                        loader: '@svgr/webpack', options: {
                            icon: true, svgoConfig: {
                                plugins: [
                                    {
                                        name: "convertColors",
                                        params: {
                                            currentColor: true
                                        }
                                    }
                                ]
                            }
                        }
                    }],
                },
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', ".scss"]
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html") }),
            isDev && new webpack.ProgressPlugin(),
            new MiniCssExtractPlugin({
                filename: "css/[name]_[contenthash:8].css",
                chunkFilename: "css/[name]_[contenthash:8].css",
            }),
            new webpack.DefinePlugin({
                "process.env": JSON.stringify($env),
            }),
        ],


        // dev-server
        devtool: isDev && 'source-map',
        devServer: isDev && {
            port: env.port ?? 3000,
            open: true,
            hot: true,
            historyApiFallback: true,
        }
    }

    return config;
}