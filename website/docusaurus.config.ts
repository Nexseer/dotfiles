import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'DevToolkit',
  tagline: 'Your Tools, Your Rules 🛠️',
  favicon: 'img/icons8-tools.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nexseer', // Usually your GitHub org/user name.
  projectName: 'dotfiles', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Nexseer/dotfiles/tree/main/website/docs',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Nexseer/dotfiles/tree/main/website/blog',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'dotfiles',
      logo: {
        alt: 'My Site Logo',
        src: 'img/tools.png',
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "homeSidebar",
          className: "nav-home",
          position: "left",
          label: "Home",
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          className: "nav-tutorials",
          position: "left",
          label: "Tutorials",
        },
        {
          to: "/blog",
          label: "Blogs",
          position: "left",
          className: "nav-blogs",
          activeBasePath: "/blog",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/Nexseer/dotfiles",
          className: "header-github-link",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      logo: {
        alt: "Logo",
        src: "img/tools.png",
        width: 200,
      },
      copyright: `Made with ❤️ by <a target="_blank" rel="noopener noreferrer" href="https://github.com/Nexseer">Nexseer.</a>`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "json"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
