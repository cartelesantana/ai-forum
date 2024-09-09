import React from "react";
import Header from "./header";
import Footer from "./footer";
import { AppProps } from "next/app";

type propsType = {
  children: React.ReactNode;
};

function GeneralLayout(props: propsType) {
  return (
    <div className="max-w-[90rem] mx-auto">
      <Header />
      <>{props?.children}</>
      <Footer />
    </div>
  );
}

export default GeneralLayout;
