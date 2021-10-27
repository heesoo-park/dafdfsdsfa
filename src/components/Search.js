import React, { useState, useRef } from "react";
import axios from "axios";

function Search(props) {
  const [tag, setTag] = useState("");
  const tagref = useRef([]);

  const handleChange = (e) => {
    setTag(e.target.value);
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
        //console.log(response.data);
        //let length = Object.keys(response).length;
        // for (let i = 0; i < length - 2; i++) {
        //   props.details[i] = response.data[i];
        // }
        props.onCreate(response.data);
      });
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
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
