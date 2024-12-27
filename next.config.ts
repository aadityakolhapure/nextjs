// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: false,
//   images: {
//     domains: ['assets.aceternity.com'], // Add the hostname here
//   },
//   webpackDevMiddleware: (config: any) => {
//     config.watchOptions = {
//       poll: 1000, // Check for changes every second
//       aggregateTimeout: 300, // Delay before rebuilding
//     }
//     return config
//   },
  
// };

// export default nextConfig;


import type { NextConfig } from 'next'


const config: NextConfig = {
  images: {
    domains: ['assets.aceternity.com'], 
  },

  reactStrictMode: true,
  
  // The webpack configuration is typed using the built-in Next.js types
  webpack: (config, { dev, isServer }) => {
    // We only modify the configuration during development and for client-side code
    if (dev && !isServer) {
      // TypeScript knows these properties are valid webpack configuration options
      config.watchOptions = {
        // Check for file changes every second (1000ms)
        poll: 1000,
        // Wait 300ms after changes before rebuilding to avoid excessive rebuilds
        aggregateTimeout: 300,
      }
    }
    return config
  },
}

// We export the configuration as a CommonJS module since Next.js expects this format
export default config
