/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  // directory name: 'build directory'
  mount: {
    public: "/",
    src: "/dist",
  },
  devOptions: {
    port: 3000,
  },
  buildOptions: {
    baseUrl: "./",
    out: "dist",
  },
  optimize: {
    minify: true,
    bundle: true,
    splitting: true,
    treeshake: true,
    target: "es2019",
  },
};
