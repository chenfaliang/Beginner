/*
* 参数:任意数组
* 返回值：去掉重复的数组
* */
function arrRem(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {//for循环，遍历数组中的每一个元素
        var item = arr[i];//假设这里是1的时候，item等于1，ary[0]=1

        if (obj[item] === undefined) {//判断obj中是否存在相同的属性名，没有就是undeniable。有就不报undeniable
            obj[item] = ary[i];//把1传给obj，此时obj={1:1}。。。报undefined说明首次传入，就把数组的元素当成属性名和值，存入空对象中
        }else {
            ary.splice(i,1);//不报undefined，说明当前这个元素是重复的，就从原数组中删除，删除1个，i是当前元素的下标
            i--;//用了splice就存在数组塌陷问题，所以使用i--避免数组塌陷
        }
    }
    return arr;
}
