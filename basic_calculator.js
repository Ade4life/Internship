import java.util.Stack;

class Solution {
    public int calculate(String s) {
        Stack<Integer> stack = new Stack<>();
        int result = 0;
        int num = 0;
        int sign = 1; // 1 represents positive, -1 represents negative

        for (char c : s.toCharArray()) {
            if (Character.isDigit(c)) {
                num = num * 10 + (c - '0');
            } else if (c == '+') {
                result += sign * num;
                num = 0;
                sign = 1;
            } else if (c == '-') {
                result += sign * num;
                num = 0;
                sign = -1;
            } else if (c == '(') {
                // Save the current result and sign on the stack
                stack.push(result);
                stack.push(sign);

                // Reset for the expression inside the parentheses
                result = 0;
                sign = 1;
            } else if (c == ')') {
                // Calculate the result inside the parentheses
                result += sign * num;
                num = 0;

                // Pop the sign and the saved result from the stack
                result *= stack.pop();
                result += stack.pop();
            }
        }

        // Handle the last number in the expression
        result += sign * num;

        return result;
    }
}
