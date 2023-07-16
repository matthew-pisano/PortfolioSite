const nextConfig = {
    resolve: {
        fallback: {
            "fs": false,
            "os": false,
            "path": false,
        }
    }
};
   
module.exports = nextConfig;