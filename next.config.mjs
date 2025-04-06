const nextConfig = {
    async redirects() {
        return [
            {
                source: "/media/:path*",
                destination: "https://lightsail-image-repo.s3.amazonaws.com/portfolio/:path*",
                permanent: true,
                basePath: false
            },
            {
                source: "/home",
                destination: "/",
                permanent: true,
                basePath: false
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
