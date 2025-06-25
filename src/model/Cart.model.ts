export interface CartContextType {
    items: CartModelType[];
    setItems: (value: CartModelType[] | ((prev: CartModelType[]) => CartModelType[])) => void;
}


export type CartModelType = {
    id: number;
    title: string;
    quantity: number;
    price: number;
};