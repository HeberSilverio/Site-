const bankAccount = [
   {
      customerId: "A10120123",
      accountNumber: "502362145",
      balance: 5000,
      addressLine1: "Parkway Avenue",
      addressLine2: "United States",
   },
   {
      customerId: "A10120123",
      accountNumber: "502362145",
      balance: 10000,
      addressLine1: "CA Avenue",
      addressLine2: "United States",
   },
];

for (let index = 0; index < bankAccount.length; index++){
   Object.freeze(bankAccount[index]);
}

bankAccount[1].balance = 200;