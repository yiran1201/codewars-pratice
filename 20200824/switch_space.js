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
  const res = [];
  for (let menu of menus) {
    const matchArr = input.match(new RegExp(menu, 'gi'));
    if (matchArr !== null) {
      for (let i = 0; i < matchArr.length; i++) {
        res.push(menu);
      }
    }
  }
  return res.join(' ');
}

console.log(
  getOrder('milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza')
);
