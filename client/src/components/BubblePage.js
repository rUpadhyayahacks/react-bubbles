import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [update, setUpdate] = useState(false);
  console.log("some state", colorList);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property



  const handleColorChange = () => {
    setUpdate(!update);
  };

  useEffect(() => {
    axiosWithAuth()
      .get("/colors")
      .then(res => {
        // console.log(res)
        setColorList(res.data);
      })
      .catch(err => console.log("error", err));
  }, [update]);

  return (
    <>
      <ColorList handleColorChange={handleColorChange} colors={colorList} />

      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;