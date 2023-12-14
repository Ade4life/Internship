import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
    public List<List<String>> findDuplicate(String[] paths) {
        Map<String, List<String>> contentToPathsMap = new HashMap<>();

        for (String pathInfo : paths) {
            String[] parts = pathInfo.split(" ");
            String directory = parts[0];
            
            for (int i = 1; i < parts.length; i++) {
                String file = parts[i];
                int openParenIndex = file.indexOf('(');
                String fileName = file.substring(0, openParenIndex);
                String fileContent = file.substring(openParenIndex + 1, file.length() - 1);
                String fullPath = directory + "/" + fileName;

                contentToPathsMap.computeIfAbsent(fileContent, k -> new ArrayList<>()).add(fullPath);
            }
        }

        List<List<String>> result = new ArrayList<>();
        for (List<String> pathsList : contentToPathsMap.values()) {
            if (pathsList.size() > 1) {
                result.add(pathsList);
            }
        }

        return result;
    }
}
