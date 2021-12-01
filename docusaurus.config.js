/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Fireck API reference",
  tagline: "Fireck | Firebase Headless CMS",
  url: "https://fireck-docs.netlify.app/docs/",
  baseUrl: "/docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.ico",
  organizationName: "rromikas", // Usually your GitHub org/user name.
  projectName: "fireck-docs", // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    sidebarCollapsible: false,
    navbar: {
      style: "primary",
      logo: {
        alt: "",
        src: "img/logo.svg",
      },
    },
    menu: {
      style: "primary",
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
          routeBasePath: "/",
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
