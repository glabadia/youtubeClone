import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

const SearchBar = ({ onEnter }) => {
  const [localkeyword, setLocalKeyword] = useState("");

  const handleChange = ({ target: { value } }) => {
    // console.log(value);
    setLocalKeyword(value);
  };

  const handleKeyPress = ({ key, target: { value } }) => {
    if (key === "Enter") {
      onEnter(value);
    }
  };

  return (
    <Paper elevation={1} style={{ padding: ".7em" }}>
      <TextField
        fullWidth
        placeholder="Search..."
        value={localkeyword}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </Paper>
  );
};

export default SearchBar;
