import { navbar } from "vuepress-theme-hope";

export const ptNavbar = navbar([
    "/",
    {
        text: "Guia",
        link: "/guide/",
        icon: "lightbulb",
    },
    // "/demo/",
    // {
    //   text: "Guia",
    //   icon: "lightbulb",
    //   prefix: "/guide/",
    //   children: [
    //     // {
    //     //   text: "Bar",
    //     //   icon: "lightbulb",
    //     //   prefix: "bar/",
    //     //   children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
    //     // },
    //     // {
    //     //   text: "Foo",
    //     //   icon: "lightbulb",
    //     //   prefix: "foo/",
    //     //   children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
    //     // },
    //   ],
    // },
    {
      text: "Notion",
      icon: "book",
      link: 'https://klaytonjrr.notion.site/Curso-Javascript-Coderhouse-5c4150cac87c45388461c1472f51eac6?pvs=4',
    },
]);
