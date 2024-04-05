const path = require("path");

module.exports = {
  basePath: "/portfolio",
  output: "export",
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // images: {
  //   domains: ["res.cloudinary.com", "media.dev.to"],
  // },
};
