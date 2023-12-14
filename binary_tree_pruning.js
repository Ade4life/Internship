class Solution {
    public TreeNode pruneTree(TreeNode root) {
        if (root == null) {
            return null;
        }

        root.left = pruneTree(root.left);
        root.right = pruneTree(root.right);

        // If the current node is a leaf and its value is 0, prune it
        if (root.left == null && root.right == null && root.val == 0) {
            return null;
        }

        return root;
    }
}
