import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Private from "./pages/private";
import Login from "./pages/login";
import Private2 from "./pages/private2";
import NotFound from "./pages/notFound";
import Components from "./pages/components";
import Apis from "./pages/apis";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/components" element={<Components />} />
      <Route path="/apis" element={<Apis />} />
      <Route element={<PrivateRoute />}>
        <Route path="/private" element={<Private />} />
        <Route path="/private2" element={<Private2 />} />
      </Route>
    </Routes>
  );
}

export default App;

function PrivateRoute({ children }) {
  // your auth check logic goes here:
  const auth = false;
  return auth ? children : <Navigate to="/login" replace />;
}
