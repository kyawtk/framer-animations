/** @type {import('next').NextConfig} */
const nextConfig = {
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
