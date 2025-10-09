import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Outlet, useNavigation } from "react-router";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <div>
      <Header></Header>
      {isNavigating && (
        <div class="spinner-border text-info" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
