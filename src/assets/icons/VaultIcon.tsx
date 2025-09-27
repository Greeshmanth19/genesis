import React from 'react';

const VaultIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="36" viewBox="0 0 32 36" fill="none">
    <g filter="url(#vault_filter)">
      <path
        d="M14.5 19H17.5L16.925 15.775C17.2583 15.6083 17.5208 15.3667 17.7125 15.05C17.9042 14.7333 18 14.3833 18 14C18 13.45 17.8042 12.9792 17.4125 12.5875C17.0208 12.1958 16.55 12 16 12C15.45 12 14.9792 12.1958 14.5875 12.5875C14.1958 12.9792 14 13.45 14 14C14 14.3833 14.0958 14.7333 14.2875 15.05C14.4792 15.3667 14.7417 15.6083 15.075 15.775L14.5 19ZM16 26C13.6833 25.4167 11.7708 24.0875 10.2625 22.0125C8.75417 19.9375 8 17.6333 8 15.1V9L16 6L24 9V15.1C24 17.6333 23.2458 19.9375 21.7375 22.0125C20.2292 24.0875 18.3167 25.4167 16 26ZM16 23.9C17.7333 23.35 19.1667 22.25 20.3 20.6C21.4333 18.95 22 17.1167 22 15.1V10.375L16 8.125L10 10.375V15.1C10 17.1167 10.5667 18.95 11.7 20.6C12.8333 22.25 14.2667 23.35 16 23.9Z"
        fill="#5F6368"
      />
      <path
        d="M14.5 19H17.5L16.925 15.775C17.2583 15.6083 17.5208 15.3667 17.7125 15.05C17.9042 14.7333 18 14.3833 18 14C18 13.45 17.8042 12.9792 17.4125 12.5875C17.0208 12.1958 16.55 12 16 12C15.45 12 14.9792 12.1958 14.5875 12.5875C14.1958 12.9792 14 13.45 14 14C14 14.3833 14.0958 14.7333 14.2875 15.05C14.4792 15.3667 14.7417 15.6083 15.075 15.775L14.5 19ZM16 26C13.6833 25.4167 11.7708 24.0875 10.2625 22.0125C8.75417 19.9375 8 17.6333 8 15.1V9L16 6L24 9V15.1C24 17.6333 23.2458 19.9375 21.7375 22.0125C20.2292 24.0875 18.3167 25.4167 16 26ZM16 23.9C17.7333 23.35 19.1667 22.25 20.3 20.6C21.4333 18.95 22 17.1167 22 15.1V10.375L16 8.125L10 10.375V15.1C10 17.1167 10.5667 18.95 11.7 20.6C12.8333 22.25 14.2667 23.35 16 23.9Z"
        fill="url(#vault_gradient)"
      />
    </g>
    <defs>
      <filter
        id="vault_filter"
        x="0"
        y="0"
        width="32"
        height="36"
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
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_54_1059" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_54_1059" result="shape" />
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
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_54_1059" />
      </filter>
      <linearGradient
        id="vault_gradient"
        x1="8"
        y1="1.83333"
        x2="28.231"
        y2="4.89739"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DCE35B" />
        <stop offset="0.5" stopColor="#45B649" />
        <stop offset="1" stopColor="#DCE35B" />
      </linearGradient>
    </defs>
  </svg>
);

export default VaultIcon;
