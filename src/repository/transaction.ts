import { staticData } from "../static/index";
import { ITransaction } from "../models/transaction";
import { BaseRepository } from "./baseRepository";

export class TransactionRepository extends BaseRepository<ITransaction> {}

export const transactionRepository = new TransactionRepository(
  "transaction",
  staticData.db.selectedFields.transaction.map((value) => {
    return "transaction" + value;
  })
);
