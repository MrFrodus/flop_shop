import { BaseController } from "./baseController";
import { TransactionService, transactionService } from "../service/transaction";
import { ITransaction } from "src/models/transaction";

class TransactionController extends BaseController<ITransaction> {
  protected service: TransactionService;

  constructor(service: TransactionService) {
    super(service);
  }
}

export const transactionController = new TransactionController(
  transactionService
);
