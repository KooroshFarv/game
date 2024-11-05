import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import GamePageDetail from "../pages/GamePageDetail";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout onSearch={function (searchText: string): void {
            throw new Error("Function not implemented.");
        } } />,
        errorElement : <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            {path : 'games/:slug', element : <GamePageDetail />},
          
        ]
    }
])

export default router;