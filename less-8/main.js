const handleSubmit =(e)=>{
    e.preventDefault();
    let result = document.getElementById("result")
    let number_1 = Number(e.target[0].value)
    let number_2 = e.target[1].value
    let amal = e.target[2].value
    result.innerHTML = number_2
    console.log(number_2);
    if(amal === "*"){
        result.innerHTML = number_1 * number_2
    }else if(amal === "+"){
        result.innerHTML = number_1 + number_2
    }else if(amal === "-"){
        result.innerHTML = number_1 - number_2
    }else{
        result.innerHTML = number_1 / number_2
    }
}