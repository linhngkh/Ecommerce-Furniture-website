import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./reset.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import store from "./store";
import { Provider } from "react-redux";

//components
import HomeScreen from "./screens/HomeScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import Contact from "./screens/company/Contact.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ProductDetail from "./pages/ProductsDetail";
import Shop from "./pages/Shop.jsx";
import PagesGrid from "./pages/PagesGrid.jsx";
import PageShopList from "./pages/PageShopList.jsx";
import PageAccessories from "./pages/PageAccessories.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AboutUs from "./screens/company/AboutUs.jsx";
import Faq from "./screens/company/Faq.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index path="/" element={<HomeScreen />} />
      {/* screens */}
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      {/* pages */}
      {/* blog page*/}
      <Route path="/blog" element={<BlogPage />} />
      {/* single blog */}
      <Route path="/products" element={<ProductDetail />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/pages/grid" element={<PagesGrid />} />
      <Route path="/pages/shoplist" element={<PageShopList />} />
      <Route path="/pages/accessories" element={<PageAccessories />} />

      {/* company */}
      <Route path="/company/contact" element={<Contact />} />
      <Route path="/company/about-us" element={<AboutUs />} />
      <Route path="/company/faq" element={<Faq />} />
      {/* 404notfound */}
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
