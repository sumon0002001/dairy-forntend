import React from 'react';
import { useRoutes } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import { DairyPost } from './pages/DairyPost';


const App = () => {
   const elements = useRoutes([
       {path: '/',
        element: <Layout />,
        children: [
            {path: '/', element: <Home />},
            {path: '/api/posts/:id', element:<DairyPost/>}
        ]
       }
   ])
    return elements;

}

export default App
