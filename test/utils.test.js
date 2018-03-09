var utils = require('./utils');
var expect = require('expect');

it('Should add two numbers',()=>{
    var result=utils.add(33,11);
    expect(result).toBe(44).toBe('Number')
    if(result!=44){
        throw new Error(`Value exprected is 44 but returns ${result}`)
    }
})

it('Should square a number',()=>{
    var result=utils.square(11);
    if(result!=121){
        throw new Error(`Value exprected is 121 but returns ${result}`)
    }
})