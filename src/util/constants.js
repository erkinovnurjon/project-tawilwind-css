import {
  BsFillSendFill,
  BsShieldFillCheck,
  BsDropbox,
  BsInstagram,
} from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

export const navigationLinks = [
      {
            id:'home',
            title:'Bosh sahifa'
      },
      {
            id:'features',
            title:'Xizmatlar'
      },
      {
            id:'products',
            title:'Mahsulotlar'
      },
      {
            id:'clients',
            title:'Mijozlar'
      }
]
export const statistics = [
     {
    id: 1,
    title: "Foydalanuvchi Faol",
    value: "9300+",
  },
  {
    id: 2,
    title: "Kompaniya homiyligida",
    value: "100+",
  },
  {
    id: 3,
    title: "Tranzaksiya",
    value: "110M+",
  },
];

export const features = [
  {
    id: 1,
    icon: <AiFillStar className={`w-[50%] h-[50%] object-contain icons`} />,
    title: "Mukofotlar",
    content:
      "Eng yaxshi kredit kartalari aksiyalar va sovrinlarning ajoyib kombinatsiyasini taklif qiladi.",
  },
  {
    id: 2,
    icon: (
      <BsShieldFillCheck className={`w-[50%] h-[50%] object-contain icons`} />
    ),
    title: "100% Himoyalangan",
    content:
      "Ma'lumotlaringiz va tranzaksiyalaringiz xavfsiz ekanligiga ishonch hosil qilish uchun choralar.",
  },
  {
    id: 3,
    icon: <BsFillSendFill className={`w-[50%] h-[50%] object-contain icons`} />,
    title: "Balansni o'tkazish",
    content:
      "Balansni o'tkazish kredit kartasi sizga foizlarni to'lashda ko'p pul tejash imkonini beradi.",
  },
];

export const feedbacks = [
  {
    id: 1,
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Ledaer",
  },
  {
    id: 2,
    content:
      "Money makes your life easier. If you are lucky to have it, you are lucky.",
    name: "Steve Mark",
    title: "Founder & Ledaer",
  },
  {
    id: 3,
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Ledaer",
  },
];