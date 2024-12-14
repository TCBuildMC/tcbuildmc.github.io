import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  head: [
    ["link", 
      { 
        rel: "preconnect", 
        href: "https://fonts.googleapis.com" 
      }
    ],
    [
      "link",
      { 
        rel: "preconnect", 
        href: "https://fonts.gstatic.com", 
        crossorigin: ""
     },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap",
        rel: "stylesheet",
      },
    ],
  ],

  base: "/",
  lang: "zh-CN",
  title: "TubeTeam",
  description: "TubeTeam 官方网站",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
