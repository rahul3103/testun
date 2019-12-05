const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD
} = require('next/constants');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const nextConfig = phase => {
  return {
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: '../bundles/server.html'
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: '../bundles/client.html'
      }
    },
    env: {
      isDev: phase === PHASE_DEVELOPMENT_SERVER,
      isProd: phase === PHASE_PRODUCTION_BUILD
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/demo' : '',
    webpack(config) {
      return config;
    }
  };
};

module.exports = phase => {
  return withBundleAnalyzer(nextConfig(phase));
};
