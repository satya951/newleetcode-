/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */

class Solution {
public:
    ListNode* reverseBetween(ListNode* head, int left, int right) {
        // Edge case: if the list is empty or has only one node or left == right
        if (!head || left == right) {
            return head;
        }

        // Create a dummy node to simplify edge cases
        ListNode* dummy = new ListNode(0);
        dummy->next = head;
        ListNode* prev = dummy;

        // Move prev pointer to the node before left
        for (int i = 1; i < left; ++i) {
            prev = prev->next;
        }

        // Start reversing the sublist
        ListNode* current = prev->next;
        ListNode* nextNode = nullptr;
        ListNode* prevNode = nullptr;

        for (int i = 0; i < (right - left + 1); ++i) {
            nextNode = current->next;
            current->next = prevNode;
            prevNode = current;
            current = nextNode;
        }

        // Connect the reversed sublist back to the original list
        prev->next->next = current;
        prev->next = prevNode;

        return dummy->next;
    }
};
