/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex } from "@aws-amplify/ui-react";
export default function Cardprompt(props) {
  const { cardprompt, overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="328px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="16px"
      padding="16px 24px 16px 24px"
      backgroundColor="rgba(212,212,255,1)"
      children={cardprompt}
      {...getOverrideProps(overrides, "Cardprompt")}
      {...rest}
    ></Flex>
  );
}
