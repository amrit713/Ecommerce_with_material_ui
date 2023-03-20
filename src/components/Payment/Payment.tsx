import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Radio from "@mui/material/Radio";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, TextField } from "@mui/material";

function Payment() {
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
          <Button variant="outlined" className="capitalize">
            Back To Checkout
          </Button>
          <Button variant="contained" className="capitalize">
            {" "}
            Order
          </Button>
        </div>
      </div>

      <div  className=" md:w-[25%] max-h-[27vh] border-solid border-2 shadow-sm border-gray-100 rounded-md bg-white p-4 space-y-4 mb-8">
        <div className="flex items-center justify-between">
          <Typography variant="subtitle1" className="capitalize text-dark">
            subtotal:
          </Typography>
          <Typography className="capitalize font-semibold">
            {" "}
            rs.40,000.00
          </Typography>
        </div>

        <div className="flex items-center justify-between">
          <Typography variant="subtitle1" className="capitalize text-dark">
            shipping:
          </Typography>
          <Typography className="capitalize font-semibold">
            {" "}
            rs.200.00
          </Typography>
        </div>

        <div className="flex items-center justify-between">
          <Typography variant="subtitle1" className="capitalize text-dark">
            VAT:
          </Typography>
          <Typography className="capitalize font-semibold">
            {" "}
            rs.2000.00
          </Typography>
        </div>

        <div className="flex items-center justify-between">
          <Typography variant="subtitle1" className="capitalize text-dark">
            discount:
          </Typography>
          <Typography className="capitalize font-semibold">
            {" "}
            00.00
          </Typography>
        </div>
        <div className="border-solid border rounded-sm  border-gray-100 " />

        <Typography variant='h6' className="text-right font-semibold">Rs.42,200.00</Typography>
        </div>

    </div>
  );
}

export default Payment;
