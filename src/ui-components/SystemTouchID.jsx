/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { View } from "@aws-amplify/ui-react";
export default function SystemTouchID(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="270px"
      height="161px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SystemTouchID")}
      {...rest}
    >
      <View
        width="270px"
        height="161px"
        {...getOverrideProps(overrides, "System / Touch ID")}
      ></View>
    </View>
  );
}
