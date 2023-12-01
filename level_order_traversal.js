import java.util.LinkedList;
import java.util.Queue;

class Solution {
    public int widthOfBinaryTree(TreeNode root) {
        if (root == null) {
            return 0;
        }

        Queue<NodePosition> queue = new LinkedList<>();
        queue.offer(new NodePosition(root, 0));

        int maxWidth = 0;

        while (!queue.isEmpty()) {
            int size = queue.size();
            int leftmostIndex = queue.peek().index;

            for (int i = 0; i < size; i++) {
                NodePosition current = queue.poll();
                int currentIndex = current.index;

                if (current.node.left != null) {
                    queue.offer(new NodePosition(current.node.left, 2 * currentIndex));
                }

                if (current.node.right != null) {
                    queue.offer(new NodePosition(current.node.right, 2 * currentIndex + 1));
                }

                // Calculate width at the current level
                int currentWidth = currentIndex - leftmostIndex + 1;
                maxWidth = Math.max(maxWidth, currentWidth);
            }
        }

        return maxWidth;
    }

    private static class NodePosition {
        TreeNode node;
        int index;

        public NodePosition(TreeNode node, int index) {
            this.node = node;
            this.index = index;
        }
    }
}
