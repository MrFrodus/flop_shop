import { BaseController } from "./baseController";
import { TransactionService, transactionService } from "../service/transaction";


class TransactionController extends BaseController {
  protected service: TransactionService;

  constructor(service: TransactionService) {
    super(service);
  }
}

export const transactionController = new TransactionController(transactionService);
