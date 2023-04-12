export interface IProduct {
  name: string;
  category: string;
  description: string;
  id: string;
  _id: string;
  price: number;
  review?: any[];
  stock: number;
  ratingAverage: number;
  ratingQuantity: number;
  createdAt?: Date;
  images: string[];
  brand:string
}



