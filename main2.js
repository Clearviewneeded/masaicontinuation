function createCounter(initial = 0) {
  let count = initial;

  return {
    increment() {
      count++;
      console.log("Current count:", count);
      return count;
    },
    decrement() {
      count--;
      console.log("Current count:", count);
      return count;
    },
    getCount() {
      console.log("Current count:", count);
      return count;
    }
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();

const counter2 = createCounter(10);
counter2.increment();
counter2.increment();
counter2.decrement();



///question2
function createBankAccount(initialBalance = 0) {
  let balance = Number(initialBalance) || 0;
  const history = [];

  function formatTxn(type, amount, success, note = "") {
    return {
      time: new Date().toISOString(),
      type,
      amount,
      success,
      balanceAfter: balance,
      note
    };
  }

  return {
    deposit(amount) {
      amount = Number(amount);
      if (!isFinite(amount) || amount <= 0) {
        history.push(formatTxn("deposit", amount, false, "invalid amount"));
        console.log("Deposit failed: invalid amount");
        return false;
      }
      balance += amount;
      history.push(formatTxn("deposit", amount, true));
      console.log("Deposited:", amount, "New balance:", balance);
      return true;
    },

    withdraw(amount) {
      amount = Number(amount);
      if (!isFinite(amount) || amount <= 0) {
        history.push(formatTxn("withdraw", amount, false, "invalid amount"));
        console.log("Withdrawal failed: invalid amount");
        return false;
      }
      if (amount > balance) {
        history.push(formatTxn("withdraw", amount, false, "insufficient funds"));
        console.log("Withdrawal failed: insufficient balance");
        return false;
      }
      balance -= amount;
      history.push(formatTxn("withdraw", amount, true));
      console.log("Withdrawn:", amount, "New balance:", balance);
      return true;
    },

    getBalance() {
      console.log("Current balance:", balance);
      return balance;
    },

    getTransactionHistory() {
      return history.slice();
    }
  };
}

const account = createBankAccount(200);
account.deposit(500);
account.withdraw(200);
account.withdraw(600);
console.log(account.getBalance());
console.log(account.balance);
console.log(account.getTransactionHistory());
