//==================================================================
// 《剑指Offer――名企面试官精讲典型编程题》代码
// 作者：何海涛
//==================================================================

// 面试题3（一）：找出数组中重复的数字
// 题目：在一个长度为n的数组里的所有数字都在0到n-1的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，
// 也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。例如，如果输入长度为7的数组{2, 3, 1, 0, 2, 5, 3}，
// 那么对应的输出是重复的数字2或者3。


// 解法一：输入数组排序
var findRepeatNumber1 = function(nums){
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // https://www.jianshu.com/p/0ddbc3c8f683
    nums.sort() // 时间 空间
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] === nums[i + 1]) {
            return nums[i]
        }
    }
}



// 解法二：哈希表（哈希表？ 链表+数组？）
var findRepeatNumber2 = function(nums) {
    let map = new Map();
    for(let i of nums){
        if(map.has(i)) return i;
        map.set(i, 1);
    }
    return null;
};



// 解法三：根据下表
// TODO 这算什么思想？ 太依靠题目条件 突破 0～n-1范围 但一谈没条件就不能用了 和数组技巧无关？
// TODO 考察观察力 你能快速结合题目条件想到这种该方法吗？ 能用代码正确实现吗？ 这种结合题目观察也可以迁移到别的题目 要你观察思考
// TODO 还可以注意前面两个for循环筛选基本条件 可能一个题目的测试用例的前几部分就是这种
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber3 = function (nums) {
    if (nums == null || nums.length < 0) {
        return -1;
    }
    // 题目的条件是数组 nums 里的所有数字都在 0～n-1 的范围内
    for (let i = 0, length = nums.length; i < length; i++) {
        if (nums[i] < 0 || nums[i] > length - 1) {
            return -1;
        }
    }
    // 思路就是把数字放到对应的索引上  比方说数字3放到索引3的位置
    for (let i = 0; i < nums.length; i++) {
        // 如果当前数字跟对应的索引不相同则交换
        while (nums[i] !== i) {             // TODO 我觉得while这里对人脑最难理解 看看DEBUG
            if (nums[i] === nums[nums[i]]) {
                return nums[i];
            }
            // 这里还不能用简化的方式   一用简化的方式就报超时问题
            // [nums[i], nums[nums[i]]] = [nums[nums[i]], nums[i]];
            // 改成下面这样就ok了
            let temp = nums[i];
            [nums[i], nums[temp]] = [nums[temp], nums[i]];
        }
    }
    return -1;
};


module.exports =  {findRepeatNumber1, findRepeatNumber2, findRepeatNumber3}