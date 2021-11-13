import React, { useState, useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

function TagScore(props) {
  const tags = props.details;
  let arr = [tags];
  let names = [];
  let score = [];
  const canvasDom = useRef(null);
  useEffect(() => {
    console.log(tags.length);
    for (let i = 0; i < tags.length; i++) {
      names.push(arr[0][i][0]);
      score.push(arr[0][i][1]);
      console.log(names);
      console.log(score);
    }
    const ctx = canvasDom.current.getContext("2d");
    console.log(ctx);
    Chart.register(...registerables);
    let chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: names,
        datasets: [
          {
            label: "closeness",
            data: score,
          },
        ],
      },
    });
    return () => {
      chart.destroy();
    };
  }, [tags]);

  // const subtractName = () => {
  //   let names = [];
  //   console.log(props.details.index);
  //   for (let i = 0; i < props.count; i++) {
  //     names.push(tags[i][0]);
  //   }
  //   console.log(names);
  //   return names;
  // };

  return (
    <div className="contents" style={{ height: "70%" }}>
      <div id="con_tag">
        <h3>Related Tag</h3>
        {tags &&
          tags.map((e, index) => (
            <li key={index}>
              {e[0]}
              <button
                onClick={() => {
                  props.onAdd(tags[index][0]);
                }}
              >
                add
              </button>
            </li>
          ))}
      </div>
      <div>
        <h2> </h2>
      </div>
      <div id="tag_score">
        <h3>Tag Score</h3>
        {/* {tags && tags.map((e, index) => <li key={index}>{e[1]}</li>)} */}
        <canvas ref={canvasDom}></canvas>
      </div>
    </div>
  );
}

// export class TagScore extends Component {
//   render() {

//   }
// }

export default TagScore;
