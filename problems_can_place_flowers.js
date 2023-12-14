class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        int count = 0;
        int length = flowerbed.length;

        for (int i = 0; i < length; i++) {
            // Check if the current position is empty and its neighbors are also empty
            if (flowerbed[i] == 0 &&
                (i == 0 || flowerbed[i - 1] == 0) &&
                (i == length - 1 || flowerbed[i + 1] == 0)) {
                
                // Place a flower at the current position
                flowerbed[i] = 1;
                count++;

                // Move to the next available position after placing a flower
                i++;
            }
        }

        // Check if the number of placed flowers is greater than or equal to n
        return count >= n;
    }
}
