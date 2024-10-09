/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps } from "@aws-amplify/ui-react";
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
export declare type FavoritosOverridesProps = {
    Favoritos?: PrimitiveOverrideProps<FlexProps>;
    Star?: PrimitiveOverrideProps<FlexProps>;
    Vector58931590?: PrimitiveOverrideProps<IconProps>;
    Vector58931591?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type FavoritosProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Llave-Favorita-activa" | "Llave-Favorita-desactiva";
} & {
    overrides?: FavoritosOverridesProps | undefined | null;
}>;
export default function Favoritos(props: FavoritosProps): React.ReactElement;
