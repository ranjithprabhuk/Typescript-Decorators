"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (target, targetKey, descriptor) {
    return {
        value: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.info("'" + targetKey + "' method is executed");
            console.log("Arguments: , " + args.join(', '));
            var result = descriptor.value.apply(target, args);
            console.log("Result: , " + result);
            return result;
        }
    };
};
var Calculator = (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.sub = function (x, y) {
        return x - y;
    };
    Calculator.prototype.print = function (x, y) {
        console.log('Value of X:', x);
        console.log('Value of Y:', y);
    };
    __decorate([
        logger,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", Number)
    ], Calculator.prototype, "add", null);
    __decorate([
        logger,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", Number)
    ], Calculator.prototype, "sub", null);
    __decorate([
        logger,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], Calculator.prototype, "print", null);
    return Calculator;
}());
new Calculator().add(1, 3);
new Calculator().sub(5, 3);
new Calculator().print(10, 8);
