import React from 'react';
import RoomEntry from './RoomEntry.jsx'


const list = (props) => {
    return (
  <div className="scrolls">
      {props.house.map((entry)=>{
          return <RoomEntry key={entry._id} entry={entry}/>
      })}
  </div>

    )
};

export default list;