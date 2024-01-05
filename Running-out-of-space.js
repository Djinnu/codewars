function spacey(array){
    return array.map((x, i) => array.slice(0, i+1).join(''))
}

//another option:
function spacey(array){
	let string = ''
	return array.map( (e) => string += e )
}