import { useRoutes } from "react-router-dom";

import LoginRouter from "./LoginRoutes";
import MainRoutes from "./MainRoutes";

export default function AppRouter() {
 return useRoutes([LoginRouter, MainRoutes]);
}

