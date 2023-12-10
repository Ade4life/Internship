import java.util.HashMap;
import java.util.Map;
import java.util.PriorityQueue;

class Solution {
    public String frequencySort(String s) {
        // Count the frequency of each character
        Map<Character, Integer> charFrequency = new HashMap<>();
        for (char c : s.toCharArray()) {
            charFrequency.put(c, charFrequency.getOrDefault(c, 0) + 1);
        }

        // Use a priority queue to sort characters based on frequency
        PriorityQueue<Character> maxHeap = new PriorityQueue<>((a, b) ->
                charFrequency.get(b) - charFrequency.get(a));

        maxHeap.addAll(charFrequency.keySet());

        // Build the sorted string
        StringBuilder result = new StringBuilder();
        while (!maxHeap.isEmpty()) {
            char c = maxHeap.poll();
            int frequency = charFrequency.get(c);

            for (int i = 0; i < frequency; i++) {
                result.append(c);
            }
        }

        return result.toString();
    }

    public static void main(String[] args) {
        // Example usage:
        Solution solution = new Solution();
        String input = "tree";
        String result = solution.frequencySort(input);
        System.out.println(result); // Output: "eert" or "eetr"
    }
}
