const { TestScheduler } = require('jest');
const { add } = require('./calculator.js');

describe('calculator tests', () => {


    describe('add() tests', () => {
        it("should return the sum of numbers passed", () => {
            expect(add(2, 2)).toBe(4);
            expect(add(2, 3)).toBe(5);
        });

        it('should return 0 when called with no arguments', () => {

            const expected = 0; 
            const actual = add();

            expect(actual).toBe(expected);
            
        });

        it('should return 0 when called with no parameters', () => {
            expect(add()).toBe(0);
        });

        it('should return the value passed when only argument is passed', () => {
            expect(add(1)).toBe(1);
        })

        it('should handle any number of arguments, separated by comma', () => {
            expect(add(1, 2, 3)).toBe(6);
            expect(add(1, 2, 3, 5)).toBe(11);

        });

        it('should handle an array of numbers', () => {
            expect(add([1, 2, 3])).toBe(6);
            expect(add([1, 2, 3, 5])).toBe(11);
        })
    })
})


/*
    - You can not put more than one expectation (expect) in the same test
    like we have above because if one fails they all fail and all of them are required to 
    pass for the test

    - Another useful function that allows you to think about a test that needs to be written
    but maybe you are not in the position where you want to dive deep onto it but you to put 
    a marker in, so you can come back to it in order to address it. That is the toDo() function.

    - We don't implement or pass a function or any parameters with the todo(), just takes a name. If you would try to pass something else you would get an error. This is something you would come back to. But what is interesting about this, you might have several of these in your file that you thought about but you just haven't gotten back to, you can do a search and find; however, you can just run your tests and it will tell you how many you have. 

    - There is a basic pattern you want to follow kind of as you think about how to set up your tests. In some cases if they are very simple you wont find this pattern to be super helpful.

    - But in other cases they are complex enough logic that is helps to separate things out.

        - This is called ---->   AAA ----> Arrange  -- Act/perform the tests  -- Access

    - So the AAA pattern you can follow through with getting all the values getting things set up the 
        way you need.

        ex:

            const expected = 0; 
            const actual = add();

    - Perfoming the function, if you are working with mocks then this arranged section would be where you would populate the mock and get them configured properly. Tests are not as simplistic as this, they can involve quite a bit of setup in order for them to work.  You want that set up to involve as little outside of your program/system as possible


           ex:

            const actual = add();  <---- performing the function

    -


*/