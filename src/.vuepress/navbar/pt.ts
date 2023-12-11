import { navbar } from "vuepress-theme-hope";

export const ptNavbar = navbar([
    "/",
    // "/demo/",
    {
      text: "Guia",
      icon: "lightbulb",
      prefix: "/guide/",
      children: [
        {
          text: "Bar",
          icon: "lightbulb",
          prefix: "bar/",
          children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
        },
        {
          text: "Foo",
          icon: "lightbulb",
          prefix: "foo/",
          children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
        },
      ],
    },
    {
      text: "V2 Documentation",
      icon: "book",
      link: "https://theme-hope.vuejs.press/",
    },
]);
