function tickets(peopleInLine){
  var deposit = [0,0,0];

  function updateDeposit(paid) {
    for(var i=0; i<deposit.length; i++) {
      deposit[i] = deposit[i] + paid[i];
    }
  }

  for (var index in peopleInLine) {

    if(peopleInLine[index] === 25) {
      updateDeposit([1,0,0])
    }

    else if(peopleInLine[index] === 50) {
      updateDeposit([-1,1,0])
    }

    else {// pay 100
      if (deposit[0] >=1 && deposit[1] >=1){
          updateDeposit([-1,-1,1]);}
      else if (deposit[0] >=3 && deposit[1] == 0){
          updateDeposit([-3, 0, 1]);}
      else {
          updateDeposit([-3, 0, 1]);}
    }

    if (deposit[0] < 0 || deposit[1] < 0 || deposit[2] < 0 ) {
      return 'NO';
    }
  }
  return 'YES';
}
