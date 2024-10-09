/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Seccion(props) {
  const { label, frame31304, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "file-text": {},
        "Frame 31304": {},
        "Extractos\u2028bancarios": {},
        Seccion: {},
      },
      variantValues: { property1: "Default" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="column"
      width="81px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "Seccion")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="50px"
        padding="10px 10px 10px 10px"
        backgroundColor="rgba(241,232,255,1)"
        display="flex"
        children={frame31304}
        {...getOverrideProps(overrides, "Frame 31304")}
      ></Flex>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(44,41,42,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={label}
        {...getOverrideProps(overrides, "Extractos\u2028bancarios")}
      ></Text>
    </Flex>
  );
}
