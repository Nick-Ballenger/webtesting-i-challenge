const { succeed, repair, fail, get } = require('./enhancer.js');
// test away!


it('takes in an item and changes durability to', () =>{
    expect (repair('fish').durability).toBe(100);
    expect (repair(NaN).durability).toBe(100);
    expect (repair(999).durability).toBe(100);
})