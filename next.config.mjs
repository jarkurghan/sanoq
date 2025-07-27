/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
    },

    async redirects() {
        return [
            {
                source: '/info',
                destination: '/publications',
                permanent: true,
            },
            {
                source: '/uz/info',
                destination: '/uz/publications',
                permanent: true,
            },
            {
                source: '/en/info',
                destination: '/en/publications',
                permanent: true,
            },
            {
                source: '/ru/info',
                destination: '/ru/publications',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
