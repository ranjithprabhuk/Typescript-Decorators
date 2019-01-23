const logger = (target: Object, targetKey: string, descriptor: TypedPropertyDescriptor<any>): any => {
    return {
        value: ( ... args: any[]): any => {
            console.info(`'${targetKey}' method is executed`);
            console.log(`Arguments: , ${args.join(', ')}`);
            const result = descriptor.value.apply(target, args);
            console.log(`Result: , ${result}`);
            return result;
        }
    }
}

class Calculator {
    @logger
    add(x: number, y: number): number {
        return x + y;
    }

    @logger
    sub(x: number, y: number): number {
        return x - y;
    }

    @logger
    print(x: number, y: number): void {
        console.log('Value of X:', x);
        console.log('Value of Y:', y);
    }
}

new Calculator().add(1, 3);
new Calculator().sub(5, 3);
new Calculator().print(10, 8);

export {};