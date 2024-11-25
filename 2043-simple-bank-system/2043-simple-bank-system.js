class Bank {
    constructor(balance) {
        this.balance = balance;
    }

    isValidAccount(account) {
        return account >= 1 && account <= this.balance.length;
    }

    transfer(account1, account2, money) {
        if (!this.isValidAccount(account1) || !this.isValidAccount(account2)) {
            return false;
        }
        if (this.balance[account1 - 1] >= money) {
            this.balance[account1 - 1] -= money;
            this.balance[account2 - 1] += money;
            return true;
        }
        return false;
    }

    deposit(account, money) {
        if (!this.isValidAccount(account)) {
            return false;
        }
        this.balance[account - 1] += money;
        return true;
    }

    withdraw(account, money) {
        if (!this.isValidAccount(account)) {
            return false;
        }
        if (this.balance[account - 1] >= money) {
            this.balance[account - 1] -= money;
            return true;
        }
        return false;
    }
}

// Example usage:
const bank = new Bank([10, 100, 20, 50, 30]);
console.log(bank.withdraw(3, 10)); // true
console.log(bank.transfer(5, 1, 20)); // true
console.log(bank.deposit(5, 20)); // true
console.log(bank.transfer(3, 4, 15)); // false
console.log(bank.withdraw(10, 50)); // false