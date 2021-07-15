export interface IFood {
  available: boolean;
  description: string;
  id: number;
  image: string;
  name: string;
  price: string;
}

export type IFoodInput = Omit<IFood, "id" | "available">;
