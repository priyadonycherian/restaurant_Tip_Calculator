
function tipcalculator(bill)
 {   
   var percentage 

   if (bill <50) 
   {
     percentage = .2
   }
    else if (bill > 50 && bill <200)
    { 
     percentage =.15 
    } 
    else {
        percentage=.1
    }
    return bill*percentage
}

var bills =[124,48,268]
var tips  = (tipcalculator(bills[0]),tipcalculator(bills[1]),tipcalculator(bills[2]))
console.log(tips)
