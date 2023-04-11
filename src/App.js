import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "../src/assets/style/GlobalStyle";
import UserContext from "./context/UserContext";
import OverlayProposals from "./components/Proposals/OverlayProposals";
import OverlayReplace from "./components/Replace/OverlayReplace";
import {
  Home,
  SignUp,
  SignIn,
  Products,
  ProductInfo,
  AddProduct,
  Replace,
} from "./pages";

export default function App() {
  const [showProposals, setShowProposals] = useState(false);
  const [showAccount, setShowAccount] = useState(true);
  const [showWindowReplace, setShowWindowReplace] = useState(false);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <BrowserRouter>
        <GlobalStyle />
        <OverlayProposals
          showProposals={showProposals}
          setShowProposals={setShowProposals}
        />
        <OverlayReplace
          showWindowReplace={showWindowReplace}
          setShowWindowReplace={setShowWindowReplace}
        />
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
    </>
  );
}
