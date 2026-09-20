document.getElementById("divide").addEventListener("click", function() {

    let a = document.getElementById("first_num").value;
    let b = document.getElementById("second_num").value;

    try{
    let result = divide(Number(a), Number(b));
    document.getElementById("result_value").innerHTML = result;
    }
    catch(error){
        console.log("error");
    }

})