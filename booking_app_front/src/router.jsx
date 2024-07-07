import {
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";

import Restaurant from "./Pages/Restaurant/Restaurant";
import Coiffeur from "./Pages/Coiffeur/Coiffeur";
import VTC from "./Pages/VTC/VTC";
import Activity from "./Pages/Activity/Activity";
import Evenement from "./Pages/Opticiens/Opticiens";
import Home from "./Pages/Home";
import Clubs from "./Pages/Clubs/Clubs";
import Café_et_biscuitrie from "./Pages/Cafés et Biscuitrie/Café_et_biscuitrie";
import Sneakers from "./Pages/Sneakers/Sneakers";

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
                path: "/Restaurants",
                element:<Restaurant />
             },
             {
                path: "/Coiffeurs",
                element:<Coiffeur />
             },
             {
                path: "/Locations",
                element:<VTC />
             },
             {
               path: "/Activités",
               element:<Activity />
             },
             {
               path:"/Opticiens",
               element:<Evenement />
             },
             {
               path:"/Clubs",
               element:<Clubs/>
             },
             {
               path:"/Coffees",
               element:< Café_et_biscuitrie/>
             },
             {
              path:"/Sneakers",
              element:<Sneakers />
             }


        ]
    },
    {
      path:"*",
      element:<h1>not found</h1>
    }
])