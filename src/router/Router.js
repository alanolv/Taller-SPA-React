import { Route, BrowserRouter, Routes } from "react-router-dom";
import Base from "../pages/index.js";
import Dashboard from "../pages/Dashboard";
import CreatePokemon from "../pages/Create/index.js";
import UpdatePokemon from "../pages/Update/index.js";
function Router(){
    return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Base/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="crear" element={<CreatePokemon/>}/>
            <Route path="actualizar" element={<UpdatePokemon/>}/>
        </Route>
    </Routes>
    </BrowserRouter>);
}
export default Router;