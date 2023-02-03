// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '鸣洋网络',
  tagline: '无[鸣]之朴 搜[洋]侧陋',
  url: 'https://blog.codingfly.site',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/jsdig',
          routeBasePath: 'jsdig',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 2,
          blogSidebarCount: 10,
          blogSidebarTitle: '近期文章',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '鸣洋网络',
        logo: {
          alt: '鸣洋网络',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'dropdown',
            label: '案例分享',
            position: 'right',
            items: [
              {
                to: '/single_mall',
                label: '单商户商城',
              },
              {
                to: '/reservation_system',
                label: '预约系统',
              },
              {
                to: '/attendance',
                label: '员工考勤积分',
              },
            ],
          },
          {
            type: 'dropdown',
            label: '设计分享',
            position: 'right',
            items: [
              {
                href: 'https://www.uugai.com/',
                label: 'logo设计',
              },
              {
                href: 'https://vocalremover.org/',
                label: '音频剪辑',
              },
              {
                href: 'https://zh.pickfrom.net/',
                label: '视频剪辑',
              },
              {
                href: 'https://www.qtool.net/',
                label: '昊霖设计',
              },
              {
                href: 'https://pc.meitu.com/',
                label: '美图秀秀',
              },
              {
                href: 'https://pika.style/',
                label: '美化截图',
              },
              {
                href: 'https://www.remove.bg/zh',
                label: '图片背景消除',
              },
              {
                href: 'https://www.processon.com/',
                label: '思维导图',
              },
              {
                href: 'https://www.chuangkit.com/',
                label: '创可贴',
              },
              {
                href: 'https://www.canva.cn/',
                label: '可画设计',
              },
              {
                href: 'https://undraw.co/illustrations',
                label: '扁平插图',
              },
            ],
          },
          {
            type: 'dropdown',
            label: '摸鱼必备',
            position: 'right',
            items: [
              {
                href: 'https://www.yikm.net/',
                label: '在线街机',
              },
              {
                href: 'https://fakeupdate.net/',
                label: '假装更新系统',
              },
            ],
          },
          { to: '/blog', label: '博客', position: 'right' },
          { to: '/about', label: '关于我', position: 'right' },
          {
            href: 'https://github.com/atongmu',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} 鲁ICP备19008569号`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'reservation_system',
    //     path: 'docs/reservation_system',
    //     routeBasePath: 'reservation_system',
    //     sidebarPath: false,
    //   },
    // ],
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'single_mall',
    //     path: 'docs/single_mall',
    //     routeBasePath: 'single_mall',
    //     sidebarPath: false,
    //   },
    // ],
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        language: "zh",
        // Options here
      },
    ],
  ],
};

module.exports = config;
