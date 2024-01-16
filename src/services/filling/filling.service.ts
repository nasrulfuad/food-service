import { IFilling } from "../../models/filling/filling.model";

export interface IFillingService {
  /**
   * Create a new filling
   * @param t Filling
   */
  create(t: IFilling): Promise<IFilling>;
  /**
   * Get all fillings
   */
  findAll(): Promise<IFilling[]>;
  /**
   * Get a food by id
   * @param id string
   */
  findById(id: IFilling["id"]): Promise<IFilling>;
  /**
   * Update an existing food by id
   * @param t Food
   * @param id string
   */
  update(t: IFilling, id: IFilling["id"]): Promise<IFilling>;
  /**
   * Delete filling by id
   * @param t Filling
   */
  delete(t: IFilling): Promise<void>;
}
