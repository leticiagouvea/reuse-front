import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../src/assets/style/GlobalStyle";
import UserContext from "./context/UserContext";
import HomePage from "../src/pages/HomePage";
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";
import ProductsPage from "./pages/Products/ProductsPage";
import ProductInfoPage from "./pages/Products/ProductInfoPage";
import OverlayProposals from "./components/Proposals/OverlayProposals";
import OverlayReplace from "./components/Replace/OverlayReplace";

export default function App() {
  const [showProposals, setShowProposals] = useState(false);
  const [showAccount, setShowAccount] = useState(true);
  const [showWindowReplace, setShowWindowReplace] = useState(false);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <OverlayProposals showProposals={showProposals} setShowProposals={setShowProposals} />
      <OverlayReplace showWindowReplace={showWindowReplace} setShowWindowReplace={setShowWindowReplace} />
      <UserContext.Provider
        value={{
          showProposals,
          setShowProposals,
          showAccount,
          setShowAccount,
          showWindowReplace,
          setShowWindowReplace,
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductInfoPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
