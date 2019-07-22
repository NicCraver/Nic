module.exports = {
  title: 'Nic | Y',
  description: 'I am Nic, Work hard and love life, but more importantly, love Yue.',
  base: '/',
  dest: 'dist/',
  theme: 'ououe',
  themeConfig: {
    defaultTheme: 'dark',
    // cover: '/cover.jpg',
    cover:'https://picsum.photos/1920/1080/?random&date=2019-07-01',
    logo: '/logo.png',
    search: true,
    pageGroup: 1,
    postTime: {
      createTime: 'Create Time',
      lastUpdated: 'Last Updated'
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '文章', link: '/doc/' },
      { text: '笔记', link: '/summary/' },
      { text: '标签', link: '/tag/' },
      { text: '类别', link: '/category/' },
      { text: '关于', link: '/about/' }
    ],
    footer: [
      { text: 'Github', link: 'https://github.com/NicCraver' }
    ]
  },
  postcss: {
    plugins: [
      require('css-prefers-color-scheme/postcss'),
      require('autoprefixer')
    ]
  }
}
