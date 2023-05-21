function logicalCalc(array, op){
    if(op === 'AND')return array.every(v => v);
    else if(op === 'OR')return array.some(v => v);
    else return !!array.reduce((s, v) => s ^ v);
}