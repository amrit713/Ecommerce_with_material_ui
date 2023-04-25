export interface IProduct {
  name: string;
  category: string;
  description: string;
  id: string;
  _id: string;
  price: number;
  reviews?: any[];
  stock: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  createdAt?: Date;
  images: string[];
  brand:string
  
}



