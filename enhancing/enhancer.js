module.exports = {
  succeed,
  fail,
  repair,
  get,
};

const item = {name: '', durability: '', enhancement: ''}

function succeed(item) {
  return { ...item };
}

function fail(item) {
  item = {
    ...item,
      enhancement: item,
      durability: item
  }
  if(item.enhancement < 15){
    item.durability -= 5;
    }
  else{
    item.durability -=10;
  }
  if(item.enhancement > 16){
    item.enhancement --;
  }

  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
