import ProfileCard from "@/components/profileCard";
import { USER_TYPES } from "@/utils/constants";

export default function App() {
  return (
    <div>
      <div className=" flex justify-center items-center py-4">
        <span className="text-xl font-semibold leading-6">
          Choose your preferred category
        </span>
      </div>
      <div className="flex justify-center items-center space-x-7 py-20">
        {USER_TYPES?.map((userType, i) => (
          <div key={i}>
            <ProfileCard title={userType} />
          </div>
        ))}
      </div>
    </div>
  );
}
