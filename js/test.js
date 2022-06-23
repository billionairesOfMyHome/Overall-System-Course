array.forEach(element => {
    console.log(element);
});

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

let arr = [
    {名称:'动物',id:1,parent:null},
    {名称:'狗',id:2,parent:1},
    {名称:'猫',id:3,parent:1},
]

let arr2 = arr.reduce((result,item)=>{
    if (item.parent===null) {
        result.id = item.id;
        result.名称 = item.名称;
    } else{
        item.children = null;
        delete item.parent;
        result.children.push(item);
    }
    return result;
},{id:null,children:[]});

console.log(JSON.stringify(arr2))