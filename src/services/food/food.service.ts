import { IFood } from "../../models/food/food.model";

export interface IFoodService {
  /**
   * Create a new topping
   * @param t Topping
   */
  create(t: IFood): Promise<IFood>;
  /**
   * Get all toppings
   */
  findAll(): Promise<IFood[]>;
  /**
   * Get a topping by id
   * @param id string
   */
  findById(id: IFood["id"]): Promise<IFood>;
  /**
   * Update an existing topping by id
   * @param t Topping
   * @param id string
   */
  update(t: IFood, id: IFood["id"]): Promise<IFood>;
  /**
   * Delete topping by id topping
   * @param t Topping
   */
  delete(t: IFood): Promise<void>;
}
