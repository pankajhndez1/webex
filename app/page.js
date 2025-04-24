import { store } from "@/redux/store";
import { Provider } from "react-redux";
import React from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";
import ProfileCard from "@/components/profileCard";

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <ProfileCard title={"Buyer"} />
        <Footer />
      </Provider>
    </div>
  );
}
