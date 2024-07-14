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

function mergeNodes(head: ListNode | null): ListNode | null {
     let currentHead = head

    while (currentHead !== null) {
        if(currentHead.next && currentHead.next.val !== 0) {
           currentHead.val += currentHead.next.val
           currentHead.next = currentHead.next.next
        } else {
            currentHead.next = currentHead.next.next
            currentHead = currentHead.next
        }
    }
    return head
};