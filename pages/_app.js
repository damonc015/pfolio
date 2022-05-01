import "../styles/globals.css";
import { RoadContextProvider } from "../util/roadmapProvider";

function MyApp({ Component, pageProps }) {
  return (
    <RoadContextProvider>
      <Component {...pageProps} />
    </RoadContextProvider>
  );
}

export default MyApp;
