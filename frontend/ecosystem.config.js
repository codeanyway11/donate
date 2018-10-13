module.exports = {
  apps: [
    {
      name: 'app',
      script: './server.js',
      watch: true,
      env: {
        NODE_ENV: 'production',
        REACT_APP_BUILD_ENV: 'staging',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: "production",
        REACT_APP_BUILD_ENV: 'production',
        PORT: 3000,
      }
    },
  ],
};
