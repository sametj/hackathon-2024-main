import Layout from "@root/layouts/layout/Layout";
import BoardGamesPage from "@root/pages/BoardGamesPage";
import CalendarPage from "@root/pages/CalendarPage";
import GiftCardsPage from "@root/pages/GiftCardsPage";
import HomePage from "@root/pages/HomePage";
import MenuPage from "@root/pages/MenuPage";
import PressPage from "@root/pages/PressPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <HomePage />
        </Layout>
      ),
    },
    {
      path: "/menu",
      element: (
        <Layout>
          <MenuPage />
        </Layout>
      ),
    },
    {
      path: "/press",
      element: (
        <Layout>
          <PressPage />
        </Layout>
      ),
    },
    {
      path: "/gift-cards",
      element: (
        <Layout>
          <GiftCardsPage />
        </Layout>
      ),
    },
    {
      path: "/calendar",
      element: (
        <Layout>
          <CalendarPage />
        </Layout>
      ),
    },
    {
      path: "/board-games",
      element: (
        <Layout>
          <BoardGamesPage />
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Routes;
