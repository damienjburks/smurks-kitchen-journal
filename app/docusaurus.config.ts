import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Smurks Kitchen Journal',
  tagline: 'A Peek Into Our Kitchen',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://smurkskitchen.com',
  
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          path: "docs",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes("/page/"));
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),
    require.resolve("docusaurus-lunr-search"),
  ],

  themeConfig: {
    image: 'img/logo.png',
    metadata: [
      {
        name: "keywords",
        content: "Recipes, Food",
      },

      // Open Graph / Facebook
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Smurks Kitchen Journal" },
      {
        property: "og:title",
        content: "Smurks Kitchen Journal",
      },
      {
        property: "og:description",
        content:
          "A cozy collection of homemade recipes, cooking stories, and culinary memories from Damien & Eboni's kitchen. Real food, honest notes, and the joy of cooking together."
      },
      { property: "og:url", content: "https://smurkskitchen.com" },
      {
        property: "og:image",
        content: "https://smurkskitchen.com/img/logo.png",
      },
      {
        property: "og:logo",
        content: "https://smurkskitchen.com/img/logo.png",
      },
      { property: "og:image:alt", content: "Smurks Kitchen Journal Logo" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_US" },

      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@damienjburks" },
      { name: "twitter:creator", content: "@damienjburks" },
      {
        name: "twitter:title",
        content: "Smurks Kitchen Journal",
      },
      {
        name: "twitter:description",
        content:
          "A cozy collection of homemade recipes, cooking stories, and culinary memories from Damien & Eboni's kitchen. Real food, honest notes, and the joy of cooking together.",
      },
      {
        name: "twitter:image",
        content: "https://smurkskitchen.com/img/logo.png",
      },
    ],
    navbar: {
      logo: {
        alt: 'smurks-kitchen-journal-logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Smurks Kitchen Journal',
        },

        {
          href: "https://github.com/damienjburks/smurks-kitchen-journal",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub Repository",
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Damien Burks. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
