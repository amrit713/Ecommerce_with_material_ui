/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Order from "../../src/components/profile/Order/Orders";

import withAuth from "../../src/protectedRoute/withAuth";
import axios from "axios";
import { useTypedDispatch } from "../../store/store";
import { getOrderAction } from "../../store/action/orderAction";

function order() {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(getOrderAction());
  }, [dispatch]);

  return (
    <div>
      <Order  />
    </div>
  );
}

export default withAuth(order);
