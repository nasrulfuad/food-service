import { IFood } from "../../models/food/food.model";

export interface IFoodService {
  /**
   * Create a new food
   * @param t Food
   */
  create(t: IFood): Promise<IFood>;
  /**
   * Get all foods
   */
  findAll(): Promise<IFood[]>;
  /**
   * Get a food by id
   * @param id string
   */
  findById(id: IFood["id"]): Promise<IFood>;
  /**
   * Update an existing food by id
   * @param t Food
   * @param id string
   */
  update(t: IFood, id: IFood["id"]): Promise<IFood>;
  /**
   * Delete food by id
   * @param t Food
   */
  delete(t: IFood): Promise<void>;
}
