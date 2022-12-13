var Queue = /** @class */ (function () {
    function Queue() {
        this.queueArray = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.queueArray.push(item);
    };
    Queue.prototype.dequeue = function () {
        if (!this.queueArray.length) {
            throw new Error("nothing to dequeue");
        }
        else {
            var dequeueItem = this.queueArray.shift();
            return dequeueItem;
        }
    };
    Queue.prototype.peek = function () {
        var item = null;
        if (!this.queueArray.length) {
            console.info("queue is empty");
        }
        else {
            item = this.queueArray[0];
        }
        return item;
    };
    return Queue;
}());
var myQueue = new Queue();
myQueue.enqueue(0);
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
console.log("queue is: " + myQueue.queueArray);
myQueue.peek();
console.log(" top item in queue is " + myQueue.peek());
myQueue.dequeue();
myQueue.dequeue();
console.log(" top item in queue is " + myQueue.peek());
console.log("queue is: " + myQueue.queueArray);
