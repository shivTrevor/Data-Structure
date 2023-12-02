function generatePermutations(input) {
    const result = [];

    function swap(str, i, j) {
        const charArray = str.split('');
        const temp = charArray[i];
        charArray[i] = charArray[j];
        charArray[j] = temp;
        return charArray.join('');
    }

    function generatePermutationsHelper(str, left, right) {
        if (left === right) {
            result.push(str);
        } else {
            for (let i = left; i <= right; i++) {
                str = swap(str, left, i);
                generatePermutationsHelper(str, left + 1, right);
                str = swap(str, left, i); // Backtrack
            }
        }
    }

    generatePermutationsHelper(input, 0, input.length - 1);
    return result;
}

// Example usage:
const inputString = "abc";
const permutationsResult = generatePermutations(inputString);
console.log(permutationsResult);
