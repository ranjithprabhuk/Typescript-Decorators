var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var LOGGED_PARAM_KEY = 'logged_param';
var logParam = function (target, key, index) {
    var loggedParams = Reflect.getOwnMetadata(LOGGED_PARAM_KEY, target, key) || [];
    loggedParams.push(index);
    Reflect.defineMetadata(LOGGED_PARAM_KEY, loggedParams, target, key);
};
var Inventory = (function () {
    function Inventory(initialItem) {
        this.initialItem = initialItem;
        this.items = new Array();
        this.items.push(initialItem);
    }
    Inventory.prototype.addItem = function (item) {
        this.items.push(item);
    };
    __decorate([
        __param(0, logParam),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Inventory.prototype, "addItem", null);
    Inventory = __decorate([
        __param(0, logParam),
        __metadata("design:paramtypes", [String])
    ], Inventory);
    return Inventory;
}());
new Inventory('Pen').addItem('Pencil');
