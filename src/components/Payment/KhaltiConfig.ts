import axios from "axios";
import myKey from "./khaltiKey";
import toast from "react-hot-toast";
import { useTypedDispatch } from "../../../store/store";

export let payment: any;

const verify = (payload: any) => {
  let data = {
    token: payload.token,
    amount: payload.amount,
  };

  let config = {
    headers: { Authorization: myKey.secretKey },
  };

  axios
    .post("https://khalti.com/api/v2/payment/verify/", data, config)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

var config = {
  // replace the publicKey with yours
  publicKey: myKey.publicKey,
  productIdentity: "1234567890",
  productName: "Dragon",
  productUrl: "http://localhost:3000/",
  paymentPreference: ["KHALTI"],
  eventHandler: {
    onSuccess(payload: any) {
      // hit merchant api for initiating verfication
      verify(payload);
      payment = payload;
      console.log(payload);
    },
    onError(error: any) {
      console.log(error);
    },
    onClose() {
      toast.success("payment successfull");
    },
  },
};

export default config;
