import React from "react";
import Topic from "./Topic";
import currentSlide from "./carousel/currentSlide";

const Athlets = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className="title title-position1">ATHLETS</div>
      <div className="slideshow-container">
        <div className="container1 mySlides displayBlock">
          <div className="group-right top-topic1">
            <Topic
              topicNumber="01"
              topicName="CONNECTION"
              underlineColor="purple"
            >
              Connect with coaches directly, you can ping coaches to view
              profile.
            </Topic>
          </div>
        </div>

        <div className="container2 mySlides">
          <div className="group-right top-topic2">
            <Topic
              topicNumber="02"
              topicName="COLLABORATION"
              underlineColor="purple"
            >
              Work with other student athletes to increase visability. When you
              share and like other players videos it will increase your
              visability as a player. This is the team work aspect to Surface 1.
            </Topic>
          </div>
        </div>

        <div className="container3-1 mySlides">
          <div className="group-right top-topic3">
            <Topic topicNumber="03" topicName="GROWTH" underlineColor="white">
              Resources and tools for you to get better as a student Athelte.
              Access to training classes, tutor sessions, etc.
            </Topic>
          </div>
        </div>
      </div>

      <div className="carousel-nav">
        <button
          className="carousel-indicator active"
          onClick={() => {
            currentSlide(1, "mySlides", "carousel-indicator");
          }}
        ></button>
        <button
          className="carousel-indicator"
          onClick={() => {
            currentSlide(2, "mySlides", "carousel-indicator");
          }}
        ></button>
        <button
          className="carousel-indicator"
          onClick={() => {
            currentSlide(3, "mySlides", "carousel-indicator");
          }}
        ></button>
      </div>
    </div>
  );
};

export default Athlets;
