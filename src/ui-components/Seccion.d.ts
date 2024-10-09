/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { FiletextProps } from "./Filetext";
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
export declare type SeccionOverridesProps = {
    Seccion?: PrimitiveOverrideProps<FlexProps>;
    "Frame 31304"?: PrimitiveOverrideProps<FlexProps>;
    "file-text"?: FiletextProps;
    "Extractos\u2028bancarios"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SeccionProps = React.PropsWithChildren<Partial<FlexProps> & {
    label?: String;
    frame31304?: React.ReactNode;
} & {
    property1?: "Default";
} & {
    overrides?: SeccionOverridesProps | undefined | null;
}>;
export default function Seccion(props: SeccionProps): React.ReactElement;
