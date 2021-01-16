import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class BurgersService {
  async getAll() {
    let res = await dbContext.burgers.get()

  }
}

export const burgersService = new BurgersService();