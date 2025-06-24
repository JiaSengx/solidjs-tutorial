import type { JSX } from 'solid-js';

export interface CardType {
    title: string
    rounded: boolean,
    description?: string
    children?: JSX.Element | JSX.Element[];
}