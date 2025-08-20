export const problems = [
  {
    id: "1",
    title: "Two Sum",
    difficulty: "Easy",
    statement:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\nYou can return the answer in any order.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9"
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]"
      }
    ],
    hint: "Try using a hash map to store visited numbers and check complements."
  },
  {
    id: "2",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    statement:
      "Given a string s, find the length of the longest substring without repeating characters.",
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: "The answer is 'abc', with the length of 3."
      },
      {
        input: 's = "bbbbb"',
        output: "1"
      }
    ],
    hint: "Use a sliding window with a set or hash map to track seen characters."
  },
  {
    id: "3",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    statement:
      "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.\nThe overall run time complexity should be O(log (m+n)).",
    examples: [
      {
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2.0"
      },
      {
        input: "nums1 = [1,2], nums2 = [3,4]",
        output: "2.5"
      }
    ],
    hint: "Think binary search: partition the arrays such that left and right halves are balanced."
  }
]
