import type { JSX } from 'solid-js';

export interface CardType {
    title: string
    rounded: boolean
    children?: JSX.Element | JSX.Element[];
}