/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Fireck Docs",
  tagline: "Fireck | Firebase Headless CMS",
  url: "https://fireck-docs.netlify.app",
  baseUrl: "/",
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
      items: [
        {
          type: "doc",
          position: "left",
          docId: "installation",
          label: "Docs",
        },
      ],
      style: "primary",
      logo: {
        alt: "",
        src: "img/logo.svg",
        href: "https://fireck.com",
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
    // algolia: {
    //   // If Algolia did not provide you any appId, use 'BH4D9OD16A'
    //   appId: "YOUR_APP_ID",

    //   // Public API key: it is safe to commit it
    //   apiKey: "YOUR_SEARCH_API_KEY",

    //   indexName: "YOUR_INDEX_NAME",

    //   // Optional: see doc section below
    //   contextualSearch: true,

    //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
    //   externalUrlRegex: "external\\.com|domain\\.com",

    //   // Optional: see doc section below
    //   appId: "YOUR_APP_ID",

    //   // Optional: Algolia search parameters
    //   searchParameters: {},

    //   //... other Algolia params
    // },
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
