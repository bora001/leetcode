// Leetcode Challenge

// 4. Median of Two Sorted Arrays
// Runtime 95.51% /Memory 52.12%
// https://leetcode.com/problems/median-of-two-sorted-arrays/
// Runtime: 112 ms, faster than 95.51% of JavaScript online submissions
// Memory Usage: 44.8 MB, less than 52.12% of JavaScript online submissions

// var findMedianSortedArrays = function (nums1, nums2) {
//   let arr = nums1.concat(nums2).sort((a, b) => a - b);
//   let n = arr.length;
//   if (n % 2 === 0) {
//     let m = Math.floor(n / 2);
//     return (arr[m] + arr[m - 1]) / 2;
//   } else {
//     let m = Math.floor(n / 2);
//     return arr[m];
//   }
// };

// 35. Search Insert Position
// Runtime 97.73% /Memory 28.88%
// https://leetcode.com/problems/search-insert-position/
// Runtime: 64 ms, faster than 97.73% of JavaScript online submissions
// Memory Usage: 40 MB, less than 28.88% of JavaScript online submissions

// var searchInsert = function (nums, target) {
//   if (nums.indexOf(target) !== -1) {
//     return nums.indexOf(target);
//   } else {
//     nums.push(target);
//     nums.sort((a, b) => a - b);
//     return nums.indexOf(target);
//   }
// };

// 136. Single Number
// Runtime 72.50% /Memory 50.91%
// https://leetcode.com/problems/single-number/
// Runtime: 84 ms, faster than 72.50% of JavaScript online submissions
// Memory Usage: 42.3 MB, less than 50.91% of JavaScript online submissions

// var singleNumber = function (nums) {
//   nums.sort((a, b) => a - b);
//   let arr = [];
//   for (let n of nums) {
//     if (arr.indexOf(n) == -1) {
//       arr.push(n);
//     } else {
//       arr.pop();
//     }
//   }
//   return arr;
// };
