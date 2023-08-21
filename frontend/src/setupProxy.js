const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/generator',
    createProxyMiddleware({
      target: 'http://localhost:9090', 
      changeOrigin: true,
    })
  );

  app.use(
    '/validator',
    createProxyMiddleware({
      target: 'http://localhost:9092', 
      changeOrigin: true,
    })
  );
};
