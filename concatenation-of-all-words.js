import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
    public List<Integer> findSubstring(String s, String[] words) {
        List<Integer> result = new ArrayList<>();

        if (s == null || s.length() == 0 || words == null || words.length == 0) {
            return result;
        }

        int wordLen = words[0].length();
        int wordCount = words.length;
        int totalLen = wordLen * wordCount;

        Map<String, Integer> wordFreq = new HashMap<>();
        for (String word : words) {
            wordFreq.put(word, wordFreq.getOrDefault(word, 0) + 1);
        }

        for (int i = 0; i < wordLen; i++) {
            int left = i, right = i;
            Map<String, Integer> currentFreq = new HashMap<>();

            while (right + wordLen <= s.length()) {
                String currentWord = s.substring(right, right + wordLen);
                right += wordLen;
                currentFreq.put(currentWord, currentFreq.getOrDefault(currentWord, 0) + 1);

                while (currentFreq.get(currentWord) > wordFreq.getOrDefault(currentWord, 0)) {
                    String leftWord = s.substring(left, left + wordLen);
                    currentFreq.put(leftWord, currentFreq.get(leftWord) - 1);
                    left += wordLen;
                }

                if (right - left == totalLen) {
                    result.add(left);
                }
            }
        }

        return result;
    }
}
