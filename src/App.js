import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../src/assets/style/GlobalStyle";
import UserContext from "./context/UserContext";
import HomePage from "../src/pages/HomePage";
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserContext.Provider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
