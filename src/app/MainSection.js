import React from "react";
import ShopLocator from "components/shop_locator/ShopLocator";
import ProductsDisplay from "components/products_display/ProductsDisplay";
import { Route, Redirect } from "react-router-dom";
import VendorSignup from "components/vendor/VendorSignup";
import LogOut from "shared/auth/LogOut";
import LoginForm from "shared/auth/LoginForm";
import VendorUpdate from "components/vendor/VendorUpdate";

const MainSection = () => {
  return (
    <>
      <Route exact path="/">
        <ProductsDisplay />
      </Route>
      <Route exact path="/login">
        <LoginForm />
      </Route>
      <Route path="/logout">
        <LogOut />
      </Route>
      <Route exact path="/home">
        <Redirect to="/" />
      </Route>
      <Route path="/categories/:category">
        <ProductsDisplay />
      </Route>
      <Route exact path="/order">
        <ProductsDisplay />
      </Route>
      <Route exact path="/shop">
        <ProductsDisplay />
      </Route>
      <Route exact path="/shops">
        <ShopLocator />
      </Route>
      <Route exact path="/shops/register">
        <VendorSignup />
      </Route>
      <Route exact path="/shops/update">
        <VendorUpdate />
      </Route>
      <Route exact path="/events">
        <ProductsDisplay />
      </Route>
      <Route exact path="/gallery">
        <ProductsDisplay />
      </Route>
      <Route exact path="/contact">
        <ProductsDisplay />
      </Route>
      <Route exact path="/faqs">
        <ProductsDisplay />
      </Route>
      <Route exact path="/facebook">
        <ProductsDisplay />
      </Route>
      <Route exact path="/linkedin">
        <ProductsDisplay />
      </Route>
      <Route exact path="/twitter">
        <ProductsDisplay />
      </Route>
      <Route exact path="/instagram">
        <ProductsDisplay />
      </Route>
      <Route exact path="/help">
        <ProductsDisplay />
      </Route>
    </>
  );
};

export default MainSection;
