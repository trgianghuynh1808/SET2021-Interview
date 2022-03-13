import { DefinePlugin, Configuration } from "webpack";
import "webpack-dev-server";
import path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { merge } from "webpack-merge";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

interface Env {
  production: boolean;
  hot: boolean;
}

function createBaseConfig(env: Env): Configuration {
  return {
    mode: env.production ? "production" : "development",

    devtool: env.production ? false : "source-map",

    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      plugins: [new TsconfigPathsPlugin()],
    },

    plugins: [
      new DefinePlugin({
        __PRODUCTION__: JSON.stringify(env.production),
      }),
    ],
  };
}

function createServerConfig(env: Env): Configuration {
  return {
    name: "server",

    target: "node",

    context: path.resolve(__dirname, "src/server"),

    externalsPresets: {
      node: true,
    },

    ignoreWarnings: [
      {
        /*
         * Express compilation issue:
         * WARNING in ../node_modules/express/lib/view.js 81:13-25 Critical dependency: the request of a dependency is an expression
         * more at: https://github.com/webpack/webpack/issues/1576
         */
        module: /express/,
        message:
          /Critical\sdependency:\sthe\srequest\sof\sa\sdependency\sis\san\sexpression/,
      },
    ],

    entry: "./app.ts",

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "app.js",
      publicPath: "./",
    },

    module: {
      rules: [
        { test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/ },

        {
          // file-loader config must match client's (except 'emitFile' property)
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: "file-loader",
            options: {
              outputPath: "images",
              name: "[name].[contenthash].[ext]",
              emitFile: false,
            },
          },
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ["!public/**"],
      }),

      new DefinePlugin({
        __Server__: JSON.stringify(true),
      }),
    ],
  };
}

function createClientConfig(env: Env): Configuration {
  const CLIENT_PORT = 9000;

  const babelConfig = {
    presets: [
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript",
    ],
    plugins: [
      "@babel/plugin-transform-runtime",
      env.hot && require.resolve("react-refresh/babel"),
    ].filter(Boolean),
  };

  return {
    name: "client",

    target: "web",

    context: path.resolve(__dirname, "src/client"),

    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },

    entry: {
      index: "./Index.tsx",
    },

    output: {
      path: path.resolve(__dirname, "dist", "public"),
      filename: env.production ? "js/[name].[chunkhash].js" : "js/[name].js",
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: { loader: "babel-loader", options: babelConfig },
        },

        {
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: "file-loader",
            options: {
              outputPath: "images",
              name: "[name].[contenthash].[ext]",
            },
          },
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin(),

      new HtmlWebpackPlugin({
        template: "./index.html",
      }),

      new CopyWebpackPlugin({
        patterns: [{ from: "resources/favicon.ico" }],
      }),

      new DefinePlugin({
        __SERVER__: JSON.stringify(false),
      }),

      (env.hot && new ReactRefreshPlugin()) as any,
    ].filter(Boolean),

    devServer: {
      hot: env.hot,
      port: CLIENT_PORT,
      historyApiFallback: true,
    },
  };
}

export default function (args: Record<string, string>) {
  const env: Env = {
    hot: !!args["HOT"],
    production: !!args["PRODUCTION"],
  };

  const baseConfig = createBaseConfig(env);
  const clientConfig = merge(baseConfig, createClientConfig(env));
  const serverConfig = merge(baseConfig, createServerConfig(env));

  return [clientConfig, serverConfig];
}
