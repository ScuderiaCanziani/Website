import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Scuderia Canziani',  // Titolo che appare nel browser
  description: 'Il sito ufficiale della Scuderia Canziani',
  base: '/Website/',  // Percorso per GitHub Pages

  themeConfig: {
    logo: '/logo.png',  // Il logo deve essere nella cartella public
    siteTitle: 'Scuderia Canziani',  // Testo che appare accanto al logo
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Podcast', link: '/podcast' },
      { text: 'Chi siamo', link: '/about' }
    ]
  }
})
