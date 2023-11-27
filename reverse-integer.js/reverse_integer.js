class Solution {
    public int reverse(int x) {
        int reversed = 0;

        while (x != 0) {
            // Check for overflow before updating reversed
            if (reversed > Integer.MAX_VALUE / 10 || reversed < Integer.MIN_VALUE / 10) {
                return 0;
            }

            // Update reversed by adding the last digit of x
            reversed = reversed * 10 + x % 10;
            x /= 10;
        }

        return reversed;
    }
}
