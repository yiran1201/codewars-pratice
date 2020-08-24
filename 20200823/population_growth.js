
  function nbYear(p0, percent, aug, p) {
    let sum = p0;
    let yr = 0;
    while (sum < p) {
      sum += sum * (percent / 100) + aug;
      yr += 1;
    }
    return yr;
  }


// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.

// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)


