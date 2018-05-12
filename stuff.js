let counter=(arr)=>{
    return '一共有'+arr.length+'个元素在数组当中'
};
let adder=(a,b)=>{
    return `当前的两个值和为${a+b}`
};
let pi=3.14;
module.exports={
    counter:counter,
    adder:adder,
    pi:pi
};

// console.log(counter(['changjun', 'wuxiaohong', 'nixiaolei']));