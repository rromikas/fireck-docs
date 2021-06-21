/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Fireck docs",
  tagline: "Fireck - firebase headless cms",
  url: "https://fireck-docs.netlify.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.ico",
  organizationName: "rromikas", // Usually your GitHub org/user name.
  projectName: "fireck-docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      style: "primary",
      logo: {
        alt: "",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Intro",
        },
        {
          type: "doc",
          docId: "installation",
          position: "left",
          label: "Install",
        },
        {
          type: "doc",
          docId: "content-api/create",
          position: "left",
          label: "Content API",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Fireck.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/master/website/",
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
