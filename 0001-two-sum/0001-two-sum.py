class Solution:
    def twoSum(self, nums, target):
        # Create a dictionary to store the indices of the elements
        num_to_index = {}
        
        # Iterate through the list
        for i, num in enumerate(nums):
            # Calculate the complement of the current number
            complement = target - num
            
            # Check if the complement exists in the dictionary
            if complement in num_to_index:
                # Return the indices of the two numbers
                return [num_to_index[complement], i]
            
            # Otherwise, add the current number to the dictionary
            num_to_index[num] = i

# Example usage:
solution = Solution()

nums1 = [2, 7, 11, 15]
target1 = 9
print(solution.twoSum(nums1, target1))  # Output: [0, 1]

nums2 = [3, 2, 4]
target2 = 6
print(solution.twoSum(nums2, target2))  # Output: [1, 2]

nums3 = [3, 3]
target3 = 6
print(solution.twoSum(nums3, target3))  # Output: [0, 1]
