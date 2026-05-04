/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://matthewpisano.com",
    generateRobotsTxt: true,
    exclude: ["/home", "/admin", "/secure/*", "/void", "/edit", "/babble", "/403", "/404", "/display"],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/home", "/admin", "/secure/*", "/void", "/edit", "/babble", "/403", "/404", "/display"]
            }
        ]
    },
    generateIndexSitemap: false
};
