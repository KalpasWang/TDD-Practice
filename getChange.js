const getChange = (totalPayable, cashPaid) => {
  let change = [];
  const availableUnits = [200, 100, 50, 20, 10, 5, 2, 1];
  
  if(cashPaid > totalPayable) {
    let uncountedChange = cashPaid - totalPayable;
    let currentUnits = availableUnits;
    while(uncountedChange > 0) {
      currentUnits = currentUnits.filter(unit => uncountedChange - unit >= 0);
      uncountedChange -= currentUnits[0];
      change.push(currentUnits[0]);
    }
  }
  return change;
}