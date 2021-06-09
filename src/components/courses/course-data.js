import Picture1 from "../../assets/background1.jpg";
import Picture2 from "../../assets/background2.jpg";
import Picture3 from "../../assets/background3.jpeg";
import Picture4 from "../../assets/background4.jpg";
const CourseData = [
  {
    id: 1,
    title: "PRÉPARATION AUX CONCOURS POST BAC",
    date: "Inscription Ouverte",
    description: [
      { title: "Faculté de Medcine Generale et Dentaire FMG/FMD" },
      { title: "Études Pharmaceutiques EP" },
      { title: "Institut Agronomique et Veterinaire IAV" },
      { title: "École Nationale Superieure d'Arts et Métiers ENSAM" },
      { title: "École Nationale d'Architecture ENA" },
      { title: "École Nationale de Commerce et de Gestion ENCG" },
    ],
    imgLink: Picture1,
    path: "/ContactUs",
  },
  {
    id: 2,
    title: "Orthophonie",
    date: "Inscription ouverte en presentiel",
    description: [
      { title: "un bilan de langage oral" },
      { title: "un bilan de langage écrit" },
      { title: "un bilan de la déglutition" },
      { title: "un bilan handicap" },
      { title: "un bilan neurologique (post AVC, maladie neurodégénérative)" },
    ],
    imgLink: Picture3,
    path: "/LostPage",
  },
  {
    id: 3,
    title: "Genie Civil",
    date: "Inscription Ouverte en présentiel",
    description: [{ title: "Design Industrie" }, { title: "Architecture BTP" }],
    imgLink: Picture2,
    path: "/LostPage",
  },
  {
    id: 4,
    title: "formation de langues ",
    date: "Inscription Ouverte en présentiel",
    description: [
      { 
        title: "Missions: Française, Américaine et Anglaise"
      },
      {
        title:
          "Vous voulez parler la langue de vos rêves ? Vous souhaitez suivre une formation linguistique ? Polytech lance une simple méthodologie  et pratique pour parler en utilisant une prononciation figurative contenant tous les mots dont vous avez besoin dans votre quotidien ",
      },
      {title:"Apprenez une langue où et quand vous voulez Anglaise ,Allamande ,Francaise ... Réalisez votre rêve linguistique avec Polytech !"},
    ],
    imgLink: Picture4,
    path: "/LostPage",
  },
];
export default CourseData;