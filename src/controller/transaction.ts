import { ITransaction } from "src/models/transaction";
import BaseController from "./baseController";
import { TransactionService, transactionService } from "../service/transaction";

class TransactionController extends BaseController<ITransaction> {
  protected service: TransactionService;
}

const transactionController = new TransactionController(transactionService);

export default transactionController;
