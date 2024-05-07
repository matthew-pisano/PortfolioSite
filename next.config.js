const nextConfig = {
    async redirects() {
        return [
            {
                source: '/media/:path*',
                destination: 'https://lightsail-image-repo.s3.amazonaws.com/portfolio/:path*',
                permanent: true,
                basePath: false
            },
            {
                source: '/home',
                destination: '/',
                permanent: true,
                basePath: false
            },
        ];
    },
};
   
module.exports = nextConfig;