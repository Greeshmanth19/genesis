import React from 'react';

export const IndustryIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 30 32" fill="none">
    <g filter="url(#filter0_di_54_1034)">
      <path
        d="M8 17V11H12L17 6V22L12 17H8ZM19 18V9.95C19.75 10.3 20.3542 10.8417 20.8125 11.575C21.2708 12.3083 21.5 13.1167 21.5 14C21.5 14.8833 21.2708 15.6833 20.8125 16.4C20.3542 17.1167 19.75 17.65 19 18ZM15 10.85L12.85 13H10V15H12.85L15 17.15V10.85Z"
        fill="#5F6368"
      />
      <path
        d="M8 17V11H12L17 6V22L12 17H8ZM19 18V9.95C19.75 10.3 20.3542 10.8417 20.8125 11.575C21.2708 12.3083 21.5 13.1167 21.5 14C21.5 14.8833 21.2708 15.6833 20.8125 16.4C20.3542 17.1167 19.75 17.65 19 18ZM15 10.85L12.85 13H10V15H12.85L15 17.15V10.85Z"
        fill="url(#paint0_linear_54_1034)"
      />
    </g>
    <defs>
      <filter
        id="filter0_di_54_1034"
        x="0"
        y="0"
        width="29.5"
        height="32"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.862745 0 0 0 0 0.890196 0 0 0 0 0.356863 0 0 0 0.4 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_54_1034" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_54_1034" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_54_1034" />
      </filter>
      <linearGradient
        id="paint0_linear_54_1034"
        x1="8"
        y1="2.66667"
        x2="25.027"
        y2="5.3865"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DCE35B" />
        <stop offset="0.5" stopColor="#45B649" />
        <stop offset="1" stopColor="#DCE35B" />
      </linearGradient>
    </defs>
  </svg>
);
