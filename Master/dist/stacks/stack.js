var Stack = /** @class */ (function () {
    function Stack() {
        this.stackArray = [];
    }
    Stack.prototype.push = function (data) {
        this.stackArray.push(data);
    };
    Stack.prototype.pop = function () {
        var poppedItem = null;
        if (this.stackArray != null) {
            poppedItem = this.stackArray.splice(-1, 0);
            this.stackArray.pop();
        }
        return poppedItem;
    };
    return Stack;
}());
var stack = new Stack();
console.log("uninitialized stack: " + stack.stackArray);
stack.push(1);
stack.push('two');
stack.push('3');
console.log("Initialized stack: " + stack.stackArray);
stack.pop();
console.log("final stack: " + stack.stackArray);
