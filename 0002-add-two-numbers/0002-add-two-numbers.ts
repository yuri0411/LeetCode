/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


function addTwoNumbers(l1, l2) {
    let listNode: ListNode = new ListNode(0)
    let current = listNode;
    let carry = 0

    while(l1 !== null || l2 !== null || carry !== 0) {
        const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry
        carry = Math.floor(sum / 10)
        current.next = new ListNode(sum % 10)

        current = current.next

        if(l1 !== null) l1 = l1.next
        if(l2 !== null) l2 = l2.next
    }

    return listNode.next
}