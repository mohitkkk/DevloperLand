// next.config.js
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https', // Protocol (http or https)
          hostname: 'assets.aceternity.com', // External image domain
          port: '', // Optional, can be left empty for default ports (80, 443)
          pathname: '/**', // Allows all paths under the domain
        },
      ],
    },
  };
  