/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public void deleteNode(ListNode node) {
        // Ensure that the node to be deleted is not the last node
        if (node == null || node.next == null) {
            return;
        }

        // Copy the value of the next node to the current node
        node.val = node.next.val;

        // Skip the next node by updating the next pointer
        node.next = node.next.next;
    }
}
