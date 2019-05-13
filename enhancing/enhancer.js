module.exports = {
  succeed,
  fail,
  repair,
  get,
};



function succeed(item) {
  if (item !== 20){
  item = {
    ...item,
    enhancement: item + 1
   
  }

  return { ...item };
}

else{
  item = {
    ...item,
    enhancement: item
  };
  return{...item}
}
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


function get(item){
  const newItem={
    ...item,
    enhancement:item,
    name:item
  }
  if (newItem.enhancement<1){
    return newItem.name
  }
  else{
    return newItem.name+"+"+newItem.enhancement
  }
}