import Header from "@/components/header";
import Footer from "@/components/footer";
import ProfileCard from "@/components/profileCard";
import { USER_TYPES } from "@/utils/constants";
import ReduxProvider from "@/components/reduxProvider";

export default function App() {
  return (
    <div>
      <ReduxProvider>
        <Header />
        <div className="grid md:gap-x-3 grid-flow-row md:grid-flow-col grid-cols-2">
          {USER_TYPES?.map((userType, i) => (
            <div key={i}>
              <ProfileCard title={userType} />
            </div>
          ))}
        </div>
        <Footer />
      </ReduxProvider>
    </div>
  );
}
