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
var logger = function (originalConstructor) {
    var newConstructor = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Arguments: , " + args.join(', '));
        new originalConstructor(args);
    };
    newConstructor.prototype = originalConstructor.prototype;
    return newConstructor;
};
var User = (function () {
    function User(name, email, age) {
    }
    User = __decorate([
        logger,
        __metadata("design:paramtypes", [String, String, Number])
    ], User);
    return User;
}());
var Product = (function () {
    function Product(name, price) {
    }
    Product = __decorate([
        logger,
        __metadata("design:paramtypes", [String, String])
    ], Product);
    return Product;
}());
new User('Ranjithprabhu', 'contact@ranjithprabhu.in', 27);
new Product('Pen', '$2.00 USD');
