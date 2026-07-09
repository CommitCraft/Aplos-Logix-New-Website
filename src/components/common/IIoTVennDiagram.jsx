export default function IIoTVennDiagram() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 scale-75 rounded-full bg-blue-500/10 blur-3xl" />

      <svg
        viewBox="0 0 500 430"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="iiot-title"
        aria-describedby="iiot-desc"
        className="relative z-10 h-auto w-full drop-shadow-2xl"
      >
        <title id="iiot-title">
          IIoT Excellence Diagram
        </title>

        <desc id="iiot-desc">
          Data Acquisition, Data Transportation and Data Processing
          working together as an Industrial IoT ecosystem.
        </desc>

        <defs>
          {/* Orange */}
          <linearGradient
            id="acquisitionGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#fb923c" />
          </linearGradient>

          {/* Blue */}
          <linearGradient
            id="transportGradient"
            x1="0"
            y1="1"
            x2="1"
            y2="0"
          >
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>

          {/* Cyan */}
          <linearGradient
            id="processingGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>

          {/* Center Glow */}
          <radialGradient
            id="centerGlow"
            cx="50%"
            cy="50%"
            r="60%"
          >
            <stop
              offset="0%"
              stopColor="#ffffff"
              stopOpacity="0.55"
            />

            <stop
              offset="50%"
              stopColor="#60a5fa"
              stopOpacity="0.25"
            />

            <stop
              offset="100%"
              stopColor="#1d4ed8"
              stopOpacity="0"
            />
          </radialGradient>

          <marker
            id="arrowHead"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto"
          >
            <path
              d="M 0 0 L 10 5 L 0 10 z"
              fill="#f97316"
            />
          </marker>
        </defs>

        {/* Main Title */}
        <text
          x="250"
          y="42"
          textAnchor="middle"
          fill="white"
          fontSize="22"
          fontWeight="800"
          
        >
          IIoT Excellence
        </text>

        {/* Circle 1 */}
        <circle
          cx="250"
          cy="180"
          r="125"
          fill="url(#acquisitionGradient)"
          fillOpacity="0.78"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          className="transition-all duration-300 hover:opacity-90"
        />

        {/* Circle 2 */}
        <circle
          cx="180"
          cy="280"
          r="125"
          fill="url(#transportGradient)"
          fillOpacity="0.78"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          className="transition-all duration-300 hover:opacity-90"
        />

        {/* Circle 3 */}
        <circle
          cx="320"
          cy="280"
          r="125"
          fill="url(#processingGradient)"
          fillOpacity="0.78"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          className="transition-all duration-300 hover:opacity-90"
        />

        {/* Center glow */}
        <circle
          cx="250"
          cy="245"
          r="75"
          fill="url(#centerGlow)"
        />

        {/* Circle labels */}
        <text
          x="250"
          y="130"
          textAnchor="middle"
          fill="white"
          fontSize="17"
          fontWeight="800"
        >
          Data Acquisition
        </text>

        <text
          x="145"
          y="300"
          textAnchor="middle"
          fill="white"
          fontSize="15"
          fontWeight="800"
        >
          Data
          <tspan x="145" dy="22">
            Transportation
          </tspan>
        </text>

        <text
          x="355"
          y="295"
          textAnchor="middle"
          fill="white"
          fontSize="14"
          fontWeight="800"
        >
          Data Processing
          <tspan x="355" dy="22">
            & Applications
          </tspan>
        </text>

        {/* Center */}
        <circle
          cx="250"
          cy="245"
          r="8"
          fill="#f97316"
          className="drop-shadow-lg"
        />

        

        {/* Arrow */}
        <line
          x1="255"
          y1="240"
          x2="420"
          y2="90"
          stroke="#f97316"
          strokeWidth="3"
          markerEnd="url(#arrowHead)"
        />
      </svg>
    </div>
  );
}