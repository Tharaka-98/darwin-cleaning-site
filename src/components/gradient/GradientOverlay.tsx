import React from "react";

interface GradientOverlayProps {
  className?: string;
}

const GradientOverlay: React.FC<GradientOverlayProps> = ({ className }) => {
  return (
    <div
      className={`w-full absolute h-[500px] bg-gradient-to-b from-transparent to-[#003678] ${className || ""}`}
    />
  );
};

export default GradientOverlay;
