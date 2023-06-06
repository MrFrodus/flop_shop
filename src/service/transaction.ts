import { BaseService } from "./baseService";
import { TransactionRepository, transactionRepository } from "../repository/transaction";

export class TransactionService extends BaseService {
  protected repository: TransactionRepository;

  constructor(repository: TransactionRepository) {
    super(repository);
  }
}

export const transactionService = new TransactionService(transactionRepository);
