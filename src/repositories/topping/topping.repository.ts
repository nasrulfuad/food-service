import { ITopping } from "../../models/topping/topping.model";

export interface IToppingRepository {
  findAll(): Promise<ITopping[]>;
  findById(id: ITopping["id"]): Promise<ITopping>;
  update(t: ITopping, id: ITopping["id"]): Promise<ITopping>;
  delete(t: ITopping): Promise<void>;
  create(topping: ITopping): Promise<ITopping>;
}
