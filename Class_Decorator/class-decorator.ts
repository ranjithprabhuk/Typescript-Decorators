const logger = <T>(originalConstructor: new(...args: any[]) => T): any => {
    const newConstructor = (...args) => {
        console.log(`Arguments: , ${args.join(', ')}`);
        new originalConstructor(args);
	}

	newConstructor.prototype = originalConstructor.prototype;
    return newConstructor;
}

@logger
class User {
    constructor(name: string, email: string, age: number) {

	}
}

@logger
class Product {
    constructor(name: string, price: string) {

	}
}

new User('Ranjithprabhu', 'contact@ranjithprabhu.in', 27);
new Product('Pen', '$2.00 USD');

export {};
