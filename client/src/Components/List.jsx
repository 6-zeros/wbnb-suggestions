import React from "react";
import RoomEntry from "./RoomEntry.jsx";

const list = props => {
  return (
    <div className="hide">
      <div className="scrolls">
        {props.house.map(entry => {
          return (
            <RoomEntry className="roomEntry" key={entry._id} entry={entry} />
          );
        })}
      </div>
    </div>
  );
};

export default list;
