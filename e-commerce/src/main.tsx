import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import Router from "./routes/router.tsx"
import UserContext from "./context/UserContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(

    <UserContext>
      <RouterProvider  router={Router}/>
    </UserContext>
)
