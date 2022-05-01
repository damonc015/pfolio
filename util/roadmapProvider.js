import { createContext, useState, useRef } from "react";

const RoadContext = createContext();
export function RoadContextProvider(props) {
  const [firstTime, setFirstTime] = useState(true);
  const [activeIcon, setActiveIcon] = useState();
  const lastTimeout = useRef();

  const context = {
    firstTime, 
    setFirstTime,
    activeIcon,
    setActiveIcon,
    lastTimeout,
  };

  return (
    <RoadContext.Provider value={context}>
      {props.children}
    </RoadContext.Provider>
  );
}

export default RoadContext;
