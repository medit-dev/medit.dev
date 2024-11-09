import {DefaultTheme, defineConfig, UserConfig} from "vitepress";


const config: UserConfig<DefaultTheme.Config> = {
  title: 'Andrzej Konarski MedIT',
  lang: 'pl-PL',
  description: 'Homepage',
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Strona Główna', link: '/' },
    ],
    footer: {
      copyright: 'Copyright © Andrzej Konarski',
    },
    search: {
      provider: 'local',
    },
  }
}

export default defineConfig(config)
