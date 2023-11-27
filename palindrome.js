public class Solution {
    public boolean isPalindrome(int x) {
        // Handle negative numbers (they are not palindromic)
        if (x < 0) {
            return false;
        }

        // Reverse the integer
        int reversed_x = 0;
        int original_x = x;

        while (x > 0) {
            int digit = x % 10;
            reversed_x = reversed_x * 10 + digit;
            x /= 10;
        }

        // Compare the reversed integer with the original
        return original_x == reversed_x;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Example usage:
        System.out.println(solution.isPalindrome(121));  // Output: true
        System.out.println(solution.isPalindrome(-121)); // Output: false
    }
}
