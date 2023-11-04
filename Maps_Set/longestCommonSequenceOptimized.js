//By using set data structure having 
//time complexity -> O(n) and space complexity => O(n)

function longestConsecutive(nums) {
    let numSet = new Set(nums);
    let maxStreak = 0;

    for (let num of nums) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            maxStreak = Math.max(maxStreak, currentStreak);
        }
    }

    return maxStreak;
}

let nums = [100, 4, 200, 1, 3, 2];
let longest = longestConsecutive(nums);
console.log(longest); // Output: 4
