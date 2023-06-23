import { BaseService } from "./baseService";
import { TransactionRepository, transactionRepository } from "../repository/transaction";
import { ITransaction } from "../models/transaction";

export class TransactionService extends BaseService<ITransaction> {
  protected repository: TransactionRepository;

  constructor(repository: TransactionRepository) {
    super(repository);
  }
}

export const transactionService = new TransactionService(transactionRepository);
