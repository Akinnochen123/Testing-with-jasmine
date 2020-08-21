// question 1
function replaceWith(str,replace,replacewith) {
	let result = "";
    for(let i = 0; i < str.length; i++){
    	if(str[i] === replace){
			result += replacewith;
		}else{
			result += str[i]; 
		}
    }
	return result;
}

// question 2
function expand(arr,num){
    var result = [];
    for (let i = 0; i < num; i++){
        for (let j = 0; j < arr.length; j++){
            result.push(arr[j])
        }
    }
    return result;
}

// question 3
function acceptNumbersOnly(){
    for (let i=0; i < arguments.length; i++) {
        if (typeof(arguments[i]) !== 'number' || Number.isNaN(arguments[i])) {
            return false;
        }
     }
    return true;
}

// question 4
function mergeArrays(arr1, arr2){
    var newArr = arr1.concat(arr2)
    return newArr.sort();
}


// question 5
function mergeObjects(obj1,obj2){
    let obj3 = {
        ...obj1,
        ...obj2
    }
    return obj3;
}
