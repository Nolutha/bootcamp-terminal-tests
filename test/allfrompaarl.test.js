
import assert from "assert";
import allPaarl from "../allfrompaarl.js"

describe('this test is for allfrompaarl' , function(){

var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';

var regNumbersForPaarl = allPaarl(regNumbers);
it('should  returns the number of registration numbers from paarl.' , function(){
assert.equal(2, regNumbersForPaarl.length, 'There are 2 Paarl reg numbers.');});

it('should  return the numberplate for paarl' , function(){
   assert.equal('CJ 678 543', regNumbersForPaarl[0]); });

it('should  returns the number of registration numbers from paarl.' , function(){  
assert.equal('CJ 67890', regNumbersForPaarl[1]); });

});