import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Topic from "./Topic";

const Athlets = () => {
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
      <div className="title title-position1">ATHLETS</div>

      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide container1">
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

          <div className="keen-slider__slide container2">
            <div className="group-right top-topic2">
              <Topic
                topicNumber="02"
                topicName="COLLABORATION"
                underlineColor="purple"
              >
                Work with other student athletes to increase visability. When
                you share and like other players videos it will increase your
                visability as a player. This is the team work aspect to Surface
                1.
              </Topic>
            </div>
          </div>

          <div className="keen-slider__slide container3-1">
            <div className="group-right top-topic3">
              <Topic topicNumber="03" topicName="GROWTH" underlineColor="white">
                Resources and tools for you to get better as a student Athelte.
                Access to training classes, tutor sessions, etc.
              </Topic>
            </div>
          </div>
        </div>
      </div>

      {loaded && instanceRef.current && (
        <div className="dots">
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

export default Athlets;
