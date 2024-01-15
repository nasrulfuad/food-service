import { IFilling } from "../../models/filling/filling.model";
import { IFillingRepository } from "../../repositories/filling/filling.repository";
import { IFillingService } from "./filling.service";

export class FillingImplService implements IFillingService {
  constructor(private fillingRepo: IFillingRepository) {}
  create(t: IFilling): Promise<IFilling> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<IFilling> {
    throw new Error("Method not implemented.");
  }
  update(t: IFilling, id: string): Promise<IFilling> {
    throw new Error("Method not implemented.");
  }
  delete(t: IFilling): Promise<void> {
    throw new Error("Method not implemented.");
  }

  findAll(): Promise<IFilling[]> {
    /** Business process here */
    return this.fillingRepo.findAll();
  }
}
