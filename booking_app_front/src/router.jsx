import {
  createBrowserRouter,
 
 
} from "react-router-dom";
import App from "./App";
import Main from "./components/Main";
import Restaurant from "./components/Restaurant/Restaurant";
import Hotel from "./components/Hotels/Hotel";
import Appartement from "./components/Appartement/Appartement";
import Coiffeur from "./components/Coiffeur/Coiffeur";
import VTC from "./components/VTC/VTC";
export const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children:[
            {
                        index: true,
                element: <Main />
             },
             {
                path: "/Resturants",
                element:<Restaurant />
             },
             {
                path: "/Hotels",
                element:<Hotel />
             },
             {
                path: "/Appartements",
                element:<Appartement />
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
               path: "/Activités"
             }


        ]
    }
])