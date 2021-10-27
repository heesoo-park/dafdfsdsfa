import React, { useState, useEffect } from "react";

function TagScore(props) {
  const tags = props.details;

  useEffect(() => {
    console.log(tags);
    return () => {
      console.log(1);
    };
  }, [tags]);

  const size = tags.size;

  //console.log(props.details);
  return (
    <div className="contents">
      <div id="con_tag">
        <h3>Connected Tag</h3>
        {tags && tags.map((e, index) => <li key={index}>{e[0]}</li>)}
      </div>
      <div>
        <h2> </h2>
      </div>
      <div id="tag_score">
        <h3>Tag Score</h3>
        {tags && tags.map((e, index) => <li key={index}>{e[1]}</li>)}
      </div>
    </div>
  );
}

// export class TagScore extends Component {
//   render() {

//   }
// }

export default TagScore;
