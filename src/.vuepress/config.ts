import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/JSDocs/",

  locales: {
    "/": {
        lang: "pt-BR",
        title: "Documentação JavaScript",
        description: "Documentação JavaScript para iniciantes",
    },
    // TODO: Add new language
    // "/us/": {
    //   lang: "en-US",
    //   title: "Docs JavaScript",
    //   description: "A docs of JavaScript to begginers",
    // },
  },

  theme,

  // Enable it with pwa
  shouldPrefetch: false,

  plugins: [    
    searchPlugin({
      // your options
      locales: {
        '/': {
          placeholder: 'Pesquisar',
        },
      },
    }),
  ],
});
