import java.util.HashSet;
import java.util.ArrayList;
import java.util.List;

public class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        // Create sets to store unique elements from each array
        HashSet<Integer> set1 = new HashSet<>();
        HashSet<Integer> set2 = new HashSet<>();

        // Add elements from nums1 to set1
        for (int num : nums1) {
            set1.add(num);
        }

        // Add elements from nums2 to set2
        for (int num : nums2) {
            set2.add(num);
        }

        // Find the intersection of the two sets
        set1.retainAll(set2);

        // Convert the set to an array
        int[] result = new int[set1.size()];
        int index = 0;
        for (int num : set1) {
            result[index++] = num;
        }

        return result;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Example usage
        int[] nums1 = {1, 2, 2, 1};
        int[] nums2 = {2, 2};
        int[] result = solution.intersection(nums1, nums2);

        // Print the result
        System.out.print("Intersection: [");
        for (int i = 0; i < result.length; i++) {
            System.out.print(result[i]);
            if (i < result.length - 1) {
                System.out.print(", ");
            }
        }
        System.out.println("]");
    }
}
