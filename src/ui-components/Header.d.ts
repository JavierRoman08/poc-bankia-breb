/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type HeaderOverridesProps = {
    Header?: PrimitiveOverrideProps<FlexProps>;
    Barra?: PrimitiveOverrideProps<FlexProps>;
    "Frame 31350"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 31349"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 31348"?: PrimitiveOverrideProps<FlexProps>;
    "LOGO-B"?: PrimitiveOverrideProps<ViewProps>;
    "Pagos inmediatos"?: PrimitiveOverrideProps<TextProps>;
    "arrow-left"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type HeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default" | "Variant2";
} & {
    overrides?: HeaderOverridesProps | undefined | null;
}>;
export default function Header(props: HeaderProps): React.ReactElement;
