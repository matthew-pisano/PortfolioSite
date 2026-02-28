const nextConfig = {
    async redirects() {
        return [
            {
                source: "/media/:path*",
                destination: "https://portfolio-asset-repo.s3.amazonaws.com/:path*",
                permanent: true,
                basePath: false
            },
            {
                source: "/home",
                destination: "/",
                permanent: true,
                basePath: false
            },
            {
                source: "/about/about",
                destination: "/about",
                permanent: true
            },
            {
                source: "/about/resume",
                destination: "/works/curriculum-vitae",
                permanent: true
            },
            {
                source: "/works/curriculumVitae",
                destination: "/works/curriculum-vitae",
                permanent: true
            },
            {
                source: "/readingList",
                destination: "/works/reading-list",
                permanent: true
            },
            {
                source: "/lectures",
                destination: "/works/lectures",
                permanent: true
            },
            {
                source: "/research/highGround",
                destination: "/research/moral-high-ground",
                permanent: true
            },
            {
                source: "/research/predictChain",
                destination: "/research/predict-chain",
                permanent: true
            },
            {
                source: "/research/chipFiring",
                destination: "/research/chip-firing",
                permanent: true
            }
        ];
    },
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "X-Frame-Options",
                        value: "DENY"
                    },
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff"
                    },
                    {
                        key: "Referrer-Policy",
                        value: "same-origin"
                    },
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=31536000; includeSubDomains; preload"
                    },
                    {
                        key: "Permissions-Policy",
                        value: ""
                    },
                    {
                        key: "X-XSS-Protection",
                        value: "1; mode=block"
                    }
                ]
            }
        ];
    }
};

export default nextConfig;
