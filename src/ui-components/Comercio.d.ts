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
export declare type ComercioOverridesProps = {
    Comercio?: PrimitiveOverrideProps<ViewProps>;
    "edificio 1"?: PrimitiveOverrideProps<ViewProps>;
    "Layer 51"?: PrimitiveOverrideProps<ViewProps>;
    Vector58941606?: PrimitiveOverrideProps<IconProps>;
    Vector58941607?: PrimitiveOverrideProps<IconProps>;
    Vector58941608?: PrimitiveOverrideProps<IconProps>;
    Vector58941609?: PrimitiveOverrideProps<IconProps>;
    Vector58941610?: PrimitiveOverrideProps<IconProps>;
    Vector58941611?: PrimitiveOverrideProps<IconProps>;
    Vector58941612?: PrimitiveOverrideProps<IconProps>;
    Vector58941613?: PrimitiveOverrideProps<IconProps>;
    Vector58941614?: PrimitiveOverrideProps<IconProps>;
    Vector58941615?: PrimitiveOverrideProps<IconProps>;
    Vector58941616?: PrimitiveOverrideProps<IconProps>;
    Vector58941617?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ComercioProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ComercioOverridesProps | undefined | null;
}>;
export default function Comercio(props: ComercioProps): React.ReactElement;
