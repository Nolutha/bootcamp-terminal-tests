import assert from "assert";
import countAllFromTown from "../allfromtown.js"

describe('this test is for isfrombellville' , function(){

    it('should return fromStellies ' , function(){
        
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        assert.equal(fromStellies, 3);

    });

    it('should return fromKuilsriver' , function(){
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
        assert.equal(fromKuilsriver, 1);   

    });

});


