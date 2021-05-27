const sitemap = require("nextjs-sitemap-generator");
const path = require("path");

sitemap({
  baseUrl: "https://skaidigital.no",
  pagesDirectory: path.resolve(__dirname, "../pages/"),
  targetDirectory: path.resolve(__dirname, "../public"),
  ignoredExtensions: [
    "map",
    "json",
    "png",
    "css",
    "jpeg",
    "jpg",
    "icon",
    "svg",
  ],
  generateRobotsTxt: true,
  ignoredPaths: ["404", "favicon", "index"],
});
