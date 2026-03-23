class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


export default function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) return null;

    const dummy = new ListNode(0, head);
    let prev = dummy;

    while (prev.next && prev.next.next) {
        if (prev.next.val === prev.next.next.val) {
            const duplicateVal = prev.next.val;
            while (prev.next && prev.next.val === duplicateVal) {
                prev.next = prev.next.next;
            }
        } else {
            prev = prev.next;
        }
    }

    return dummy.next;
};