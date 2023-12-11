import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
    public String[] findRestaurant(String[] list1, String[] list2) {
        Map<String, Integer> indexMap = new HashMap<>();
        List<String> result = new ArrayList<>();
        int minIndexSum = Integer.MAX_VALUE;

        // Populate indexMap with indices of elements in list1
        for (int i = 0; i < list1.length; i++) {
            indexMap.put(list1[i], i);
        }

        // Iterate through list2 and find common strings with least index sum
        for (int j = 0; j < list2.length; j++) {
            if (indexMap.containsKey(list2[j])) {
                int currentIndexSum = j + indexMap.get(list2[j]);

                // Update result if the current index sum is smaller
                if (currentIndexSum < minIndexSum) {
                    result.clear();
                    result.add(list2[j]);
                    minIndexSum = currentIndexSum;
                } else if (currentIndexSum == minIndexSum) {
                    result.add(list2[j]);
                }
            }
        }

        // Convert the list to an array
        return result.toArray(new String[result.size()]);
    }
}
