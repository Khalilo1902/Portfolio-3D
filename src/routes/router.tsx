import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Not found</div>,
    children: [
        {
            path :"/",
            element:<HomePage/>
        
        },
        {
          path :"/home",
          element:<HomePage/>
      
      },

    ],
  },
]);

export default router;
