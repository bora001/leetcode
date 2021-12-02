// Leetcode Challenge

// 4. Median of Two Sorted Arrays
// https://leetcode.com/problems/median-of-two-sorted-arrays/
// Runtime: 112 ms, faster than 95.51% of JavaScript online submissions
// Memory Usage: 44.8 MB, less than 52.12% of JavaScript online submissions

var findMedianSortedArrays = function (nums1, nums2) {
  let arr = nums1.concat(nums2).sort((a, b) => a - b);
  let n = arr.length;

  if (n % 2 === 0) {
    let m = Math.floor(n / 2);
    return (arr[m] + arr[m - 1]) / 2;
  } else {
    let m = Math.floor(n / 2);
    return arr[m];
  }
};
