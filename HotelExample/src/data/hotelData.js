import hotelIcon from "../../Adminpage/icons/hotelicon.png";
import perfil from "../../Adminpage/icons/perfil.jpeg";
import hab1 from "../../Adminpage/icons/hab1.jpg";
import hab2 from "../../Adminpage/icons/hab2.jpg";
import hab3 from "../../Adminpage/icons/hab3.jpg";
import Beach from "../../Adminpage/icons/Beach.jpg";

export const pageTitles = {
  "/": "Main",
  "/rooms": "Rooms",
  "/reservation": "Reservation",
  "/guests": "Guests",
  "/reports": "Reports",
  "/notifications": "Notifications",
  "/settings": "Settings",
};

export const menuGroups = [
  {
    title: "Main",
    items: [
      { path: "/", label: "Home", icon: "bx-home" },
      { path: "/rooms", label: "Rooms", icon: "bx-bed" },
      { path: "/reservation", label: "Reservations", icon: "bx-calendar" },
    ],
  },
  {
    title: "Management",
    items: [
      { path: "/guests", label: "Guests", icon: "bx-group" },
      { path: "/reports", label: "Reports", icon: "bx-news" },
      { path: "/notifications", label: "Notifications", icon: "bx-bell" },
    ],
  },
  {
    title: "System",
    items: [{ path: "/settings", label: "Settings", icon: "bx-cog" }],
  },
];

export const userProfile = {
  hotelIcon,
  avatar: perfil,
  name: "Oswal",
  email: "oswalmarin56@gmail.com",
};

export const rooms = [
  { name: "Room 1", image: hab1 },
  { name: "Room 2", image: hab2 },
  { name: "Room 3", image: hab3 },
  { name: "Room 4", image: hab1 },
  { name: "Room 5", image: hab1 },
  { name: "Room 6", image: hab1 },
  { name: "Room 7", image: hab1 },
  { name: "Room 8", image: hab1 },
  { name: "Room 9", image: hab1 },
  { name: "Room 10", image: hab1 },
];

export const imageMain = [
  {name: "BeachMain 1", image: Beach }
]

export const roomStatuses = [
  { label: "Disponible", value: 6, className: "disponible", symbol: "OK" },
  { label: "Ocupado", value: 1, className: "ocupado", symbol: "X" },
  { label: "Reservado", value: 2, className: "reservado", symbol: "R" },
  { label: "Inhabilitado", value: 1, className: "inhabilitado", symbol: "-" },
];
