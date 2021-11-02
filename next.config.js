module.exports = {
  swcMinify: true, //uses SWC instead of Terser for minyfying JavaScript
  images: {
    domains: ["images.ctfassets.net"],
    loader: "cloudinary",
    path: "https://res.cloudinary.com/skai-digital/image/upload/w_auto,f_auto,q_auto/",
  },
  trailingSlash: true,
};
