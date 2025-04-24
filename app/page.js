// "use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import React from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";
import ProfileCard from "@/components/profileCard";
import { USER_TYPES } from "@/utils/constants";

export default function App() {
  return (
    <div>
      {/* <Provider store={store}> */}
        <Header />
        <div className="grid md:gap-x-3 grid-flow-row md:rid-flow-col grid-cols-2 ">
          {USER_TYPES?.map((userType, i) => (
            <div key={i}>
              <ProfileCard title={userType} />
            </div>
          ))}
        </div>
        <Footer />
      {/* </Provider> */}
    </div>
  );
}
