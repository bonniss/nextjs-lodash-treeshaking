/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withTM = require('next-transpile-modules')(['lodash-es'])

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withPlugins([
  [withBundleAnalyzer],
  [withTM]
], nextConfig)
