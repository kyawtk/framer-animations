/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript:{
        ignoreBuildErrors:true,
    },
    eslint:{
        ignoreDuringBuilds:true,
    },
    images: {

        domains: [
            "images.ctfassets.net",
        ],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: "images.ctfassets.net",
              port: '',

            },
          ],
      },
};

export default nextConfig;
