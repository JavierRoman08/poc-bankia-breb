/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import User from "./User";
import { Divider, Flex, Text } from "@aws-amplify/ui-react";
import Favoritos from "./Favoritos";
export default function Listacontactos(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="12px"
      direction="row"
      width="328px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Listacontactos")}
      {...rest}
    >
      <Flex
        gap="12px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Contenido")}
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
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Icon59662249")}
        >
          <User
            display="flex"
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "User")}
          ></User>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="132px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="21px"
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
            children="Carlos sanabria rios"
            {...getOverrideProps(overrides, "Carlos sanabria rios")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="21px"
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
            children="***********6940"
            {...getOverrideProps(overrides, "***********6940")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="95px"
          height="unset"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Icon59662254")}
        >
          <Favoritos
            display="flex"
            gap="10px"
            direction="row"
            width="24px"
            height="24px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="12px"
            padding="5px 5px 5px 5px"
            backgroundColor="rgba(102,219,255,1)"
            property1="Llave-Favorita-activa"
            {...getOverrideProps(overrides, "Favoritos")}
          ></Favoritos>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="328px"
        height="1px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Divider59662256")}
      >
        <Divider
          width="unset"
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider59662257")}
        ></Divider>
      </Flex>
    </Flex>
  );
}
