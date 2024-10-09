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
export declare type CobroOverridesProps = {
    Cobro?: PrimitiveOverrideProps<ViewProps>;
    "Group 1000001327"?: PrimitiveOverrideProps<ViewProps>;
    Vector58901674?: PrimitiveOverrideProps<IconProps>;
    Vector58901675?: PrimitiveOverrideProps<IconProps>;
    Vector58901676?: PrimitiveOverrideProps<IconProps>;
    Vector58901677?: PrimitiveOverrideProps<IconProps>;
    Vector58901678?: PrimitiveOverrideProps<IconProps>;
    Vector58901679?: PrimitiveOverrideProps<IconProps>;
    Vector58901680?: PrimitiveOverrideProps<IconProps>;
    Vector58901681?: PrimitiveOverrideProps<IconProps>;
    Vector58901682?: PrimitiveOverrideProps<IconProps>;
    Vector58901683?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type CobroProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CobroOverridesProps | undefined | null;
}>;
export default function Cobro(props: CobroProps): React.ReactElement;
