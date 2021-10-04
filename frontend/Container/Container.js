import React from 'react';

const SearchContainer = () => {
  return <div>
           <input
             placeholder="input serach"
             onSearch={(value) => console.log(value)}
             style={{ width : 200 }}
            />
          </div>;
 };
 export default SearchContainer