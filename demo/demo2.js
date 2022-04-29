
function calWeight(list, id) {
    let cache = {};
    for(let i = 0; i < list.length; i++) {
        let param = list[i];
        if (!cache[param[0]]) {
            cache[param[0]] = {
                weight: param[1],
                child: param[2]
            }
        }
    }
    let result = 0;
    if (cache[id]) {
        let child = cache[id].child;
        result = cache[id].weight;
        child.forEach(item => {
            result += cache[item].weight
        });
    }
    return result; 
}