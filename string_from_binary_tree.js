class Solution {
    public String tree2str(TreeNode root) {
        if (root == null) {
            return "";
        }

        StringBuilder result = new StringBuilder();
        result.append(root.val);

        if (root.left != null || root.right != null) {
            result.append("(").append(tree2str(root.left)).append(")");
        }

        if (root.right != null) {
            result.append("(").append(tree2str(root.right)).append(")");
        }

        return result.toString();
    }
}
