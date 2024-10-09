/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type TransferOverridesProps = {
    Transfer?: PrimitiveOverrideProps<ViewProps>;
    "Group 1000001326"?: PrimitiveOverrideProps<ViewProps>;
    Vector58901646?: PrimitiveOverrideProps<IconProps>;
    Vector58901647?: PrimitiveOverrideProps<IconProps>;
    Vector58901648?: PrimitiveOverrideProps<IconProps>;
    Vector58901649?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type TransferProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TransferOverridesProps | undefined | null;
}>;
export default function Transfer(props: TransferProps): React.ReactElement;
