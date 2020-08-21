//testing question 1
describe("replacewith",function(){
    it("returns the string with the replacements",function(){
        expect(replaceWith("awesome","e","z")).toEqual("awzsomz");
    });
    it("is case sensitive",function(){
        expect(replaceWith("Foo","F","B")).toEqual("Boo");
    });
})


//testing question 2
describe('expand', function()  {
    it('returns copy', function()  {
        expect(expand([1,2,3],3)).toEqual([1,2,3,1,2,3,1,2,3])
    })
    it('returns same array if the second argument is 1', function() {
        expect(expand(["foo", "test"],1)).toEqual(["foo","test"])
    })
})


//testing question 3
describe('only numbers', function () {
    it('returns true if all arguments are numbers', function()  {
        expect(acceptNumbersOnly(1,2,3,4,5,6,7)).toEqual(true)
    })
    it('returns false if there is a typeof non number', function() {
        expect(acceptNumbersOnly(1,"foo")).toEqual(false)
    })
    it('returns false if NaN is passed as an argument', function()  {
        expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).toEqual(false)
    })
})


//testing question 4
describe('mergeArrays', function() {
    it('returns a sorted array', function()  {
        expect(mergeArrays([2,1],[3,4])).toEqual([1,2,3,4])
    })
})


//testing question 5
describe('mergeObjects', function()  {
    it('merges two objects', function()  {
        var obj1= {
            name: "Foo",
            num: 33
        }
        var obj2 = {
            test: "thing",
            num: 55
        }        
        expect(mergeObjects(obj1, obj2)).toEqual({
            name: "Foo",
            test: "thing",
            num: 55
        }
        )
    })
})