import { IFilling } from "../../models/filling/filling.model";

export interface IFillingService {
  /**
   * Create a new topping
   * @param t Topping
   */
  create(t: IFilling): Promise<IFilling>;
  /**
   * Get all toppings
   */
  findAll(): Promise<IFilling[]>;
  /**
   * Get a topping by id
   * @param id string
   */
  findById(id: IFilling["id"]): Promise<IFilling>;
  /**
   * Update an existing topping by id
   * @param t Topping
   * @param id string
   */
  update(t: IFilling, id: IFilling["id"]): Promise<IFilling>;
  /**
   * Delete topping by id topping
   * @param t Topping
   */
  delete(t: IFilling): Promise<void>;
}
