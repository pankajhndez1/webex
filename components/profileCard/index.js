import React from "react";

const ProfileCard = ({ title }) => {
  return (
    <div className="relative w-full max-w-xs p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border border-white/20 text-white transition-transform hover:scale-105 duration-300 cursor-pointer">
      {/* Optional icon or emoji */}
      <div className="text-5xl mb-4">💎</div>

      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm mt-2 text-white/70">
        This is a stunning glassmorphic card. Add your custom content here.
      </p>
    </div>
  );
};

export default ProfileCard;
