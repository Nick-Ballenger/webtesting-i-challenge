const { succeed, repair, fail, get } = require('./enhancer.js');
// test away!

//Repair Test
it('takes in an item and changes durability to', () =>{
    expect (repair('fish').durability).toBe(100);
    expect (repair(NaN).durability).toBe(100);
    expect (repair(999).durability).toBe(100);
})

//Fail test


it('tests MVP conditions for failure', () =>{
    //under 15 enhancement test (if less than 15 -5 durability)
    expect(fail(13).enhancement).toBe(13) && fail(1).durability.toBe(8);
    expect(fail(10).enhancement).toBe(10) && fail(1).durability.toBe(5);

    
    //over 15 enhancenment test (if greater than 15 -10 durability)
    expect(fail(16).enhancement).toBe(16) && fail(16).durability.toBe(6);

    //If the item's enhancement level is greater than 16, the enhancement 
    //level decreases by 1 (17 goes down to 16, 18 goes down to 17).
    expect(fail(18).enhancement).toBe(17)
})