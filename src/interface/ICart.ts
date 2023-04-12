export interface ICartProduct {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface ICartItem {
  product: ICartProduct;
  qty: number;
}
