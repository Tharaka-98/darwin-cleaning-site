import React from "react";

interface GradientOverlayProps {
  className?: string;
}

const GradientOverlay: React.FC<GradientOverlayProps> = ({ className }) => {
  return (
    <div
      className={`w-full absolute h-[500px] bg-gradient-to-bl from-transparent via-transparent to-[#afecdc] dark:to-[#0f0f10] ${
        className || ""
      }`}
    />
  );
};

export default GradientOverlay;
