import React, { useEffect, useState } from "react";

const Main = () => {
  const [imgUrl, setImgUrl] = useState("");
  const callImage = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => res.json())
      .then((data) => setImgUrl(data[0].url));
  };

  useEffect(() => {
    callImage();
  }, []);
  return (
    <>
      <div className="container">
        <div className="box">
          <h2>Enjoy the kittie</h2>
          <img src={imgUrl} alt="" />
          <button onClick={() => callImage()}>Click me</button>
        </div>
      </div>
    </>
  );
};

export default Main;
