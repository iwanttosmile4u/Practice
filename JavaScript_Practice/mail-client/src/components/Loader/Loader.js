import React, { useEffect } from "react";
import "./Loader.css";

const Loader = () => {
  // conponentDidMount() {
  //     console.log("Loader - componentDidMount")
  // }

  // componentWillUnmount() {
  //     console.log("Loader - componentWillUnmount")
  // }

  useEffect(() => {
    console.log("Mounted loader");

    return () => {
      console.log("Unmounting loader");
    };
  }, []);

  return <div className="loader">Loading...</div>;
};

export default Loader;
