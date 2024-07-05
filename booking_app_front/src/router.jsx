import {
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";

import Restaurant from "./Pages/Restaurant/Restaurant";
import Hotel from "./Pages/Hotels/Hotel";
import Appartement from "./Pages/Appartement/Appartement";
import Coiffeur from "./Pages/Coiffeur/Coiffeur";
import VTC from "./Pages/VTC/VTC";
import Activity from "./Pages/Activity/Activity";
import Evenement from "./Pages/Evenement/Evenement";
import Home from "./Pages/Home";
import Clubs from "./Pages/Clubs/Clubs";
export const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children:[
            {
                        index: true,
                element: <Home />
             },
             {
                path: "/Resturants",
                element:<Restaurant />
             },
             {
                path: "/Coiffeurs",
                element:<Coiffeur />
             },
             {
                path: "/VTC",
                element:<VTC />
             },
             {
               path: "/Activités",
               element:<Activity />
             },
             {
               path:"/Evenements",
               element:<Evenement />
             },
             {
               path:"/Clubs",
               element:<Clubs/>
             },
             {
               path:""
             }


        ]
    },
    {
      path:"*",
      element:<h1>not found</h1>
    }
])