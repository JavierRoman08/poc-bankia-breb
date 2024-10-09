/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardProductoOverridesProps = {
    CardProducto?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 3293"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 26"?: PrimitiveOverrideProps<FlexProps>;
    "image 136"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 25"?: PrimitiveOverrideProps<FlexProps>;
    "Gabriel molina cardona"?: PrimitiveOverrideProps<TextProps>;
    "Frame 24"?: PrimitiveOverrideProps<FlexProps>;
    "Llave principal"?: PrimitiveOverrideProps<TextProps>;
    "Frame 23"?: PrimitiveOverrideProps<FlexProps>;
    "*************"?: PrimitiveOverrideProps<TextProps>;
    "visibility_off_FILL0_wght200_GRAD0_opsz48 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type CardProductoProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CardProductoOverridesProps | undefined | null;
}>;
export default function CardProducto(props: CardProductoProps): React.ReactElement;
