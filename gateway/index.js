const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const PORT = 8000;

const app = express();

app.use(
  "/characters",
  createProxyMiddleware({
    target: "http://characters:8001",
    changeOrigin: true,
  })
);

app.use(
  "/films",
  createProxyMiddleware({
    target: "http://films:8002",
    changeOrigin: true,
  })
);

app.use(
  "/planets",
  createProxyMiddleware({
    target: "http://planets:8003",
    changeOrigin: true,
  })
);

app.use(
  "/registers",
  createProxyMiddleware({
    target: "http://registers:8005",
    changeOrigin: true,
  })
);

app.use(
  "/login",
  createProxyMiddleware({
    target: "http://login:8006",
    changeOrigin: true,
  })
);

app.listen(PORT, () => {
  console.log(`Gateway conectado correctamente en el PUERTO: ${PORT} 💥`);
});
