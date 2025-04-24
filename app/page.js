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
        <div className="flex justify-center items-center space-x-7 py-20">
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
