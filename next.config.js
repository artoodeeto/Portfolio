const path = require("path");

// uncomment for development
// module.exports = {
//   basePath: "",
//   output: ".",
//   reactStrictMode: true,
//   sassOptions: {
//     includePaths: [path.join(__dirname, "styles")],
//   },
//   // images: {
//   //   domains: ["res.cloudinary.com", "media.dev.to"],
//   // },
// };

// uncomment for production
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
