const input_array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
const new_array = [];
const dict = {}

for (var i = 0; i < input_array.length; i++) {
    let current = input_array[i];
    if (current in dict) {
        dict[current] += 1;
    }
    else {
        dict[current] = 1;
    }
}

for (var key in dict) {
    temp_array = []
    if (dict[key] > 1) {
        for (var i = 0; i <= dict[key]; i++) {
            temp_array.push(key);
        }
        new_array.push(temp_array);
    } else {
        new_array.push(key);
    }
}

function twoSum(nums, target_num) {
    const map = [];
    const indexnum = [];

    for (let x = 0; x < nums.length; x++) {
        if (map[nums[x]] != null) {
            var index = map[nums[x]];
            indexnum[0] = index;
            indexnum[1] = x;
            break;
        }
        else {
            map[target_num - nums[x]] = x;
        }
    }
    return indexnum;
}
