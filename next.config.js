module.exports = {
  swcMinify: true,
  /**
   * Environment variables go here
   */
  env: {
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/landing',
      },
    ]
  },
};
