import React, { useEffect, useState } from "react";

function ChangeColors(params) {
  const [colors] = useState(["black", "green", "blue"]);
  const [color, setColor] = useState(colors[0]);

  const btnClick = () => {
    setColor("red");
  };

  useEffect(() => {
    console.log(color);
  }, [color]);

  return (
    <div>
      <p>This will be the exercise of change colors. randomly</p>
      <div className="mt-5">
        <span className="cuadrado" style={{ backgroundColor: color }}>
          {" "}
          Aqui cambian los colores
        </span>
      </div>
      <button className="mt-5 bg-light" onClick={btnClick}>
        Press for change
      </button>
    </div>
  );
}

export default ChangeColors;
