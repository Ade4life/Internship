class Solution {
    public String addBinary(String a, String b) {
        StringBuilder result = new StringBuilder();
        int carry = 0;

        // Ensure both strings are of equal length by padding with zeros.
        while (a.length() < b.length()) a = "0" + a;
        while (b.length() < a.length()) b = "0" + b;

        // Iterate from the rightmost bit to the leftmost bit.
        for (int i = a.length() - 1; i >= 0; i--) {
            int bitA = Character.getNumericValue(a.charAt(i));
            int bitB = Character.getNumericValue(b.charAt(i));

            // Calculate the sum and carry for the current bit.
            int currentSum = bitA ^ bitB ^ carry;
            carry = (bitA & bitB) | (bitB & carry) | (carry & bitA);

            // Prepend the sum to the result string.
            result.insert(0, currentSum);
        }

        // If there's a carry after all bits are processed, prepend it to the result.
        if (carry > 0) {
            result.insert(0, carry);
        }

        return result.toString();
    }
}
