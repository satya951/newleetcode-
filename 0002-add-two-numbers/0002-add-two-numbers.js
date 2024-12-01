// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0); // Dummy node to simplify edge cases
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
        let val1 = l1 !== null ? l1.val : 0; // Get value of current node in l1
        let val2 = l2 !== null ? l2.val : 0; // Get value of current node in l2

        let sum = val1 + val2 + carry; // Add values and carry
        carry = Math.floor(sum / 10); // Calculate carry for next digit
        current.next = new ListNode(sum % 10); // Create new node for result digit

        // Move to the next nodes
        current = current.next;
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    return dummyHead.next; // Return the result list, skipping the dummy node
};

// Example Usage:
function arrayToList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

function listToArray(list) {
    let result = [];
    while (list) {
        result.push(list.val);
        list = list.next;
    }
    return result;
}

let l1 = arrayToList([2, 4, 3]);
let l2 = arrayToList([5, 6, 4]);

let result = addTwoNumbers(l1, l2);
console.log(listToArray(result)); // Output: [7, 0, 8]

l1 = arrayToList([9, 9, 9, 9, 9, 9, 9]);
l2 = arrayToList([9, 9, 9, 9]);
result = addTwoNumbers(l1, l2);
console.log(listToArray(result)); // Output: [8, 9, 9, 9, 0, 0, 0, 1]
