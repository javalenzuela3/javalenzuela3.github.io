import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Home, but cooler",
  description: "A VitePress Site",
  base: "/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: 
      {"/": [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        },
      ],

      "/research/": [
        {
          text: 'Research',
          items: [
            { text: 'Publications', link: 'research/publications' },
            { text: 'Talks', link: 'research/talks' },
            // { text: 'Gallery', link: '/'}
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/javalenzuela3'
        // icon: 'mailboxdotorg', link: '',
        // icon:'scholar', link:,
        // icon: 'orcid', link:,
       }
    ],

    footer: {
      message: 'Last updated: October 3, 2026.',
      copyright: 'Copyright © 2026-present'
    },
  },
  lastUpdated: true
})
