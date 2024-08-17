// import img1 from "@/public/news/muse-img-1.png";
// import img2 from "@/public/news/muse-img-2.png";
// import img3 from "@/public/news/muse-img-3.jpg";
import img1 from "/public/news/muse-img.png";
import img2 from "/public/news/muse-img-2.png";
import img3 from "/public/news/muse-img-3.jpg";

export const ASSETS_BASE_URL =
  "https://cdn.prod.website-files.com/6511efa00919fb9000588f9a";

export const NAV_HEIGHT = 85;
export const SMALL_HEIGHT_PERCENTAGE = (71 / NAV_HEIGHT) * 100;

export const ROUTES = [
  { path: "#", label: "Products" },
  { path: "/newsroom", label: "Newsroom" },
  { path: "/careers", label: "Careers" },
];

export const PRODUCTS = [
  {
    label: "Utilmate Guitar",
    iconId: "667b437c02f14a2e52dde805_ug",
    banner: {
      mobile: "667c9ebba85372ed7319e8e7_First%20Screen%20mob.webp",
      desktop: "667c92402b305e07ee579088_cover-ug.webp",
    },
    path: "/utilmate-guitar",
    description:
      "The best platform for music makers to learn and play songs they love.",
  },
  {
    label: "MuseScore.com",
    iconId: "667b43d94a5ae4dd43194e70_ms",
    banner: {
      mobile: "667ca059c2fc56b858c26dd4_First%20Screen%20mob%20index.webp",
      desktop: "667ca0158cbfffe8a5cf2a01_MS-index.webp",
    },
    path: "musescore.com",
    description: "The home of sheet music.",
    onColor: true,
  },
  {
    label: "MuseScore Studio",
    iconId: "6511efa00919fb9000588fc0_logo_ms4",
    banner: {
      mobile: "6567294fc86a15e485b81bc8_MS4.jpg",
      desktop: "6511efa10919fb9000588fd0_ms4_web_mainpage.webp",
    },
    path: "/musescore-studio",
    description: "The world’s most popular composition and notation software.",
  },
  {
    label: "Audacity",
    iconId: "6511efa00919fb9000588fbd_logo_ad",
    banner: {
      mobile: "655d04e35a8770eed85927d1_ADCT.webp",
      desktop: "6511efa10919fb9000588fd1_ADCT.webp",
    },
    path: "/audacity",
    description: "The number one audio recording and editing app.",
    onColor: true,
  },
  {
    label: "Muse Hub",
    iconId: "667b448089a26ad9b077176b_mh",
    banner: {
      mobile: "667ca7024cfe1597b6e0b16b_MH-indexjpg.jpg",
      desktop: "667ca7024cfe1597b6e0b16b_MH-indexjpg.jpg",
    },
    path: "/muse-hub",
    description: "One hub for all your creative apps.",
    onColor: true,
  },
  {
    label: "Audio.com",
    iconId: "667b441b78e0517ea5a1b0c2_audio",
    path: "audio.com",
    banner: {
      mobile: "667ca1578372278c1e3b9179_First%20Screen%20mob%20index.webp",
      desktop: "667ca1053439d5df14de5c63_AU.webp",
    },
    description:
      "A rapidly-growing, free platform with a library spanning music, podcasts & more.",
    onColor: true,
  },
  {
    label: "StaffPad",
    iconId: "6511efa00919fb9000588fc4_logo_mh-1",
    path: "/staffpad",
    banner: {
      mobile: "6511efa10919fb9000588fdd_SP.webp",
      desktop: "6511efa10919fb9000588fd4_SP.webp",
    },
    description:
      "Handwrite music and watch it come alive with this award-winning tablet app.",
    onColor: true,
  },
  {
    label: "Tonebridge",
    iconId: "667d5b773ccdfd0443b55ad4_tb",
    path: "/tonebridge",
    banner: {
      mobile: "6511efa10919fb9000588fdb_TB.webp",
      desktop: "6511efa10919fb9000588fd5_TB.webp",
    },
    description:
      "A free, virtual effects-pedal. Transform your guitar tone to match the sound of iconic songs and records.",
    onColor: true,
  },
];

// Make sure to configure tailwind to purge files inside of lib for these classes to work
export const SLIDER_IMAGES = [
  {
    id: "667c1ec9ebf826c004a69380",
    comp: `Muse Group. <br /> For the music<br />makers.`,
    textGradient: "text-gradient-yellow",
  },
  {
    id: "654d2e2883bfc44e90a9d380",
    comp: `Our Mission: <br /> Changing the<br />lives of musicans<br />every day`,
    textGradient: "text-gradient-red",
  },
  {
    id: "654d424d20c9a512579256fc",
    comp: `Millions of<br />creatives<br />have joined<br />the Muse<br />commuunity`,
    textGradient: "text-gradient-yellow-2",
  },
  {
    id: "654d4437e50414f464bac639",
    comp: `<p>Home to the<br />word's most<br />popular music<br />software and<br />collections</p>`,
    textGradient: "text-gradient-purp",
  },
];

export const BANNERS = [
  {
    id: "6511efa10919fb9000588fef_Career",
    title: "careers",
    path: "/careers",
    description: "Join the muse team",
    image: "banner-1.png",
    backgroundColor: "hsl(var(--lime-green))",
    icon: "6511efa00919fb9000588fba_Arrow",
  },
  {
    id: "65383b84a1a71fb9eeb76621_Newsroom",
    title: "newsroom",
    path: "/newsroom",
    description: "Explore news and features",
    image: "banner-2.png",
    backgroundColor: "hsl(var(--purp))",
    icon: "6511efa00919fb9000588fc5_Arrow-cold-blue",
  },
];

export const SOCIALS = [
  {
    id: "6511efa00919fb9000588fb9_Connect_Facebook",
    label: "Facebook",
    path: "https://www.facebook.com/Museteamofficial",
  },
  {
    id: "65411d0212e210b8b7d93f9a_Connect_Instagram",
    label: "Instagram",
    path: "https://www.instagram.com/wearemusegroup/",
  },
  {
    id: "6511efa00919fb9000588fb5_Connect_LinkedIn",
    label: "LinkedIn",
    path: "https://www.linkedin.com/company/muse/",
  },
];

export const FOOTER_LINKS = [
  {
    label: "Press Contact",
    href: "/mailto:j.sutton@mu.se",
  },
  {
    label: "Partnerships",
    href: "mailto:a.smirnova@mu.se",
  },
  {
    label: "Careers",
    href: "mailto:career@mu.se",
  },
  {
    label: "Download Press Kit",
    path: "/content/dowlonad-press-kit",
  },
  {
    label: "Privacy Policy",
    path: "/content/privacy-policy",
  },
  {
    label: "Terms of Service",
    path: "/content/terms-of-service",
  },
];

export const CATEGORY_FILTERS = [
  "All",
  "Press Releases",
  "News",
  "Features",
  "Artists",
  "Team",
] as const;

export type CategoryLabel = (typeof CATEGORY_FILTERS)[number];

export const BLOG_DATA: BlogPost[] = [
  {
    image: "muse-img-2.png",
    title: "From midi to Muse Group: Larry Morton & music industry innovation",
    description: "The world’s most popular composition and notation software.",
    id: "larry-morton-muse-group",
    category: "Team",
    date: "August 8, 2024",
  },
  {
    image: "muse-img.png",
    title:
      "Major updates come to Muse Hub and Audacity: introducting a new audio store",
    description: "The world’s most popular composition and notation software.",
    id: "muse-hub-store-audacity-update",
    category: "Press Releases",
    date: "July 17, 2024",
  },
  {
    image: "muse-img-3.jpg",
    title: "Muse Group and Collins collaborate on a monumental musical rebrand",
    description: "The world’s most popular composition and notation software.",
    id: "muse-group-rebrand",
    category: "News",
    date: "June 27, 2024",
  },
];

export type BlogPost = {
  image: string;
  title: string;
  description: string;
  id: string;
  category: CategoryLabel;
  date: string;
};
