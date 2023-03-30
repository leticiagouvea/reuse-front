import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../src/assets/style/GlobalStyle";
import UserContext from "./context/UserContext";
import Home from "./pages/Home";
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";
import Products from "./pages/Products/Products";
import ProductInfo from "./pages/Products/ProductInfo";
import AddProduct from "./pages/Products/AddProduct";
import Replace from "./pages/Replace";
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
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductInfo />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/replace" element={<Replace />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
