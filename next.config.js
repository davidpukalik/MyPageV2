/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  styledComponents: true,
  i18n,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
