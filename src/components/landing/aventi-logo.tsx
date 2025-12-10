export const AventiLogo = ({
  className = "w-12 h-12",
}: {
  className?: string;
}) => {
  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="200"
        cy="200"
        r="195"
        fill="#2C5F4F"
        stroke="#1A3A2E"
        strokeWidth="3"
      />
      <path d="M 50 250 L 120 140 L 190 250 Z" fill="#4A7C6B" opacity="0.8" />
      <path d="M 140 250 L 200 120 L 260 250 Z" fill="#3D6B5C" />
      <path d="M 220 250 L 280 150 L 350 250 Z" fill="#4A7C6B" opacity="0.8" />

      <path d="M 200 120 L 185 145 L 215 145 Z" fill="#E8F4F0" />
      <path d="M 280 150 L 270 170 L 290 170 Z" fill="#E8F4F0" />

      <g id="trees">
        <path d="M 80 250 L 90 220 L 100 250 Z" fill="#2D4A3E" />
        <path d="M 70 250 L 77 230 L 84 250 Z" fill="#234033" />
        <path d="M 110 250 L 118 225 L 126 250 Z" fill="#2D4A3E" />

        <path d="M 160 250 L 170 215 L 180 250 Z" fill="#234033" />
        <path d="M 150 250 L 156 235 L 162 250 Z" fill="#2D4A3E" />
        <path d="M 240 250 L 248 225 L 256 250 Z" fill="#2D4A3E" />
        <path d="M 265 250 L 272 230 L 279 250 Z" fill="#234033" />

        <path d="M 310 250 L 318 220 L 326 250 Z" fill="#2D4A3E" />
        <path d="M 300 250 L 305 235 L 310 250 Z" fill="#234033" />
        <path d="M 330 250 L 338 228 L 346 250 Z" fill="#2D4A3E" />
      </g>

      <g transform="translate(280, 100)">
        <path
          d="M 0 0 Q -8 -3 -15 -2 Q -10 2 -8 4 Q -4 2 0 0 Z"
          fill="#1A3A2E"
        />
        <path d="M 0 0 Q 8 -3 15 -2 Q 10 2 8 4 Q 4 2 0 0 Z" fill="#1A3A2E" />
      </g>

      <g transform="translate(130, 235)">
        <path
          d="M 0 0 L -2 -8 L -1 -12 L 1 -8 L 3 0 M -1 -12 L -3 -15 M -1 -12 L 1 -16 M 1 -12 L 3 -15"
          stroke="#1A3A2E"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <ellipse cx="0" cy="-3" rx="3" ry="4" fill="#1A3A2E" />
      </g>

      <g transform="translate(240, 242)">
        <path
          d="M 0 0 L -1 -4 L -2 -6 L -4 -5 L -6 -3 L -8 0"
          stroke="#1A3A2E"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="-3" cy="-4" r="2.5" fill="#1A3A2E" />
        <path
          d="M -2 -6 L -1 -8 M -4 -6 L -5 -8"
          stroke="#1A3A2E"
          strokeWidth="1"
        />
      </g>

      <ellipse
        cx="200"
        cy="250"
        rx="180"
        ry="15"
        fill="#234033"
        opacity="0.6"
      />

      <text
        x="200"
        y="310"
        fontFamily="Arial, sans-serif"
        fontSize="42"
        fontWeight="bold"
        textAnchor="middle"
        fill="#E8F4F0"
        letterSpacing="4"
      >
        AVENTI
      </text>

      <text
        x="200"
        y="335"
        fontFamily="Arial, sans-serif"
        fontSize="12"
        textAnchor="middle"
        fill="#C5D9CE"
        letterSpacing="2"
      >
        WILDERNESS ADVENTURES
      </text>

      <circle cx="90" cy="320" r="1.5" fill="#C5D9CE" />
      <circle cx="310" cy="320" r="1.5" fill="#C5D9CE" />
    </svg>
  );
};
