var Reflect: any;

const logProperty = (target: Object, key: string | symbol): any => {
    let value = target[key];

    const getter = () =>  {
        console.log(`Getting value:  ${value}`);
        return value;
    };

    const setter = (val) => {
        console.log(`Setting value: ${val}`);
        value = val;
    }

    Reflect.deleteProperty[key];
    Reflect.defineProperty(target, key, {
        get: getter,
        set: setter
    });
}

class Item<T> {
    @logProperty
    quantity: T;
}

const pen = new Item<number>();
pen.quantity = 12;
pen.quantity;