import { ITopping } from "../../models/topping/topping.model";

export interface IToppingService {
  /**
   * Create a new topping
   * @param t Topping
   */
  create(t: ITopping): Promise<ITopping>;
  /**
   * Get all toppings
   */
  findAll(): Promise<ITopping[]>;
  /**
   * Get a topping by id
   * @param id string
   */
  findById(id: ITopping["id"]): Promise<ITopping>;
  /**
   * Update an existing topping by id
   * @param t Topping
   * @param id string
   */
  update(t: ITopping, id: ITopping["id"]): Promise<ITopping>;
  /**
   * Delete topping by id topping
   * @param t Topping
   */
  delete(t: ITopping): Promise<void>;
}
