import { useState, useEffect } from "react";
import { useGlobalContext } from "../context/AppContext";

const Cursor = () => {
  const { cursor } = useGlobalContext();
  const [position, setPosition] = useState({
    clientX: 0,
    clientY: 0,
  });

  const updatePosition = (event) => {
    const { clientX, clientY } = event;

    setPosition({ clientX, clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", updatePosition, false);
    document.addEventListener("mouseenter", updatePosition, false);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", updatePosition);
    };
  }, []);

  return (
    <div className="cursor">
      <svg
        viewBox="0 0 50 50"
        style={{
          position: "absolute",
          left: position.clientX,
          top: position.clientY,
          transform: `translate(-50%, -50%)`,
          stroke: "#fc480e",
          strokeWidth: 1.5,
          // fill: cursor.active ? "#dacfc0" : "transparent",
          transition: "transform 200ms ease-in-out",
          pointerEvents: "none",
        }}
      >
        <circle cx="25" cy="25" r="8" />
      </svg>
      {/*{cursor.active ? (*/}
      {/*  <span*/}
      {/*    className="cursor_text"*/}
      {/*    style={{*/}
      {/*      position: "absolute",*/}
      {/*      left: position.clientX,*/}
      {/*      top: position.clientY,*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    Voir plus*/}
      {/*  </span>*/}
      {/*) : (*/}
      {/*  <svg*/}
      {/*    viewBox="0 0 50 50"*/}
      {/*    style={{*/}
      {/*      position: "absolute",*/}
      {/*      left: position.clientX,*/}
      {/*      top: position.clientY,*/}
      {/*      transform: `translate(-50%, -50%) scale(${cursor.active ? 3 : 1})`,*/}
      {/*      stroke: cursor.active ? "" : "#fc480e",*/}
      {/*      strokeWidth: 1.5,*/}
      {/*      fill: cursor.active ? "white" : "transparent",*/}
      {/*      transition: "transform 200ms ease-in-out",*/}
      {/*      pointerEvents: "none",*/}
      {/*    }}>*/}
      {/*    <circle cx="25" cy="25" r="1" />*/}
      {/*  </svg>*/}
      {/*)}*/}
    </div>
  );
};

export default Cursor;
