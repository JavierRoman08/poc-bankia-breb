/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { UserProps } from "./User";
import { DividerProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { FavoritosProps } from "./Favoritos";
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
export declare type ListacontactosOverridesProps = {
    Listacontactos?: PrimitiveOverrideProps<FlexProps>;
    Contenido?: PrimitiveOverrideProps<FlexProps>;
    Icon59662249?: PrimitiveOverrideProps<FlexProps>;
    User?: UserProps;
    Text?: PrimitiveOverrideProps<FlexProps>;
    "Carlos sanabria rios"?: PrimitiveOverrideProps<TextProps>;
    "***********6940"?: PrimitiveOverrideProps<TextProps>;
    Icon59662254?: PrimitiveOverrideProps<FlexProps>;
    Favoritos?: FavoritosProps;
    Divider59662256?: PrimitiveOverrideProps<FlexProps>;
    Divider59662257?: PrimitiveOverrideProps<DividerProps>;
} & EscapeHatchProps;
export declare type ListacontactosProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ListacontactosOverridesProps | undefined | null;
}>;
export default function Listacontactos(props: ListacontactosProps): React.ReactElement;
