
function getArraySum(hotelCostnumbers){
    var sum =0;
    for(var i =0; i < hotelCostnumbers.length; i++){
         var element = hotelCostnumbers[i];
         sum = sum + element;
    
    }
    return sum;

}

var hotelCostnumbers =[40,70,65,80];
var result = getArraySum(hotelCostnumbers);
console.log("total of the hotelCostnumbers: ", result);


var total = getArraySum([55,44,96,47,36,74]);
console.log("total of the hotelCostnumbers: ", total);
