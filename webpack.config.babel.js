import { join } from "path";

const context = join(__dirname, "src");

const config = {
  context,
  mode: "production",
  entry: "./index",
  output: {
    path: join(__dirname, "dist"),
    libraryTarget: "umd",
    library: "josa"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        },
        include: context
      }
    ]
  }
};

export default config;
