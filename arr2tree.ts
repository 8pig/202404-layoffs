
function arr2tree (nodes){
    const map = {}
    const tree = [];

    for (let i = 0; i < nodes.length; i++) {
        map[nodes[i].id] = {...nodes[i], children: []};
    }

    for (const value of Object.values(map) ) {
        if(!value.parentId){
            tree.push(value)
        }else {
            map[value.parentId].children.push(value)
        }
    }
    return tree
}


const arr = [

    {id: 2, name: 'B', parentId: 1},
    {id: 3, name: 'C', parentId: 1},
    {id: 4, name: 'D', parentId: 2},
    {id: 5, name: 'E', parentId: 2},
    {id: 6, name: 'F', parentId: 3},
    {id: 7, name: 'G', parentId: 3},
    {id: 1, name: 'A', parentId: null}
]
console.log(arr2tree(arr))



