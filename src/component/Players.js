import React from "react";
import Topic from "./Topic";
import currentSlide from "./carousel/currentSlide";

const Players = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className="title title-position2">PLAYERS</div>
      <div className="slideshow-container">
        <div className="container1-2 mySlides-2 displayBlock">
          <div className="group-left top-topic4">
            <Topic
              topicNumber="01"
              topicName="CONNECTION"
              underlineColor="purple"
            >
              Connect with talented athlete directly, you can watch their skills
              through video showreels directly from Surface 1.
            </Topic>
          </div>
        </div>

        <div className="container2-2 mySlides-2">
          <div className="group-left top-topic5">
            <Topic
              topicNumber="02"
              topicName="COLLABORATION"
              underlineColor="purple"
            >
              Work with recruiter to increase your chances of finding talented
              athlete.
            </Topic>
          </div>
        </div>

        <div className="container3-2 mySlides-2">
          <div className="group-left top-topic6">
            <Topic topicNumber="03" topicName="GROWTH" underlineColor="white">
              Save your time, recruit proper athlets for your team.
            </Topic>
          </div>
        </div>
      </div>

      <div className="carousel-nav">
        <button
          className="carousel-indicator-2 active"
          onClick={() => {
            currentSlide(1, "mySlides-2", "carousel-indicator-2");
          }}
        ></button>
        <button
          className="carousel-indicator-2"
          onClick={() => {
            currentSlide(2, "mySlides-2", "carousel-indicator-2");
          }}
        ></button>
        <button
          className="carousel-indicator-2"
          onClick={() => {
            currentSlide(3, "mySlides-2", "carousel-indicator-2");
          }}
        ></button>
      </div>
    </div>
  );
};

export default Players;
