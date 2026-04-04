/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { theme } from "../../../assets/Variables";

export const NAVBAR_CONFIG = {
  title: "NEC STORE",
  navBarOptions: [
    {
      id: "profile",
      title: "Profile",
      imageSrc: theme.images.viewProfile,
      link: "/profile",
    },
    {
      id: "switchRole",
      title: "Switch Role",
      imageSrc: theme.images.switchRole,
      link: "/roles",
    },
    {
      id: "logOut",
      title: "LogOut",
      imageSrc: theme.images.logout,
      link: "/signin",
    },
  ],
};
