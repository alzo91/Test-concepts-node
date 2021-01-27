import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

interface ResponseBalance {
  transactions: Array<Transaction>;
  balance: Balance;
}
class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): ResponseBalance {
    const balance: Balance = { income: 0, outcome: 0, total: 0 };

    this.transactions.forEach(transaction => {
      switch (transaction.type) {
        case 'income':
          balance.income += transaction.value;
          break;
        case 'outcome':
          balance.outcome += transaction.value;
          break;
        default:
      }
    });
    balance.total = balance.income - balance.outcome;

    return { transactions: this.transactions, balance };
  }

  public create({ title, type, value }: CreateTransactionDTO): Transaction {
    // TODO
    const transaction = new Transaction({ title, type, value });
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
