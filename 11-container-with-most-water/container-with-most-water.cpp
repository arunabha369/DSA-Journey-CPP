
class Solution {
public:
    int maxArea(vector<int>& height) {
        int n = height.size();
        int left = 0;
        int right = n - 1;
        int maxWater = 0;

        while(left <= right) {
            int width = right - left;
            int minHeight = min(height[left],height[right]);
            int area = minHeight * width;

            maxWater = max(area, maxWater);

            if(height[left] < height[right]) {
                left++;
            }
            else {
                right--;
            }
        }
        return maxWater;
    }
};
