import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Scuderia Canziani',
  description: 'Il sito ufficiale della Scuderia Canziani',
  base: '/Website/',
  themeConfig: {
    logo: {
        src: '/logo.png', 
    },
    siteTitle: 'Scuderia Canziani',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Podcast', link: '/podcast' },
      { text: 'Chi siamo', link: '/about' }
    ]
  }
})
