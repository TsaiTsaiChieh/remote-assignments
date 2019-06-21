const main_nav = document.getElementsByClassName('main-nav')[0];
const close_menu = document.getElementsByClassName('close-menu')[0];
const menu_btn = document.getElementsByClassName('menu-btn')[0];
const display_mask = document.getElementsByClassName('display-mask')[0];
var window_size = window.matchMedia("(min-width: 800px)");

const ass1 = document.getElementsByClassName('ass1')[0];
const ass2 = document.getElementsByClassName('ass2')[0];
const ass3 = document.getElementsByClassName('ass3')[0];
const ass5 = document.getElementsByClassName('ass5')[0];

const copy_btn_list = document.getElementsByClassName('copy-btn');



function menu_contrl() {
    menu_btn.addEventListener('click', () => {
        main_nav.style.right = '0';
        display_mask.style.display = 'block';
    });

    close_menu.addEventListener('click', () => {
        main_nav.style.right = '-100%';
        display_mask.style.display = 'none';
    });
}

function close_display_mask(window_size) {
    if (window_size.matches) { // If media query matches
        display_mask.style.display = 'none';
    }
}
menu_contrl();
close_display_mask(window_size); // Call listener function at run time
window_size.addListener(close_display_mask); // Attach listener function on state changes

var ass1_code = `function max(...numbers) {
    let toIdx = numbers.length;
    while (toIdx > 1) {
        toIdx--;
        for (let i = 0; i < toIdx; i++) {
            if (numbers[i] > numbers[i + 1]) {
                let tmp = numbers[i];
                numbers[i] = numbers[i + 1];
                numbers[i + 1] = tmp;
            }
        }
    }
    return numbers[numbers.length - 1];
}
console.log('Assigment1: ');
console.log(`\``Max value is ${ max(1, 2, 4, 5) } in 1, 2, 4, 5.`\``);
console.log(`\``Max value is ${ max(5, 2, 7, 1, 6) } in 5, 2, 7, 1, 6.`\``); `;
var ass2_code = `function calculate(args) {
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
`;

var ass3_code = `function avg(data) {
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
`;

var ass5_code = `function twoSum(nums, target) {
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
`;
ass1.getElementsByTagName('pre')[0].textContent = ass1_code;
ass2.getElementsByTagName('pre')[0].textContent = ass2_code;
ass3.getElementsByTagName('pre')[0].textContent = ass3_code;
ass5.getElementsByTagName('pre')[0].textContent = ass5_code;

function copyEvent() {
    let btn_count = 0;
    for (let i = 0; i < copy_btn_list.length; i++) {
        copy_btn_list[i].addEventListener('click', (event) => {

            let code_section = event.target.nextElementSibling;
            // console.log(code_section);
            let range = document.createRange();
            range.selectNode(code_section);
            // 選取裡面的文字
            window.getSelection().addRange(range);
            var copyStatus = document.execCommand('copy');
            window.getSelection().removeAllRanges();
            btn_count++;
            if (btn_count % 2 == 1) {
                event.target.textContent = 'Complete';
                btn_count = 0;
                // console.log(btn_count);
                setTimeout((btn_count) => {
                    event.target.textContent = 'Copy';
                    // console.log(btn_count, ' hi');

                }, 500);
            }
        });
    }
}


copyEvent();