/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function CardProducto(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="298px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CardProducto")}
      {...rest}
    >
      <View
        width="298px"
        height="123px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(95,237,191,1)"
        {...getOverrideProps(overrides, "Rectangle 3293")}
      ></View>
      <Flex
        gap="16px"
        direction="row"
        width="263px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 26")}
      >
        <Image
          width="82px"
          height="82px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "image 136")}
        ></Image>
        <Flex
          gap="16px"
          direction="column"
          width="165px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 25")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Gabriel molina cardona"
            {...getOverrideProps(overrides, "Gabriel molina cardona")}
          ></Text>
          <Flex
            gap="0"
            direction="column"
            width="165px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 24")}
          >
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="600"
              color="rgba(40,42,49,1)"
              lineHeight="12px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Llave principal"
              {...getOverrideProps(overrides, "Llave principal")}
            ></Text>
            <Flex
              gap="25px"
              direction="row"
              width="165px"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 23")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
                fontWeight="400"
                color="rgba(40,42,49,1)"
                lineHeight="18px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="115px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="*************"
                {...getOverrideProps(overrides, "*************")}
              ></Text>
              <View
                width="24px"
                height="24px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(
                  overrides,
                  "visibility_off_FILL0_wght200_GRAD0_opsz48 1"
                )}
              >
                <Icon
                  width="19.46px"
                  height="17.36px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 19.457700729370117,
                    height: 17.35577392578125,
                  }}
                  paths={[
                    {
                      d: "M12.9866 9.22885L12.3481 8.59037C12.6071 7.58909 12.3744 6.72627 11.65 6.00192C10.9257 5.27756 10.0712 5.0532 9.08655 5.32885L8.44808 4.69037C8.64551 4.59679 8.85192 4.53077 9.0673 4.4923C9.28268 4.45383 9.49487 4.4346 9.70385 4.4346C10.6821 4.4346 11.5163 4.7798 12.2067 5.4702C12.8971 6.16058 13.2423 6.99487 13.2423 7.97307C13.2423 8.18206 13.2263 8.39424 13.1943 8.60962C13.1622 8.82501 13.093 9.03142 12.9866 9.22885ZM16.1539 12.3385L15.5962 11.8384C16.2821 11.3269 16.9013 10.75 17.4539 10.1077C18.0064 9.46538 18.4558 8.75384 18.8019 7.97307C17.9724 6.22051 16.7519 4.82724 15.1404 3.79327C13.5289 2.75929 11.7551 2.2423 9.81923 2.2423C9.25513 2.2423 8.6984 2.28077 8.14905 2.3577C7.59968 2.43462 7.05705 2.56987 6.52115 2.76345L5.92885 2.16537C6.54167 1.91794 7.16763 1.7407 7.80673 1.63365C8.44583 1.5266 9.10063 1.47307 9.77115 1.47307C11.7853 1.47307 13.6401 2.00288 15.3356 3.0625C17.0311 4.12212 18.3468 5.54231 19.2827 7.32307C19.3327 7.43589 19.3744 7.54327 19.4077 7.6452C19.441 7.74712 19.4577 7.85641 19.4577 7.97307C19.4577 8.08974 19.442 8.19903 19.4106 8.30095C19.3792 8.40288 19.3385 8.51026 19.2885 8.62307C18.9064 9.36026 18.451 10.0362 17.9221 10.651C17.3933 11.2657 16.8039 11.8282 16.1539 12.3385ZM9.70385 14.4731C7.70642 14.4731 5.87789 13.9391 4.21828 12.8711C2.55866 11.8032 1.22372 10.4038 0.21345 8.67307C0.133967 8.56922 0.0785251 8.45993 0.0471251 8.3452C0.0157084 8.23045 0 8.10641 0 7.97307C0 7.83974 0.0198751 7.7157 0.0596251 7.60095C0.0993584 7.48622 0.150633 7.37692 0.21345 7.27307C0.651917 6.51154 1.14006 5.79904 1.67788 5.13557C2.21569 4.47211 2.83717 3.88076 3.5423 3.36153L0.840375 0.67885C0.767308 0.605766 0.728525 0.517299 0.724025 0.413449C0.719542 0.309599 0.758325 0.214733 0.840375 0.12885C0.926275 0.0429498 1.01891 0 1.11827 0C1.21763 0 1.31025 0.0429498 1.39615 0.12885L17.9693 16.7019C18.0385 16.7712 18.0731 16.8535 18.0731 16.949C18.0731 17.0445 18.0385 17.1352 17.9693 17.2211C17.8872 17.3109 17.7965 17.3558 17.6971 17.3558C17.5978 17.3558 17.5051 17.3128 17.4192 17.2269L13.8077 13.6519C13.1628 13.9532 12.4968 14.1654 11.8096 14.2885C11.1224 14.4115 10.4205 14.4731 9.70385 14.4731ZM4.0673 3.91155C3.29423 4.4077 2.61411 5 2.02693 5.68845C1.43974 6.37692 0.9641 7.13846 0.6 7.97307C1.45385 9.74999 2.70673 11.1493 4.35865 12.1711C6.01058 13.1929 7.82053 13.7038 9.78848 13.7038C10.4 13.7038 10.9987 13.6721 11.5846 13.6086C12.1705 13.5452 12.7314 13.3795 13.2673 13.1115L11.3212 11.1654C11.075 11.3167 10.8151 11.4122 10.5414 11.4519C10.2676 11.4917 9.98847 11.5115 9.70385 11.5115C8.72565 11.5115 7.89135 11.1664 7.20095 10.476C6.51057 9.78557 6.16538 8.95127 6.16538 7.97307C6.16538 7.68846 6.18942 7.4125 6.2375 7.1452C6.28558 6.87788 6.37693 6.61474 6.51153 6.35577L4.0673 3.91155Z",
                      fill: "rgba(0,0,0,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="14.7%"
                  bottom="12.99%"
                  left="9.57%"
                  right="9.36%"
                  {...getOverrideProps(overrides, "Vector")}
                ></Icon>
              </View>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
