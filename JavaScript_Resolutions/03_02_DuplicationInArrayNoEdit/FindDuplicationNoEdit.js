
var countRange = (nums, start, end) => {
    let count = 0;
    for(let i=0; i< nums.length;i++) {
        if(start<=nums[i] && nums[i] <=end) {
            count++;
        }
    }
    return count
}
var findRepeatNumber = (nums) => {
    let start = 1;
    let end = nums.length - 1;
    let middle, count
    while(end >= start) {
        middle = Math.floor((start + end) / 2);
        count = countRange(nums, start, middle)
        if(start == end) {
            if(count > 1) {
                return start
            } else {
                break
            }
        }
        if(count > (middle - start + 1)) {
            end = middle
        } else {
            start = middle + 1
        }
    }
    return -1
}

let test = [2, 3, 5, 4, 3, 2, 6, 7]
console.log(findRepeatNumber(test))