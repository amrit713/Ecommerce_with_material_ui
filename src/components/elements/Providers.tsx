import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

interface IProps {
  children: ReactNode;
}

function Providers(props: IProps) {
  return <Provider store={store}>{props.children}</Provider>;
}

export default Providers;
