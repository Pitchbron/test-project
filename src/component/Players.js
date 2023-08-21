import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Topic from "./Topic";

const Players = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div style={{ position: "relative" }}>
      <div className="title title-position2">PLAYERS</div>

      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide container1-2">
            <div className="group-left top-topic4">
              <Topic
                topicNumber="01"
                topicName="CONNECTION"
                underlineColor="purple"
              >
                Connect with talented athlete directly, you can watch their
                skills through video showreels directly from Surface 1.
              </Topic>
            </div>
          </div>

          <div className="keen-slider__slide container2-2">
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

          <div className="keen-slider__slide container3-2">
            <div className="group-left top-topic6">
              <Topic topicNumber="03" topicName="GROWTH" underlineColor="white">
                Save your time, recruit proper athlets for your team.
              </Topic>
            </div>
          </div>
        </div>
      </div>

      {loaded && instanceRef.current && (
        <div
          className="dots"
          style={{ position: "absolute", zIndex: "10", left: "50%" }}
        >
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Players;
