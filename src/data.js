import createD from "../src/assets/home/desktop/create-and-share.jpg";
import createT from "../src/assets/home/tablet/create-and-share.jpg";
import createM from "../src/assets/home/mobile/create-and-share.jpg";

import storiesD from "../src/assets/home/desktop/beautiful-stories.jpg";
import storiesT from "../src/assets/home/tablet/beautiful-stories.jpg";
import storiesM from "../src/assets/home/mobile/beautiful-stories.jpg";

import designD from "../src/assets/home/desktop/designed-for-everyone.jpg";
import designT from "../src/assets/home/tablet/designed-for-everyone.jpg";
import designM from "../src/assets/home/mobile/designed-for-everyone.jpg";

export const home = [
  {
    title: "Create and share your photo stories.",
    img: {
      desktop: createD,
      tablet: createT,
      mobile: createM,
    },
    desc: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    link: "GET AN INVITE",
  },
  {
    title: "BEAUTIFUL STORIES EVERY TIME",
    img: {
      desktop: storiesD,
      tablet: storiesT,
      mobile: storiesM,
    },
    desc: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    link: "VIEW THE STORIES",
  },
  {
    title: "DESIGNED FOR EVERYONE",
    img: {
      desktop: designD,
      tablet: designT,
      mobile: designM,
    },
    desc: "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.",
    link: "VIEW THE STORIES",
  },
];
