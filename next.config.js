const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
  images: {
    domains: ['storage.googleapis.com'],
  },

  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',

    domains: [
      {
        domain: 'ansilliano.com',
        defaultLocale: 'en-US',
      },
    ],
  },
};
