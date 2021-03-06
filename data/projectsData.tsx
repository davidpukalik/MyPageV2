import firstWebsiteIMG from "../public/images/projects/davidpukalik_v1.jpg";
import thisWebsiteScreenshotIMG from "../public/images/projects/davidpukalikcz_screenshot.png";
import MiniReactAppsIMG from "../public/images/projects/react-apps-screenshot.png";
import EditableTableIMG from "../public/images/projects/editable_table_react_screenshot.png";
import WebRevolutionIMG from "../public/images/projects/webrevolution_screenshot.png";
import MakerLandingIMG from "../public/images/projects/maker_prelaunch_screenshot.png";
import githubIMG from "../public/images/projects/github-big.png";

const projectsData = {
  cs: [
    {
      id: 0,
      img: githubIMG.src,
      title: "Více na GitHubu",
      desc: "Další menší projekty lze najít na GitHubu. Poté jsem dělal ještě další projekty v Reactu, ale ty jsem dělal na stáži.",
      date: "",
      gitLink: "https://github.com/davidpukalik",
      link: "",
    },
    {
      id: 1,
      img: MakerLandingIMG.src,
      title: "Maker Landing Page",
      desc: "Trénoval jsem zde HTML, CSS (SCSS). Také jsem zde zkoušel pojmenování BEM. Design je z frondendmentor.io.",
      date: "Listopad 2021",
      gitLink: "https://github.com/davidpukalik/maker-pre-launch-landing-page",
      link: "https://davidpukalik.github.io/maker-pre-launch-landing-page/",
    },
    {
      id: 2,
      img: WebRevolutionIMG.src,
      title: "WebRevolution",
      desc: "Klasický web s HTML, CSS (SCSS), Bootstrap. Hlavně jsem se zde učil Bootstrap.",
      date: "Listopad 2021",
      gitLink: "https://github.com/davidpukalik/bootstrap-webrevolution",
      link: "https://davidpukalik.github.io/bootstrap-webrevolution",
    },
    {
      id: 3,
      img: MiniReactAppsIMG.src,
      title: "Mini React Apps",
      desc: "Na tomto jsem procvičoval Material UI a React.",
      date: "Prosinec 2021",
      gitLink: "https://github.com/davidpukalik/mini-react-apps",
      link: "https://mini-react-apps-dp.netlify.app/",
    },
    {
      id: 4,
      img: EditableTableIMG.src,
      title: "Upravovací Tabulka (local storage)",
      desc: "Čtení dat z json a následná úprava, mazání, filtrace dat. Tvořená v Reactu.",
      date: "Leden 2022",
      gitLink:
        "https://github.com/davidpukalik/react-editable-table-with-local-storage",
      link: "https://editable-table-dp.netlify.app/",
    },
    {
      id: 5,
      img: firstWebsiteIMG.src,
      title: "davidpukalik.cz (bývalý)",
      desc: "Jedna z prvních webovek, které jsem dělal. Trénoval jsem na ní HTML a CSS (SCSS).",
      date: "Listopad 2021",
      gitLink: "https://github.com/davidpukalik/my-page",
      link: "https://davidpukalik.github.io/my-page/",
    },
    {
      id: 6,
      img: thisWebsiteScreenshotIMG.src,
      title: "davidpukalik.cz",
      desc: "Nynější webovka, hlavní použité technologie React (NextJS), TypeScript, Styled Components, Node, ...",
      date: "Duben 2022",
      gitLink: "https://github.com/davidpukalik/MyPageV2",
      link: "/",
    },
  ],
  en: [
    {
      id: 0,
      img: githubIMG.src,
      title: "More On GitHubu",
      desc: "Other smaller projects can be found on GitHub. After that, I did some other projects in React, but they were done as part of my internship/part-time.",
      date: "",
      gitLink: "https://github.com/davidpukalik",
      link: "",
    },
    {
      id: 1,
      img: MakerLandingIMG.src,
      title: "Maker Landing Page",
      desc: "I trained here HTML, CSS (SCSS). I also tried BEM naming. The design is from frondendmentor.io.",
      date: "November 2021",
      gitLink: "https://github.com/davidpukalik/maker-pre-launch-landing-page",
      link: "https://davidpukalik.github.io/maker-pre-launch-landing-page/",
    },
    {
      id: 2,
      img: WebRevolutionIMG.src,
      title: "WebRevolution",
      desc: "Classic website with HTML, CSS (SCSS), Bootstrap. I was focused on learning Bootstrap here.",
      date: "November 2021",
      gitLink: "https://github.com/davidpukalik/bootstrap-webrevolution",
      link: "https://davidpukalik.github.io/bootstrap-webrevolution",
    },
    {
      id: 3,
      img: MiniReactAppsIMG.src,
      title: "Mini React Apps",
      desc: "I practiced Material UI and React on this.",
      date: "December 2021",
      gitLink: "https://github.com/davidpukalik/mini-react-apps",
      link: "https://mini-react-apps-dp.netlify.app/",
    },
    {
      id: 4,
      img: EditableTableIMG.src,
      title: "Editable Table (local storage)",
      desc: "Reading data from json and then editing, deleting, filtering data. Created in React.",
      date: "January 2022",
      gitLink:
        "https://github.com/davidpukalik/react-editable-table-with-local-storage",
      link: "https://editable-table-dp.netlify.app/",
    },
    {
      id: 5,
      img: firstWebsiteIMG.src,
      title: "davidpukalik.cz (old)",
      desc: "One of the first websites I did. I trained HTML and CSS (SCSS) on it.",
      date: "November 2021",
      gitLink: "https://github.com/davidpukalik/my-page",
      link: "https://davidpukalik.github.io/my-page/",
    },
    {
      id: 6,
      img: thisWebsiteScreenshotIMG.src,
      title: "davidpukalik.cz",
      desc: "Current website, main used technologies are React (NextJS), TypeScript, Styled Components, Node, ...",
      date: "April 2022",
      gitLink: "https://github.com/davidpukalik/MyPageV2",
      link: "/",
    },
  ],
};
export default projectsData;
