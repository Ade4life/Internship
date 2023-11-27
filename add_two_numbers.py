class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        // Create a dummy head for the result linked list.
        // The result will be linked starting from the next node of the dummy head.
        ListNode* dummy_head = new ListNode();
        
        // Create a pointer 'current' to keep track of the current position in the result linked list.
        ListNode* current = dummy_head;

        // Initialize the carry to 0.
        int carry = 0;

        // Loop until there are nodes in at least one of the input linked lists or there is a carry.
        while (l1 || l2 || carry) {
            // Get the values of the current nodes in l1 and l2 (or 0 if the node is nullptr).
            int x = l1 ? l1->val : 0;
            int y = l2 ? l2->val : 0;

            // Calculate the total sum of the current digits and the carry from the previous step.
            int total_sum = x + y + carry;

            // Update the carry for the next iteration.
            carry = total_sum / 10;

            // Extract the current digit (the last digit of the total sum).
            int current_digit = total_sum % 10;

            // Create a new node with the current digit and link it to the result linked list.
            current->next = new ListNode(current_digit);

            // Move the 'current' pointer to the newly created node.
            current = current->next;

            // Move to the next nodes in the input linked lists if they exist.
            if (l1) l1 = l1->next;
            if (l2) l2 = l2->next;
        }

        // Return the result, starting from the next node of the dummy head.
        return dummy_head->next;
    }
};
