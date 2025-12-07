
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// USER-SERVICE
app.use(
  "/users",
  createProxyMiddleware({
    target: "http://user-service:4001",
    changeOrigin: true,
  })
);

// PRODUCT-SERVICE
app.use(
  "/services",
  createProxyMiddleware({
    target: "http://product-service:4002",
    changeOrigin: true,
  })
);

// Start gateway
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(API Gateway running on port ${PORT});
});
