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
export declare type LogoBPrincipalMejoradoOverridesProps = {
    LogoBPrincipalMejorado?: PrimitiveOverrideProps<ViewProps>;
    "Group 19"?: PrimitiveOverrideProps<ViewProps>;
    Vector61071914?: PrimitiveOverrideProps<IconProps>;
    Vector61071915?: PrimitiveOverrideProps<IconProps>;
    Vector61071916?: PrimitiveOverrideProps<IconProps>;
    Vector61071917?: PrimitiveOverrideProps<IconProps>;
    Vector61071918?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 138"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type LogoBPrincipalMejoradoProps = React.PropsWithChildren<Partial<ViewProps> & {
    property1?: "Cuaternario" | "Positivo" | "Principal" | "Quintario" | "Secundario" | "Terciario";
} & {
    overrides?: LogoBPrincipalMejoradoOverridesProps | undefined | null;
}>;
export default function LogoBPrincipalMejorado(props: LogoBPrincipalMejoradoProps): React.ReactElement;
