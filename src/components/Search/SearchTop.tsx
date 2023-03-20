/* eslint-disable react/no-unescaped-entities */
import { Typography, Button } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function SearchTop() {
  const [sort, setSort] = React.useState("Relevance");

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white rounded-md shadow-sm">
      <div className="flex flex-col">
        <Typography className="text-lg font-medium">
          {/* FIXME: later */}
          Searching for "mobile Phone"
        </Typography>
        <Typography className="text-sm text-gray-500">
          "48" results found
        </Typography>
      </div>

      <div className="flex items-center space-x-2">
        <Typography className="text-sm ">Short By:</Typography>
        <FormControl>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sort}
            size="small"
            onChange={handleChange}
          >
            <MenuItem value="Relevance">Relevance</MenuItem>
            <MenuItem value="Low to High">Low to High</MenuItem>
            <MenuItem value="High to Low">High to Low</MenuItem>
            <MenuItem value="Date">Date</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default SearchTop;
