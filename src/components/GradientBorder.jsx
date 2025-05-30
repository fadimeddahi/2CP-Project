import { useEffect, useRef, useState } from "react";

const GradientBorder = ({ borderWidth = 2, borderRadius = 25, className ,direction="right"}) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const svgRef = useRef(null);

  useEffect(() => {
    // const updateDimensions = () => {
      if (svgRef.current) {
        const { width, height } = svgRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    // };

    // updateDimensions();
    // window.addEventListener("resize", updateDimensions);
    // return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const halfBorder = borderWidth / 2;
  const { width, height } = dimensions;

  const pathD = `
    M ${borderRadius + halfBorder},${halfBorder}
    H ${width - borderRadius - halfBorder}
    A ${borderRadius},${borderRadius} 0 0 1 ${width - halfBorder},${
    borderRadius + halfBorder
  }
    V ${height - borderRadius - halfBorder}
    A ${borderRadius},${borderRadius} 0 0 1 ${
    width - borderRadius - halfBorder
  },${height - halfBorder}
    H ${borderRadius + halfBorder}
    A ${borderRadius},${borderRadius} 0 0 1 ${halfBorder},${
    height - borderRadius - halfBorder
  }
    V ${borderRadius + halfBorder}
    A ${borderRadius},${borderRadius} 0 0 1 ${
    borderRadius + halfBorder
  },${halfBorder}
    Z
  `;

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute -z-10 ${className}`}
      style={{
        width: `calc(100% + ${borderWidth}px)`,
        height: `calc(100% + ${borderWidth}px)`,
      }}
    >
      <defs>
        <linearGradient
          id="borderGradientToRight"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#42FACF" />
          <stop offset="100%" stopColor="#42C0FA" />
        </linearGradient>
        <linearGradient
          id="borderGradientToBottom"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#42C0FA" />
          <stop offset="100%" stopColor="#42FACF" />
        </linearGradient>
      </defs>
      <path
        d={pathD}
        fill="none"
        stroke={
          direction === "right"
            ? "url(#borderGradientToRight)"
            : direction === "bottom"?"url(#borderGradientToBottom)":""
        }
        strokeWidth={borderWidth}
      />
    </svg>
  );
};

export default GradientBorder;

