/* eslint-disable react/no-unescaped-entities */
import { Typography, Button } from "@mui/material";
import React, { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { IProduct } from "../../interface/IProduct";
import { useTypedDispatch, useTypedSelector } from "../../../store/store";
import { searchAction } from "../../../store/action/searchAction";
import { StarRateTwoTone } from "@mui/icons-material";

function SearchTop({
  products,
  category,
}: {
  products: IProduct[];
  category: string;
}) {
  const [sort, setSort] = React.useState("Relevance");
  const dispatch = useTypedDispatch();
  const search = useTypedSelector(state=> state.search)

  const sortHandler = (name: string) => {
    dispatch(searchAction({searchName:search.searchName, sort: name , category:search.category}));
  };

  useEffect(()=>{
    setSort("Relevance")
  }, [search.category])

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white rounded-md shadow-sm">
      <div className="flex flex-col">
        <Typography className="text-lg font-medium capitalize">
          {/* FIXME: later */}
          Searching for "{category}"
        </Typography>
        <Typography className="text-sm text-gray-500 capitalize">
          "{products ? products.length : 0}" results found
        </Typography>
      </div>

      <div className="flex items-center space-x-2">
        <Typography className="text-sm ">Sort By:</Typography>
        <FormControl>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sort}
            size="small"
            onChange={handleChange}
          >
            <MenuItem value="Relevance" onClick={() => sortHandler("createdAt")}>
              Relevance
            </MenuItem>
            <MenuItem value="Low to High" onClick={() => sortHandler("price")}>
              Low to High
            </MenuItem>
            <MenuItem value="High to Low" onClick={() => sortHandler("-price")}>
              High to Low
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default SearchTop;
