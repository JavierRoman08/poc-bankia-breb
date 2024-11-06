/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TransferProps } from "./Transfer";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type TransaccionesOverridesProps = {
    Transacciones?: PrimitiveOverrideProps<FlexProps>;
    "Frame 31304"?: PrimitiveOverrideProps<FlexProps>;
    Transfer?: TransferProps;
    Transferir?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TransaccionesProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TransaccionesOverridesProps | undefined | null;
}>;
export default function Transacciones(props: TransaccionesProps): React.ReactElement;
