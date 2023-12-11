import { sidebar } from "vuepress-theme-hope";

export const ptSidebar = sidebar({
    "/": [
        "",
        // {
        //   text: "Demo",
        //   icon: "laptop-code",
        //   prefix: "demo/",
        //   link: "demo/",
        //   children: "structure",
        // },
        {
          text: "Docs",
          icon: "book",
          prefix: "guide/",
          children: "structure",
        },
        "slides",
    ],
});
