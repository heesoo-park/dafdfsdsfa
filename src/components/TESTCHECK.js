import React, { useState } from "react";
import axios from "axios";

function TESTCHECK(props) {
  const [text, setText] = useState([]);
  console.log(props.details);
  return (
    <div>
      <button
        onClick={() => {
          axios
            .get("http://127.0.0.1:8000/api/")
            .then((response) => {
              setText([...response.data]);
              console.log(response.data);
            })
            .catch(function (error) {
              console.log(error);
            });
        }}
      >
        GET
      </button>

      {text.map((e, index) => (
        <div>
          {" "}
          <div className="list">
            <span key={index}>
              {e.name}, {e.all_reviews}, {e.popular_tags}, {e.URL}
            </span>
          </div>
        </div>
      ))}
      {/* <ul>
        <li>
          <p>이름 : {text[0]}</p>
          <p>리뷰 : {text[0].all_reviews}</p>
          <p>태그 : {text[0].popular_tags}</p>
          <p>주소 : {text[0].URL}</p>
        </li>
      </ul> */}
    </div>
  );
}

export default TESTCHECK;
