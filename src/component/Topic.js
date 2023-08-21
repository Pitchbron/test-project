import React from "react";

const Topic = ({ topicName, topicNumber, children, underlineColor }) => {
  return (
    <div>
      <div className="topic-container">
        <div style={{ paddingRight: "10px" }}>
          <div className="number-topic">{topicNumber}</div>
          <div
            className="underline"
            style={{
              backgroundColor: `${
                underlineColor === "purple" ? "#603ebe" : "#ffffff"
              }`,
            }}
          />
        </div>
        <div className="topic">{topicName}</div>
      </div>

      <div
        className="detail"
        style={{
          color: `${underlineColor === "purple" ? "#000000" : "#ffffff"}`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Topic;
