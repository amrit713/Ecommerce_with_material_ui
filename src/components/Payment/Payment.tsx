import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Radio from "@mui/material/Radio";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, TextField } from "@mui/material";
import { useTypedSelector } from "../../../store/store";
import { totalPriceSelector } from "../../../store/slice/cartSlice";
import TotalPrice from "../checkout/TotalPrice";
import Link from "next/link";

function Payment() {
  const totalPrice = useTypedSelector(totalPriceSelector);
  return (
    <div className="  flex flex-col-reverse md:flex-row md:space-x-8 md:space-y-0">
      <div className="md:w-[75%] ">
        <div className=" space-y-6 p-4 bg-white rounded-sm box_shadow">
          <Accordion
          defaultExpanded
          
          
            TransitionProps={{ unmountOnExit: true }}
            className="bg-transparent border-solid border border-gray-200  shadow-none"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Pay Credit Card</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 mt-6">
                <TextField
                  label="Card Number"
                  InputProps={{ sx: { height: 40 } }}
                  required
                />

                <TextField
                  label="Expire Date"
                  InputProps={{ sx: { height: 40 } }}
                  required
                />

                <TextField
                  label="Name on Card"
                  InputProps={{ sx: { height: 40 } }}
                  required
                />

                <TextField
                  label="CVC"
                  InputProps={{ sx: { height: 40 } }}
                  required
                />
              </div>
              <Button
                variant="contained"
                type="submit"
                className="capitalize mt-4"
              >
                {" "}
                Submit
              </Button>
            </AccordionDetails>
          </Accordion>

          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            className="bg-transparent border-solid border border-gray-200  shadow-none"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Cash On Delivery</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex items-center space-x-2">
                <Radio />
                <Typography variant="subtitle1"> Cash On Delivery</Typography>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-6 ">
          <Link href="/checkout">
          <Button variant="outlined" className="capitalize">
            Back To Checkout
          </Button>
          </Link>
         
         
          <Button variant="contained" className="capitalize">
            {" "}
            Order
          </Button>
        </div>
      </div>

      <div  className=" md:w-[25%] max-h-[27vh] border-solid border-2 shadow-sm border-gray-100 rounded-md bg-white p-4  mb-8">
       <TotalPrice/>
        </div>

    </div>
  );
}

export default Payment;
