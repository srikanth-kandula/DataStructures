var LinkedLists = /** @class */ (function () {
    function LinkedLists() {
    }
    LinkedLists.prototype.addFirst = function (data) {
        if (!this.head) {
            this.head = new ListNode(data);
            this.head.next = null;
        }
        else {
            var newNode = new ListNode(data);
            newNode.next = this.head;
            this.head = newNode;
        }
    };
    ;
    LinkedLists.prototype.addLast = function (data) {
        if (!this.head) {
            this.head = new ListNode(data);
        }
        else {
            if (this.head.next == null) {
                var newNode = new ListNode(data);
                this.head.next = newNode;
            }
            else {
                while (this.head.next !== null) {
                    var nextNode = this.head.next;
                    this.head = nextNode;
                }
                var newNode = new ListNode(data);
                this.head = newNode;
            }
        }
    };
    ;
    LinkedLists.prototype.removeFirst = function () {
        if (!this.head) {
            throw new Error("nothing to delete");
        }
        else {
            if (this.head.next == null) {
                this.head = null;
            }
            else {
                var nextNode = this.head.next;
                this.head = nextNode;
            }
        }
    };
    LinkedLists.prototype.removeLast = function () {
        if (!this.head) {
            throw new Error("nothing to delete");
        }
        else {
            if (this.head.next == null) {
                this.head = null;
            }
            else {
                var previousNode = void 0;
                while (this.head.next !== null) {
                    previousNode = this.head;
                    var nextNode = this.head.next;
                    this.head = nextNode;
                }
                this.head = previousNode;
                this.head.next = null;
            }
        }
    };
    return LinkedLists;
}());
var ListNode = /** @class */ (function () {
    function ListNode(data) {
        this.data = data;
    }
    return ListNode;
}());
var linkedList = new LinkedLists();
linkedList.addFirst(1);
linkedList.addFirst(2);
linkedList.addFirst(3);
linkedList.removeFirst();
linkedList.removeLast();
console.log(linkedList);
