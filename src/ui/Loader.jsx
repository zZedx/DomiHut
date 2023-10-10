import { useEffect, useRef } from "react";
import { useNavigation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const loaderStyle = {
  position: "absolute",
  top: "3.4rem", //height of header
  backgroundColor: "rgb(120, 113, 108)",
};

const Loader = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state !== "idle";
  const ref = useRef(null);

  useEffect(() => {
    const loadingBarRef = ref.current;
    isLoading ? loadingBarRef.continuousStart() : loadingBarRef.complete();
    // isLoading ? setProgress(50) : setProgress(100);
  }, [isLoading]);

  //   return <div className={`${isLoading ? '' : "hidden"} absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm transition-all z-10`}>
  //   <div className="loader"></div>
  // </div>

  return (
    <LoadingBar
      ref={ref}
      shadow={false}
      style={loaderStyle}
      transitionTime={100}
      waitingTime={500}
      height={4}
    />
  );
};

export default Loader;
