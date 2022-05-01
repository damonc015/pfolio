import { useEffect, useRef } from "react";
import { gsap } from "../../util/gsap";

const City = () => {
  const cityA = useRef();
  const cityB = useRef();
  const cityC = useRef();
  const cityTime = useRef();

  useEffect(() => {
    cityTime.current = gsap
      .timeline()
      .fromTo("#cityC", { height: 0 }, { duration: 2.5, height: "70vh" })
      .fromTo("#cityB", { height: 0 }, { duration: 2.5, height: "70vh" })
      .fromTo("#cityA", { height: 0 }, { duration: 2.5, height: "70vh" })
  }, []);

  return (
    <>
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 180 120"
        id="cityA"
        ref={cityA}
        preserveAspectRatio="none"
      >
        <path
          d="M160.465 60.5V71h-2.006v17l-5.015 27.5H172.5L170.996 88h-3.009V71h-1.003V60.5l-3.009-7.5-3.51 7.5zM34.096 107.757V115h-14.04v-11.299h.638V79.944h.957v-4.925h.957v-4.056h.958v-1.16h1.595v-1.158l.958-6.953.638-8.692.638 8.692.957 7.532h.639v.58h.957v1.159h.957v4.056h.639v4.925h.957v24.336h.957v3.477h.639zM1 97.5v18h12.537v-18h-2.508v-14H8.522V82H3.507v2.5H2.504v13H1zM65.187 102.5V115H43.123V95.5h1.003v-41h1.504V46h1.505v-7h1.504v-2h2.507v-2l1.505-12 1.002-15 1.003 15 1.505 13h1.003v1h1.504v2h1.505v7h1.002v8.5h1.505v42h1.504v6h1.003z"
          fill="#686D71"
          stroke="#686D71"
        />
        <path
          d="M138.401 115l2.005-89.5 3.009-2H148.43l2.507 2h1.505l3.51 89.5h-17.551z"
          fill="#686D71"
        />
        <path
          d="M146.424 1l-.501 22.5m0 0h2.507l2.507 2h1.505l3.51 89.5h-17.551l2.005-89.5 3.009-2h2.508z"
          stroke="#686D71"
        />
        <path
          d="M119.846 73v23h-1.504v19h18.053V96h-1.505V73h-1.504v-2l-6.519-3-6.018 3v2h-1.003zM91.263 69.5V115h11.534l-1.003-54-10.53 8.5zM82.237 55.5l4.012-1.5v60.5H72.208V60h2.507l1.504-1.5 4.012-1.5 1.003-20 1.003 18.5z"
          fill="#686D71"
          stroke="#686D71"
        />
      </svg>
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 180 120"
        id="cityB"
        ref={cityB}
        preserveAspectRatio="none"
      >
        <g clipPath="url(#prefix__clip0_7_69)" fill="#868A8D" stroke="#868A8D">
          <path d="M10.487 72.5v3.722H3.75V114.5h16v-42h-9.263zM25.75 53.5v61h6v-61h-6zM51.066 73.5v3.633h9.684V114.5h-23v-41h13.316zM69.645 80.5v3.013h2.105V114.5h-5v-34h2.895zM82.382 73.5v3.633H77.75V114.5h11v-41h-6.368zM98.224 85.5v2.57h2.526v26.43h-6v-29h3.474zM110.803 87.5v2.392h2.947V114.5h-7v-27h4.053zM133.75 107.257v7.243h-14v-11.299h.636V79.444h.955v-4.925h.954v-4.056h.955v-1.16h1.591v-1.158l.954-6.953.637-8.692.636 8.692.955 7.532h.636v.58h.955v1.159h.954v4.056h.637v4.925h.954v24.336h.955v3.477h.636zM139.75 63.5v51h4v-51h-4zM149.75 43.5h5.4v30.33h3.6v-3.447H161V57.977h6.75V114.5h-18v-71z" />
        </g>
        <defs>
          <clipPath id="prefix__clip0_7_69">
            <path fill="#fff" d="M0 0h171.5v114.5H0z" />
          </clipPath>
        </defs>
      </svg>
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 180 120"
        id="cityC"
        ref={cityC}
        preserveAspectRatio="none"
      >
        <path
          d="M21 56.5h-6v24.777h-4V78.46H8.5V68.325H1V114.5h20v-58zM25 41.5h7.5V72.685h5V69.14h3.125V56.383H50V114.5H25v-73zM55.25 55.521V87.82H54V114.5h15V87.82h-1.25V55.52H66.5v-2.808L61.083 48.5l-5 4.213v2.808h-.833zM77.053 46.5v6.025H80V114.5h-7v-68h4.053zM84 55v59.5h5.5V55H84zM93.5 63h6v22h4v-2.5h2.5v-9h7.5v41h-20V63zM122.553 63.5v4.519H117.5V114.5h12v-51h-6.947zM140.5 105.037v9.463h-7V99.738h.318V68.701h.477v-6.435h.478v-5.299h.477v-1.514h.795V53.94l.478-9.084.318-11.355.318 11.355.477 9.841h.319v.757h.477v1.514h.477v5.3h.318V68.7h.478v31.794h.477v4.542h.318zM152.605 47.5v5.937h5.895V114.5h-14v-67h8.105zM183.5 41.5h-6.3V72.685H173V69.14h-2.625V56.383H162.5V114.5h21v-73z"
          fill="#B1B3B5"
          stroke="#B1B3B5"
        />
      </svg>
    </>
  );
};

export default City;
