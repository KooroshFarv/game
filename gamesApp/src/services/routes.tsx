import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout";
import HomePage from "../pages/HomePage";
import GamePageDetail from "../pages/GamePageDetail";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            {path : 'games/:id', element : <GamePageDetail />}
        ]
    }
])

export default router;