import routesName from "src/routes/enum.routes";

export type MenuItem = {
  title: string;
  url: string;
};

export const MenuArray: MenuItem[] = [
  { title: "Home", url: routesName.ROOT },
  { title: "Gallery", url: routesName.ROOT },
  { title: "Order", url: routesName.ROOT },
  { title: "About", url: routesName.ROOT },
];
