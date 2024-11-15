import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import oaList from "./oaList";
import MainList from "./Components/MainList";
const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Outlet />,
      children: [
        {
          path: "/",
          element: <MainList />,
        },

        ...oaList.map((item) => ({
          path: item.link,
          element: <item.component />,
        })),
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
