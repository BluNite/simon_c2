// create a variable for chai expect interface
var expect = chai.expect

describe("add", () => {
	it("should add two numbers", () => {
		var num1 = 15;
		var num2 = 35;

		var result = add(num1, num2);

		expect(result).to.eql(50);
	});
});


describe("subtract", () => {
	it("should subtract the second number from the first number", () => {
		var num1 = 200;
		var num2 = 50;

		var result = subtract(num1, num2);

		expect(result).to.eql(150);
	});
});

describe("multiply", () => {
	it("should multiply the first number with the second number", () => {
		var num1 = 2;
		var num2 = 10;

		var result = multiply(num1, num2);

		expect(result).to.eql(20);
	});
});

describe("divide", () => {
	it("should divide the second by the first number", () => {
		var num1 = 400;
		var num2 = 20;

		var result = divide(num1, num2);

		expect(result).to.eql(20);
	});
});



