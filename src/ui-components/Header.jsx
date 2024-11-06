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
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Header(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Barra: {},
        "LOGO-B": {},
        "Pagos inmediatos": {},
        "Frame 31348": {},
        "Frame 31349": {},
        "arrow-left": {},
        "Frame 31350": {},
        Header: {},
      },
      variantValues: { property1: "Default" },
    },
    {
      overrides: {
        Barra: {},
        "LOGO-B": {},
        "Pagos inmediatos": { textAlign: "center", width: "252px" },
        "Frame 31348": { width: "189px" },
        "Frame 31349": {
          height: "115px",
          alignItems: "center",
          padding: "32px 111px 68px 111px",
        },
        "arrow-left": {},
        "Frame 31350": { height: "115px" },
        Header: {},
      },
      variantValues: { property1: "Variant2" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="column"
      width="361px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "Header")}
      {...rest}
    >
      <Flex
        width="361px"
        height="40px"
        {...getOverrideProps(overrides, "Barra")}
      ></Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="202px"
        justifyContent="space-between"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 20px 24px 20px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 31350")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="361px"
          height="202px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          borderRadius="0px 0px 16px 16px"
          padding="68px 111px 68px 111px"
          backgroundColor="rgba(50,0,94,1)"
          display="flex"
          {...getOverrideProps(overrides, "Frame 31349")}
        >
          <Flex
            gap="16px"
            direction="column"
            width="138px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 31348")}
          >
            <View
              width="76px"
              height="22px"
              {...getOverrideProps(overrides, "LOGO-B")}
            ></View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="600"
              color="rgba(255,255,255,1)"
              lineHeight="16px"
              textAlign="left"
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
              children="Pagos inmediatos"
              {...getOverrideProps(overrides, "Pagos inmediatos")}
            ></Text>
          </Flex>
        </Flex>
        <View
          width="30px"
          height="30px"
          {...getOverrideProps(overrides, "arrow-left")}
        ></View>
      </Flex>
    </Flex>
  );
}
