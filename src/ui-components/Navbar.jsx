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
import Home from "./Home";
import Search from "./Search";
import { grid as GridCustom } from "./grid";
import Unlock from "./Unlock";
import Settings from "./Settings";
import { Flex } from "@aws-amplify/ui-react";
export default function Navbar(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        home: {},
        search: {},
        grid: {},
        unlock: {},
        settings: {},
        Navbar: {},
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
      gap="36px"
      direction="row"
      width="375px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px -3px 6px rgba(0, 0, 0, 0.1599999964237213)"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "Navbar")}
      {...rest}
    >
      <Home
        width="36px"
        height="36px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "home")}
      ></Home>
      <Search
        width="36px"
        height="36px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "search")}
      ></Search>
      <GridCustom
        width="36px"
        height="36px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "grid")}
      ></GridCustom>
      <Unlock
        width="36px"
        height="36px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "unlock")}
      ></Unlock>
      <Settings
        width="36px"
        height="36px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "settings")}
      ></Settings>
    </Flex>
  );
}
