import React from "react";

export default function GymLogoIcon({ width = 42, height = 42 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "drop-shadow(0px 0px 8px rgba(212, 175, 55, 0.4))" }}
    >
      <defs>
        {/* Metallic Gold Gradient */}
        <linearGradient id="brandGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF3B0" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#9A7B1C" />
        </linearGradient>

        {/* Accent Red/Crimson Gradient */}
        <linearGradient id="brandRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4D4D" />
          <stop offset="100%" stopColor="#B30000" />
        </linearGradient>
      </defs>

      {/* Outer Arch Ring (Inspired by the original arc) */}
      <path
        d="M 40 110 A 65 65 0 1 1 160 110"
        stroke="url(#brandGold)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />

      {/* Muscular Torso / Bodybuilder Silhouette */}
      <g fill="url(#brandGold)">
        {/* Head */}
        <circle cx="100" cy="55" r="11" />
        
        {/* Traps & Shoulders */}
        <path d="M 82 72 Q 100 68 118 72 L 132 82 Q 140 95 130 112 Q 120 118 112 100 L 108 122 L 92 122 L 88 100 Q 80 118 70 112 Q 60 95 68 82 Z" />
        
        {/* Chest / Abs Lines */}
        <path d="M 90 85 Q 100 88 110 85 Q 100 102 90 85 Z" fill="rgba(10,10,10,0.4)" />
      </g>

      {/* Left Dumbbell Weight Plates */}
      <g fill="url(#brandGold)">
        <rect x="12" y="85" width="5" height="30" rx="2.5" />
        <rect x="19" y="80" width="6" height="40" rx="3" fill="url(#brandRed)" />
        <rect x="27" y="75" width="7" height="50" rx="3.5" />
        {/* Barbell End Piece */}
        <rect x="34" y="97" width="12" height="6" rx="1" />
      </g>

      {/* Right Dumbbell Weight Plates */}
      <g fill="url(#brandGold)">
        <rect x="183" y="85" width="5" height="30" rx="2.5" />
        <rect x="175" y="80" width="6" height="40" rx="3" fill="url(#brandRed)" />
        <rect x="166" y="75" width="7" height="50" rx="3.5" />
        {/* Barbell End Piece */}
        <rect x="154" y="97" width="12" height="6" rx="1" />
      </g>
    </svg>
  );
}