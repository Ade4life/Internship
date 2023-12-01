import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[][] mergeArrays(int[][] nums1, int[][] nums2) {
        List<int[]> result = new ArrayList<>();
        int i = 0, j = 0;

        while (i < nums1.length || j < nums2.length) {
            int id1 = (i < nums1.length) ? nums1[i][0] : Integer.MAX_VALUE;
            int id2 = (j < nums2.length) ? nums2[j][0] : Integer.MAX_VALUE;

            if (id1 == id2) {
                result.add(new int[]{id1, nums1[i][1] + nums2[j][1]});
                i++;
                j++;
            } else if (id1 < id2) {
                result.add(new int[]{id1, nums1[i][1]});
                i++;
            } else {
                result.add(new int[]{id2, nums2[j][1]});
                j++;
            }
        }

        return result.toArray(new int[0][]);
    }
}
