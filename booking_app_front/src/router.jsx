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
import Cathegory from "./Pages/Cathegory/Cathegory";
import Opticien from "./Pages/Opticiens/Opticiens";
import Location from "./Pages/Locations/Location";

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
                element:<Cathegory cat='Restaurants' />
             },
             {
                path: "/Coiffeurs",
                element:<Cathegory cat='Coiffeurs' />
             },
             {
                path: "/Locations",
                element:<Cathegory cat='Locations'/>
             },
             {
               path: "/Activités",
               element:<Cathegory cat='Activités'/>
             },
             {
               path:"/Opticiens",
               element:<Cathegory cat='Opticiens'/>
             },
             {
               path:"/Nights-Club",
               element:<Cathegory cat='Nights club'/>
             },
             {
               path:"/Cafées-et-biscuitrie",
               element:<Cathegory cat='Cafées et biscuitrie'/>
             },
             {
              path:"/Sneakers",
              element:<Cathegory cat='Sneakers'/>
             },
             {
              path: "/Restaurants/:uri",
              element:<Restaurant />
             },
             {
              path: "/Coiffeurs/:uri",
              element:<Coiffeur />
             },
             {
              path:"/Cafées-et-biscuitrie/:uri",
              element:<Café_et_biscuitrie />
             },
             {
              path:"/Opticiens/:uri",
              element:<Opticien />
             },
             {
              path:"/Nights-Club/:uri",
              element:<Clubs />
             },
             {
              path:"/Activités/:uri",
              element:<Activity />
             },
             {
              path:"/Locations/:uri",
              element:<Location />
             },
             {
              path:"/Sneakers/:uri",
              element:<Sneakers />
             },
             {
              path:"*",
              element:<h1>not found</h1>
            }
        ]
    },
    
])