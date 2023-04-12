import React, { useEffect } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button, InputBase } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useTypedDispatch, useTypedSelector } from "../../../store/store";
import { searchAction } from "../../../store/action/searchAction";
import { useRouter } from "next/router";

function SearchBar() {
  const dispatch = useTypedDispatch();
  const router = useRouter();

  const search = useTypedSelector((state) => state.search);

  const [category, setCategory] = React.useState(search.category);
  const [productName, setProductName] = React.useState("");

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
  };

  useEffect(() => {
    setCategory(search.category);
  }, [search.category]);

  const submitHandler = (e: any) => {
    e.preventDefault();
    handleClose(e);
 

    const parameter = {
      category:
        e.target.innerText.toLowerCase() === "all categories"
          ? ""
          : e.target.innerText.toLowerCase(),
      searchName: productName.toLowerCase(),
    };

    dispatch(searchAction(parameter));



    router.asPath !== "/product/search" && router.push("/product/search");
  };

  const handleKeypress = (e: any) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      submitHandler(e);
    }
  };

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: any) => {
    setAnchorEl(null);
    if (event.target.innerText) {
      setCategory(event.target.innerText);
    }
  };
  return (
    <form action="" onSubmit={submitHandler}>
      <div className=" flex items-center space-x-2  border-gray-400 shadow-md shadow-dark/10 px-2 py-1  rounded-full overflow-hidden hover:border-primary-main duration-300 ">
        <SearchOutlinedIcon className=" ml-1 text-gray-400" />
        <InputBase
          placeholder="Search shoes..."
          className="bg-transparent"
          value={productName}
          onChange={onChangeHandler}
          onKeyPress={handleKeypress}
        />

        <Button
          className="rounded-r-full capitalize whitespace-nowrap "
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          variant="contained"
        >
          {category}
        </Button>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={submitHandler}>All Categories</MenuItem>
          <MenuItem onClick={submitHandler}>Sneaker</MenuItem>
          <MenuItem onClick={submitHandler}>Running</MenuItem>
          <MenuItem onClick={submitHandler}>Basketball</MenuItem>
          <MenuItem onClick={submitHandler}>Casual</MenuItem>
          <MenuItem onClick={submitHandler}>Sport</MenuItem>
        </Menu>
      </div>
    </form>
  );
}

export default SearchBar;
