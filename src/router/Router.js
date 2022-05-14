import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import CreatePokemon from "../pages/Create";
import UpdatePokemon from "../pages/Update";
import Base from "../pages/index";
import Landing from "../pages/Landing/index"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Landing/>} />
          <Route path="/crear" element={<CreatePokemon />} />
          <Route path="/actualizar/:id" element={<UpdatePokemon />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
