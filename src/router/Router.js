import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import CreatePokemon from "../pages/Create";
import UpdatePokemon from "../pages/Update";
import Bank from "../pages/Bank"
import Base from "../pages/index";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Dashboard />} />
          <Route path="/crear" element={<CreatePokemon />} />
          <Route path="/actualizar/:id" element={<UpdatePokemon />} />
          <Route path="/Bank" element={<Bank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
