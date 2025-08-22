import React from "react";

interface GradientOverlayProps {
  className?: string;
}

const PinkGradientOverlay: React.FC<GradientOverlayProps> = ({ className }) => {
  return (
    <div
      className={`w-full absolute h-[500px] bg-gradient-to-bl from-transparent via-transparent to-[#70cabe] dark:to-[#0f0f10] ${
        className || ""
      }`}
    />
  );
};

export default PinkGradientOverlay;
