import React from "react";
import { Outlet, useNavigation } from "react-router";
import { ToastContainer } from 'react-toastify';
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <div>
      <Header></Header>
      {isNavigating && (
        <div class="spinner-border text-info flex justify-center items-center" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Root;
