var divide = function(a, b) {
    if(b==0){
        throw "Error: Division by zero is not allowed.";
        // alert("Error: Division by zero is not allowed.");
        // return "unknown";
    }
    return parseFloat(a/b);
}