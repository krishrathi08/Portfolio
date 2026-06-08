import { useEffect, useRef, useState } from "react";
import K1 from "./muneebkhanSVGs/K1";
import K2 from "./muneebkhanSVGs/K2";
import K3 from "./muneebkhanSVGs/K3";

const FONT_FAMILY = "'Permanent Marker', cursive";

const SvgText = ({ char, x, y, rotate, fontSize = "75px", className, ...rest }) => (
  <div className={`mk-muneeb-khan-parallax ${className}`} {...rest}>
    <svg version="1.2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
      <text
        x={x}
        y={y}
        fill="inherit"
        fontFamily={FONT_FAMILY}
        fontSize={fontSize}
        fontWeight="bold"
        textAnchor="middle"
        transform={rotate ? `rotate(${rotate}, ${x}, ${y})` : undefined}
      >
        {char}
      </text>
    </svg>
  </div>
);

const SvgWrapper = ({ SVG, className, ...rest }) => (
  <div
    {...rest}
    className={`mk-muneeb-khan-parallax ${className}`}
  >
    <SVG />
  </div>
);

export default function MuneebKhan({ }) {
  const ref = useRef();
  const [mount, handleMount] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isInViewport = () => {
    const rect = ref?.current?.getBoundingClientRect();
    return (rect?.top < window.innerHeight / 2);
  };

  const handleScroll = () => {
    handleMount(isInViewport());
  };

  return (
    <div ref={ref} className={`mk-muneeb-khan ${mount ? 'mk-muneeb-khan-visible' : ''}`}>
      {/* First Name: KRISH (K is giant on the left, RISH are at the top) */}
      <SvgText
        className="mk_svg_M"
        char="K"
        x="370"
        y="410"
        fontSize="280px"
        rotate="-10"
      />
      <SvgText
        className="mk_svg_U"
        char="R"
        x="490"
        y="160"
        fontSize="75px"
        rotate="5"
      />
      <SvgText
        className="mk_svg_N"
        char="I"
        x="540"
        y="155"
        fontSize="75px"
        rotate="-5"
      />
      <SvgText
        className="mk_svg_E1"
        char="S"
        x="590"
        y="160"
        fontSize="75px"
        rotate="10"
      />
      <SvgText
        className="mk_svg_E2"
        char="H"
        x="640"
        y="165"
        fontSize="75px"
        rotate="-5"
      />

      {/* Last Name: RATHI (at the bottom right/center) */}
      <SvgText
        className="mk_svg_B"
        char="R"
        x="490"
        y="580"
        fontSize="75px"
        rotate="-5"
      />

      {/* Slashes (K1, K2, K3) */}
      <SvgWrapper
        className="mk_svg_K1"
        SVG={K1}
      />
      <SvgWrapper
        className="mk_svg_K2"
        SVG={K2}
      />
      <SvgWrapper
        className="mk_svg_K3"
        SVG={K3}
      />

      <SvgText
        className="mk_svg_H"
        char="A"
        x="530"
        y="590"
        fontSize="75px"
        rotate="8"
      />
      <SvgText
        className="mk_svg_A"
        char="T"
        x="570"
        y="585"
        fontSize="75px"
        rotate="-10"
      />
      <SvgText
        className="mk_svg_N2"
        char="H"
        x="610"
        y="590"
        fontSize="75px"
        rotate="5"
      />
      <SvgText
        className="mk_svg_I2"
        char="I"
        x="650"
        y="585"
        fontSize="75px"
        rotate="-5"
      />
    </div>
  );
}
