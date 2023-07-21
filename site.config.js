const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'jini-blog',
    image: '/avatar_jini.svg',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'backend developer',
    bio: '안녕하세요 백엔드 개발자 양갑진입니다.',
    email: 'doublevaluable@gmail.com',
    linkedin: '',
    github: 'www.github.com/inganJini',
    instagram: '',
  },
  projects: [
    {
      name: ``,
      href: ''
    }
  ],
  // blog setting (required)
  blog: {
    title: '인간지니 블로그',
    description: '어서오세요!!',
    theme: 'dark' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: 'https://morethan-log.vercel.app',
  since: 2023, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || ''
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },
  utterances: {
    enable: false,
    config: {
      repo: 'morethanmin/morethan-log',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
