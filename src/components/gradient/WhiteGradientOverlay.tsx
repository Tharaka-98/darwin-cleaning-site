import React from "react";

interface GradientOverlayProps {
  className?: string;
}

const WhiteGradientOverlay: React.FC<GradientOverlayProps> = ({ className }) => {
  return (
    <div
      className={`w-full h-full bg-gradient-to-b from-white to-transparent ${className || ""}`}
    />
  );
};

export default WhiteGradientOverlay;
