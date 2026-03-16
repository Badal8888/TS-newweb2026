const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.techstrota.com",
        port: "8000",
        pathname: "/storage/**",
      },
    ],
  },
};

module.exports = nextConfig;
