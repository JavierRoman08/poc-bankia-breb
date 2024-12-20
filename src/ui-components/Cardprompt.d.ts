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
export declare type CardpromptOverridesProps = {
    Cardprompt?: PrimitiveOverrideProps<FlexProps>;
    "Frame 31301"?: PrimitiveOverrideProps<FlexProps>;
    "Con llave"?: PrimitiveOverrideProps<TextProps>;
    "chevron-right"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type CardpromptProps = React.PropsWithChildren<Partial<FlexProps> & {
    cardprompt?: React.ReactNode;
} & {
    overrides?: CardpromptOverridesProps | undefined | null;
}>;
export default function Cardprompt(props: CardpromptProps): React.ReactElement;
