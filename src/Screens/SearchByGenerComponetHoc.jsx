import React from "react";

const SearchByGenerComponetHoc = (SomeComponent) => (props) => {
  console.log({ ...props });
  return (
    <div>
      <SomeComponent {...props} />
    </div>
  );
};

export default SearchByGenerComponetHoc;
