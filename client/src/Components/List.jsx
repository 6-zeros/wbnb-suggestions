import React from "react";
import RoomEntry from "./RoomEntry.jsx";

const list = props => {
  return (
    <div class="hide">
      <div class="scrolls">
        <h2 class="homes">More homes you may like</h2>
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
