import { useRef } from "react";
import classes from "./firesparks.module.scss";

const Firesparks = () => {
  const fireColors = [
    "#fac915",
    "#f68b0d",
    "#ee6b0b",
    "#f7510a",
    "#d74009",
    "#b43509",
    "#b81806",
    "#a02207",
    "#7e1506",
  ];
  let rand = Math.floor(Math.random() * fireColors.length);
  return (
    <div>
      {/* {fireColors.map((item) => {
        return (
          <div
            className={classes.firesparkContainer}
            style={{ backgroundColor: item }}
          ></div>
        );
      })} */}
    </div>
  );
};

export default Firesparks;
