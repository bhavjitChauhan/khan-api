// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Khan API',
  tagline: 'A Khan Academy API client for Node.js and the browser',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://khan-api.bhavjit.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bhavjitChauhan', // Usually your GitHub org/user name.
  projectName: 'khan-api', // Usually your repo name.
  deploymentBranch: 'docs',
  trailingSlash: false,

  onBrokenLinks: 'warn',
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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/bhavjitChauhan/khan-api/tree/docs',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/bhavjitChauhan/khan-api/tree/docs',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-TS3VCNBMER'
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/khan-api-social-card.jpg',
      navbar: {
        title: 'Khan API',
        // logo: {
        //   alt: 'Khan API Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorials',
          },
          {
            type: 'docSidebar',
            sidebarId: 'apiSidebar',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/bhavjitChauhan/khan-api',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Pages',
            items: [
              {
                label: 'Tutorials',
                to: '/docs/getting-started',
              },
              {
                label: 'Docs',
                to: '/docs/api',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Reference',
                href: 'https://khan-api.bhavjit.com/reference',
              },
              {
                label: 'Safelist',
                href: 'https://github.com/bhavjitChauhan/khan-api/tree/safelist',
              },
              {
                label: 'Proxy',
                href: 'https://github.com/bhavjitChauhan/khan-api/tree/proxy'
              }
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/bhavjitChauhan/khan-api',
              },
              {
                label: 'npm',
                href: 'https://www.npmjs.com/package/@bhavjit/khan-api',
              },
              {
                label: 'jsDelivr',
                href: 'https://www.jsdelivr.com/package/npm/@bhavjit/khan-api',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bhavjit Chauhan. Built with Docusaurus.`,
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo-512.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
        ],
      },
    ],
  ],
};

export default config;
