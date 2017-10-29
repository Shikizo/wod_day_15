function checkSos(sos){
    var count = 0;
    var check = "SOS";
   
   for(var i = 0; i < sos.length; i++){     
        if(sos[i] != check[i%3]){
            count++;
        }
         }
    return count;
}
console.log(checkSos("SOTSOSSOTSOT"));
