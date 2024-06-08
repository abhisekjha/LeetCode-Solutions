#two sum problem solution in py
# Time complexity: O(n)
# Space complexity: O(n)
def twoSum(nums, target):
    dic = {}
    for i, num in enumerate(nums):
        if target - num in dic:
            return [dic[target - num], i]
        dic[num] = i
    return None
print(twoSum([2, 7, 11, 15], 9)) # [0, 1]
print(twoSum([3, 2, 4], 6)) # [1, 2]
print(twoSum([3, 3], 6)) # [0, 1]
print(twoSum([3, 2, 3], 6)) # [0, 2]
print(twoSum([3, 2, 4], 6)) # [1, 2]

