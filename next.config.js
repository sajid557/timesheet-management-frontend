// next.config.js

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:slug*",
        destination: `http://localhost:4080/api/:slug*`,
      },
    ];
  },
};
