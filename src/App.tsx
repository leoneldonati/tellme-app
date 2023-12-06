import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AuthGuard from "./auth/authGuardian";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* PROTECTED ROUTES */}
          <Route element={<AuthGuard />}>

            <Route path="/" element={<Home />}/>


          </Route>

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
