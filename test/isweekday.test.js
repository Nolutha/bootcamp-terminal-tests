import assert from "assert";
import isWeekday from "../isweekday.js"

describe('this test is for isweekday' , function(){

    it('should  return false if saturday' , function(){
        assert.equal(isWeekday('Saturday'), false);

    });
    it('should return false if sunday' , function(){
        assert.equal(isWeekday('Sunday'), false);

    });
    
    it('should  return true if monday' , function(){
        assert.equal(isWeekday('Monday'), true);

    });
    
    it('should  return true if tuesday' , function(){
        assert.equal(isWeekday('Tuesday'), false);

    });

    it('should  return true if wednesday ' , function(){
        assert.equal(isWeekday('Wednesday'), false);

    });

    it('should  return true if thursday' , function(){
        assert.equal(isWeekday('Thursday'), false);

    });

    it('should  return true if friday ' , function(){
        assert.equal(isWeekday('Friday'), false);

    });

});




