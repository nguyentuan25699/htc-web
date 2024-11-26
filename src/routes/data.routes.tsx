import HomePage from "src/components/pages/Home";
import routesName from "./enum.routes";
import { IRouterData } from "./type.routes";
import MainLayout from "src/components/layouts/MainLayout";

export const routesData: IRouterData[] = [
  {
    path: routesName.ROOT,
    layout: MainLayout,
    component: () => <HomePage />,
  },
];
