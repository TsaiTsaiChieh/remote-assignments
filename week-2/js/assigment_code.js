/*
// Assignment 1: Function and Array
*/

function maxValue(array) {
    let toIdx = array.length;
    while (toIdx > 1) {
        toIdx--;
        for (let i = 0; i < toIdx; i++) {
            if (array[i] > array[i + 1]) {
                let tmp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tmp;
            }
        }
    }
    return array[array.length - 1];
}
console.log('Assigment1: ');
console.log('Max value is', maxValue([1, 2, 4, 5]), 'in array[1,2,4,5].');
console.log('Max value is', maxValue([5, 2, 7, 1, 6]), 'in array[5,2,7,1,6].');

/*
// Assignment 2: Object
*/
function calculate(args) {
    let result;
    if (args.op === "+") {
        result = args.n1 + args.n2;
    } else if (args.op === "-") {
        result = args.n1 - args.n2;
    } else {
        result = "Not supported";
    }
    return result;
}
var obj1 = {
    op: '+',
    n1: 7, n2: 3
};
var obj2 = new Object();
obj2.op = '-';
obj2.n1 = 10;
obj2.n2 = 3;
console.log('Assigment2: {op, n1, n2}');
console.log('Object1 {', obj1.op, ',', obj1.n1, ',', obj1.n2, '} is', calculate(obj1));
console.log('Object2 {', obj2.op, ',', obj2.n1, ',', obj2.n2, '} is', calculate(obj2));

/*
// Assignment 3: Function, Array and Object
*/
function avg(data) {
    let data_sum = 0;
    for (let i = 0; i < data.products.length; i++) {
        data_sum += data.products[i].price;
    }
    return data_sum / data.products.length
}

var data = {
    size: 3,
    products: [
        {
            name: "Product 1",
            price: 100
        },
        {
            name: "Product 2",
            price: 700
        },
        {
            name: "Product 3",
            price: 250
        }
    ]
};
console.log('Assigment3');
console.log('Average price is ', avg(data));
/*
// Assignment 5: Algorithm Practice (Advanced Optional)
*/
function twoSum(nums, target) {
    var ans_array = [];
    for (let i = 0; i < nums.length; i++) {
        tmp = target - nums[i];
        for (let j = i + 1; j < nums.length - 1; j++) {
            if (nums[j] == tmp) {
                ans_array[0] = i;
                ans_array[1] = j;
            }
        }
    }
    if (ans_array.length == 0) {
        return 'No answer.';
    }
    else {
        return ans_array;
    }
}
var nums1 = [2, 5, 11, 15, 8, 4, 13];
var target1 = 20;
ans_array1 = twoSum(nums1, target1);

var nums2 = [2, 21, 11, 8, 5];
var target2 = 20;
ans_array2 = twoSum(nums2, target2);
console.log('Assigment5 (Optional)');
console.log('Array: ', nums1, ', nums[', ans_array1[0], '] + nums[', ans_array1[1], '] is', target1);
console.log('Array:', nums2, 'is', ans_array2);