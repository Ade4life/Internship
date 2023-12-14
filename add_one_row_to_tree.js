import java.util.LinkedList;
import java.util.Queue;

class Solution {
    public TreeNode addOneRow(TreeNode root, int val, int depth) {
        if (depth == 1) {
            TreeNode newRoot = new TreeNode(val);
            newRoot.left = root;
            return newRoot;
        }

        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        int currentDepth = 1;

        while (!queue.isEmpty() && currentDepth < depth - 1) {
            int size = queue.size();

            for (int i = 0; i < size; i++) {
                TreeNode current = queue.poll();

                if (current.left != null) {
                    queue.offer(current.left);
                }

                if (current.right != null) {
                    queue.offer(current.right);
                }
            }

            currentDepth++;
        }

        while (!queue.isEmpty()) {
            TreeNode current = queue.poll();

            // Add nodes with value val at the specified depth
            TreeNode leftNode = new TreeNode(val);
            leftNode.left = current.left;
            current.left = leftNode;

            TreeNode rightNode = new TreeNode(val);
            rightNode.right = current.right;
            current.right = rightNode;
        }

        return root;
    }
}
