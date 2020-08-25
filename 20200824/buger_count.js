function getOrder(input) {
  const menus = [
    'Burger',
    'Fries',
    'Chicken',
    'Pizza',
    'Sandwich',
    'Onionrings',
    'Milkshake',
    'Coke',
  ];

  let res = '';
  for (const menu of menus) {
    let matchArr = input.match(new RegExp(menu, 'gi'));

    if (matchArr !== null) {
      matchArr = matchArr.map(el => el[0].toUpperCase() + el.slice(1))
      res += ' ' + matchArr.join(' ');
    }
  }
  return res.trim(); // remove the space from front and tail
}
console.log(
  getOrder('milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza')
);
// 'pizza pizza pizza'
