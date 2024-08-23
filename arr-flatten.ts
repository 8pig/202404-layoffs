function arrFlatten(arr: any[]) {

      const tempArr:any = [];

      arr.forEach(item => {
            if(Array.isArray(item)){
                  const cTemp = arrFlatten(item);
                  cTemp.forEach(cItem => {
                        tempArr.push(cItem);
                  })

            }else {
                  tempArr.push(item)
            }
      })
      return tempArr;

}


console.log(arrFlatten([1,2,[3,4,[5,6,[7,8]]]]))


function Foo (constructorm, ...args){
      const obj = Object.create(constructorm.prototype);
      const result = constructorm.apply(obj, args);
      return result
}


