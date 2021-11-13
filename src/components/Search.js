import React, { useState, useEffect } from "react";
import axios from "axios";

function Search(props) {
  //console.log(props.tags);
  const [tag, setTag] = useState("");
  let saveTag = tag;

  useEffect(() => {
    setTag(props.tags);
  }, [props.tags]);

  const handleChange = (e) => {
    setTag(e.target.value);
    console.log(tag);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tags = tag;
    console.log(tags);
    axios
      .post("http://localhost:8000/api/cal/", {
        tags,
      })
      .then(function (response) {
        props.onCreate(response.data, tag);
      });
    // .catch(function (error) {
    //   if (error.response.status === 500) {
    //     alert("검색한 태그와 모두 일치하는 게임은 존재하지 않습니다.");
    //   }
    // });
  };

  return (
    <div className="search" style={{ height: "5%" }}>
      <form
        onSubmit={handleSubmit}
        style={{ display: "block", margin: "4px 79px 0 10px" }}
      >
        <input
          type="text"
          style={{ width: "100%" }}
          placeholder="Search Tag"
          value={tag}
          onChange={handleChange}
          name="tag"
        />
        <button type="submit">검색</button>
      </form>
    </div>
  );
}

// class Search extends Component {
//   state = {
//     tag1: "",
//     // tag2: "",
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const tags = this.state.tag1;
//     console.log(tags);
//     axios
//       .post("http://localhost:8000/api/cal/", {
//         tags,
//       })
//       .then(function (response) {
//         // this.props.tags[0] = response.data[0];

//         console.log(response);
//       });
//   };

//   render() {
//     return (
//       <div className="search">
//         <form onSubmit={this.handleSubmit}>
//           <input
//             placeholder="Search Tag1"
//             value={this.state.tag1}
//             onChange={this.handleChange}
//             name="tag1"
//           />
//           <button type="submit">검색</button>
//         </form>
//       </div>
//     );
//   }
// }

export default Search;
