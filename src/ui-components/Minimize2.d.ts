/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ViewProps } from "@aws-amplify/ui-react";
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
export declare type Minimize2OverridesProps = {
    Minimize2?: PrimitiveOverrideProps<ViewProps>;
    "minimize-2"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type Minimize2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Minimize2OverridesProps | undefined | null;
}>;
export default function Minimize2(props: Minimize2Props): React.ReactElement;
