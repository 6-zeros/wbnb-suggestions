import React from "react";
import RoomEntry from "./RoomEntry.jsx";

const list = props => {
  return (
    <div className="hide">
      <div className="scrolls">
        {props.suggestions.map(suggestionEntry => {
          return (
            <RoomEntry className="roomEntry" key={suggestionEntry.id} suggestionEntry={suggestionEntry} />
          );
        })}
      </div>
    </div>
  );
};

export default list;
