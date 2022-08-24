import assert from "assert";
import yearsAgo from "../yearsago.js"

describe('this test is for yearsAgo', function () {
    
    it('should return newdate', function () {
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));

    });
    it('should return the year', function () {
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));

    });

});