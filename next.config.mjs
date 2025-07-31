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
                source: "/:lang/calculator",
                destination: "/:lang/calculator/10",
                permanent: true,
            },
            {
                source: "/info",
                destination: "/publications",
                permanent: true,
            },
            {
                source: "/:lang/info",
                destination: "/:lang/publications",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
