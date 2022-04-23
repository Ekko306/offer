// https://leetcode-cn.com/problems/3sum-closest/

// 16. 最接近的三数之和
// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
//
// 返回这三个数的和。
//
// 假定每组输入只存在恰好一个解。


// option + command + L格式化代码


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    if (nums.length === 3) return nums[0] + nums[1] + nums[2];     // 边界条件排除
    nums = nums.sort((a, b) => (a - b))    // 先进行排序，方便后面比较逻辑
    let min
    let res
    for (let i = 0; i < nums.length - 2; i++) {       // 遍历起点 从0开始， 倒数第三个结束  i<nums.length -2 等同于 i<=nums.length - 3
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {                  // 以i为起点，右边找left和right 找本次以i为起点的最接近的值
            let sum = nums[i] + nums[left] + nums[right]
            let diff = Math.abs(target - sum)   // 找更接近的值
            if (diff < min) {
                res = sum
                min = diff                         // min存储下来下一次比较 第一次
            }
            if (sum < target) {     // 因为排序了 就方便增大或缩减
                left++
            } else {
                right--
            }
        }
    }
    return res
};

module.exports = {threeSumClosest}