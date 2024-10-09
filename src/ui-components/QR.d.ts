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
export declare type QROverridesProps = {
    QR?: PrimitiveOverrideProps<ViewProps>;
    "codigo-qr 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector58901652?: PrimitiveOverrideProps<IconProps>;
    Vector58901653?: PrimitiveOverrideProps<IconProps>;
    Vector58901654?: PrimitiveOverrideProps<IconProps>;
    Vector58901655?: PrimitiveOverrideProps<IconProps>;
    Vector58901656?: PrimitiveOverrideProps<IconProps>;
    Vector58901657?: PrimitiveOverrideProps<IconProps>;
    Vector58901658?: PrimitiveOverrideProps<IconProps>;
    Vector58901659?: PrimitiveOverrideProps<IconProps>;
    Vector58901660?: PrimitiveOverrideProps<IconProps>;
    Vector58901661?: PrimitiveOverrideProps<IconProps>;
    Vector58901662?: PrimitiveOverrideProps<IconProps>;
    Vector58901663?: PrimitiveOverrideProps<IconProps>;
    Vector58901664?: PrimitiveOverrideProps<IconProps>;
    Vector58901665?: PrimitiveOverrideProps<IconProps>;
    Vector58901666?: PrimitiveOverrideProps<IconProps>;
    Vector58901667?: PrimitiveOverrideProps<IconProps>;
    Vector58901668?: PrimitiveOverrideProps<IconProps>;
    Vector58901669?: PrimitiveOverrideProps<IconProps>;
    Vector58901670?: PrimitiveOverrideProps<IconProps>;
    Vector58901671?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type QRProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: QROverridesProps | undefined | null;
}>;
export default function QR(props: QRProps): React.ReactElement;
