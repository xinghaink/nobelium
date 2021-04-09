const BLOG = {
  title: 'Learn and share ',
  author: 'xinghaink',
  email: 'xinghaink@qq.com',
  link: 'blog.dikr.cn',
  description: '当下是最年轻的一天',
  lang: 'zh-CN',
  appearance: 'auto', // ['light', 'dark', 'auto'],
  lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#111827', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2021, // if leave this empty, current year will be used.
  postsPerPage: 7,
  showAbout: true, // WIP
  showArchive: true, // WIP
  socialLink: '',
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  analytics: {
    provider: '', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: '' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: gitalk
    provider: 'gitalk', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: 'https://github.com/xinghaink/GitalkForMe', // The repository of store comments
      owner: 'xinghaink',
      admin: [],
      clientID: '98b5502918c8d2fcda37',
      clientSecret: 'fcd42b69fad44091235a61643841e0ca5810d6c5',
      distractionFreeMode: false
    }
  }
}
// export default BLOG
module.exports = BLOG
