// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: 'Products'
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #95ff7a 0%, #06cf17 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100,102,111],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #fc7987 0%, #fa3247 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40,60 , 85,93,42],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
      "linear-gradient(180deg, #bd7ef7 0%, #8916f2 100%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20,12 , 16 ,13],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    
    name: "goku",
    noti: "has ordered Samsung Smart phone.",
    time: "45 seconds ago",
  },
  {
    img: img2,
    name: "Gojo Satoru",
    noti: "has ordered apple watch .",
    time: "20 minutes ago",
  },
  {
    img: img3,
    name: "Yor Forger",
    noti: "has ordered Boat smart watch",
    time: "1 hours ago",
  },
];
