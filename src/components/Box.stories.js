import React from "react";
import Box from "./Box";

export default {
  title: 'Box Component'
}

export const defaultView = () => <Box text="Hello World"/>;

export const backgroundAqua = () => <Box text="Hello World" bgColor="aqua" />;
