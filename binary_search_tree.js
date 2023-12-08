import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int x) {
        val = x;
    }
}

public class Codec {

    // Serialize a binary search tree to a string
    public String serialize(TreeNode root) {
        StringBuilder sb = new StringBuilder();
        serializeHelper(root, sb);
        return sb.toString();
    }

    // Helper function for serializing a binary search tree
    private void serializeHelper(TreeNode node, StringBuilder sb) {
        if (node == null) {
            return;
        }

        sb.append(node.val).append(",");
        serializeHelper(node.left, sb);
        serializeHelper(node.right, sb);
    }

    // Deserialize a string to a binary search tree
    public TreeNode deserialize(String data) {
        if (data.isEmpty()) {
            return null;
        }

        String[] values = data.split(",");
        Queue<String> queue = new LinkedList<>(Arrays.asList(values));
        return deserializeHelper(queue, Integer.MIN_VALUE, Integer.MAX_VALUE);
    }

    // Helper function for deserializing a binary search tree
    private TreeNode deserializeHelper(Queue<String> queue, int lower, int upper) {
        if (queue.isEmpty()) {
            return null;
        }

        int val = Integer.parseInt(queue.peek());
        if (val < lower || val > upper) {
            return null;
        }

        queue.poll();
        TreeNode node = new TreeNode(val);
        node.left = deserializeHelper(queue, lower, val);
        node.right = deserializeHelper(queue, val, upper);

        return node;
    }

    public static void main(String[] args) {
        // Example usage
        Codec codec = new Codec();

        // Create a sample binary search tree
        TreeNode root = new TreeNode(2);
        root.left = new TreeNode(1);
        root.right = new TreeNode(3);

        // Serialize the tree
        String serialized = codec.serialize(root);
        System.out.println("Serialized: " + serialized);

        // Deserialize the string to reconstruct the tree
        TreeNode reconstructedRoot = codec.deserialize(serialized);

        // Check if the deserialization is successful
        System.out.println("Deserialized and Reconstructed Tree: " + codec.serialize(reconstructedRoot));
    }
}
