/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { View } from "@aws-amplify/ui-react";
export default function Flag(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="42px"
      height="42px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Flag")}
      {...rest}
    >
      <View
        width="42px"
        height="42px"
        {...getOverrideProps(overrides, "flag")}
      ></View>
    </View>
  );
}
