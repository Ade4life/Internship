import java.util.Arrays;

public class Solution {
    public int numSquares(int n) {
        // Create an array to store the minimum number of perfect squares for each number up to n
        int[] dp = new int[n + 1];
        Arrays.fill(dp, Integer.MAX_VALUE);

        // Base case: zero is the sum of zero perfect squares
        dp[0] = 0;

        // Iterate from 1 to n to fill the dp array
        for (int i = 1; i <= n; i++) {
            // Try every possible perfect square less than or equal to i
            for (int j = 1; j * j <= i; j++) {
                // Update dp[i] if using j*j as a perfect square results in a smaller number of perfect squares
                dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
            }
        }

        return dp[n];
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Example usage
        int n = 12;
        int result = solution.numSquares(n);
        System.out.println("The least number of perfect square numbers that sum to " + n + " is: " + result);
    }
}
