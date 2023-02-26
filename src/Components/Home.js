import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-3">
          <div id="main_hero">
            <div className="col-7 px-5 mx-4 main_hero">
              <div className="fs-3 px-3 text-2">Hello,My Name Is</div>
              <div className="text-1">Priyanka Davara</div>
              <div className="fs-4 px-3 text-2">
                I am &nbsp;
                <span
                  className="fs-2 fw-bold text-3"
                  style={{ color: "orange" }}
                >
                  <Typewriter
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={70}
                    delaySpeed={1000}
                    words={[
                      "web Developer",
                      " app Developer ",
                      "Fullstack Developer",
                    ]}
                  />
                </span>
              </div>
            </div>
            {/* <div className="col-4" id="image_hero">
              <img src={Ateev1} alt="Ateev" className="image_hero" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
