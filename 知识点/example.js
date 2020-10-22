function tickets(peopleInLine){
  var deposit = [0,0,0];

  function updateDeposit(paid) {
    for(var i=0; i<deposit.length; i++) {
      deposit[i] = deposit[i] + paid[i];
    }
  }


