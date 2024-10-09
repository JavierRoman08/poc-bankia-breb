/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { HomeProps } from "./Home";
import { SearchProps } from "./Search";
import { UnlockProps } from "./Unlock";
import { SettingsProps } from "./Settings";
import { FlexProps } from "@aws-amplify/ui-react";
import { GridProps } from "./Grid";
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
export declare type NavbarOverridesProps = {
    Navbar?: PrimitiveOverrideProps<FlexProps>;
    home?: HomeProps;
    search?: SearchProps;
    grid?: GridProps;
    unlock?: UnlockProps;
    settings?: SettingsProps;
} & EscapeHatchProps;
export declare type NavbarProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default";
} & {
    overrides?: NavbarOverridesProps | undefined | null;
}>;
export default function Navbar(props: NavbarProps): React.ReactElement;
