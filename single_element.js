class Solution {
    public int singleNonDuplicate(int[] nums) {
        int low = 0, high = nums.length - 1;

        while (low < high) {
            int mid = low + (high - low) / 2;

            // Check if mid is even or odd
            if (mid % 2 == 1) {
                mid--; // Make mid even
            }

            // Compare mid with its neighbor
            if (nums[mid] != nums[mid + 1]) {
                // If they are not equal, the single element is on the left side
                high = mid;
            } else {
                // If they are equal, the single element is on the right side
                low = mid + 2;
            }
        }

        return nums[low];
    }
}
