class Expenses {
  constructor(...props) {
    let [account, date, amount] = props;
    this.account = account;
    this.date = date;
    this.amount = amount;
  }
  get dayStr() {
    return moment(this.date).format('dddd');
  }
  get amountWithCurrency() {
    return `₹${this.amount}`;
  }
}

let day1M = new Expenses('John', '2022-09-29', '56');
let day2M = new Expenses('John', '2022-09-30', '60');
let day3M = new Expenses('John', '2022-10-01', '21');
let day4M = new Expenses('John', '2022-10-02', '40');

let day1N = new Expenses('Adam', '2022-09-29', '23');
let day2N = new Expenses('Adam', '2022-09-30', '88');
let day3N = new Expenses('Adam', '2022-10-01', '29');
let day4N = new Expenses('Adam', '2022-10-02', '69');

let mzExpenses = [day1M, day2M, day3M, day4M];
let ntExpenses = [day1N, day2N, day3N, day4N];

const totalExpenses = [mzExpenses, ntExpenses];

totalExpenses.forEach((eachAccount) => {
  eachAccount.forEach((perDay) => {
    if (perDay.dayStr === 'Sunday') {
      console.log(
        `${perDay.account} spent ${perDay.amountWithCurrency} on Sunday`
      );
    }
  });
});
