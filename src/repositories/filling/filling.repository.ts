import { IFilling } from "../../models/filling/filling.model";

export interface IFillingRepository {
  findAll(): Promise<IFilling[]>;
  findById(id: IFilling["id"]): Promise<IFilling>;
  findByIds(ids: IFilling["id"][]): Promise<IFilling[]>;
  update(t: IFilling, id: IFilling["id"]): Promise<IFilling>;
  delete(t: IFilling): Promise<void>;
  create(topping: IFilling): Promise<IFilling>;
}
