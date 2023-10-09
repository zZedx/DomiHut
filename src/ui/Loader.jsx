import { useEffect, useRef } from "react";
import { useNavigation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const loaderStyle = {
  position: "absolute",
  top: "5rem",
};

const Loader = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const ref = useRef(null);

  useEffect(() => {
    const loadingBarRef = ref.current;
    isLoading ? loadingBarRef.continuousStart() : loadingBarRef.complete();
    // isLoading ? setProgress(50) : setProgress(100);
  }, [isLoading]);

  return (
    <LoadingBar
      color="#f11946"
      ref={ref}
      shadow={false}
      style={loaderStyle}
      transitionTime={100}
      waitingTime ={500}
    />
  );
};

export default Loader;
