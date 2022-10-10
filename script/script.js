
for(x=0; x<101; x++){
    const numero = x;
    if(numero % 3 == 0 && numero % 5 == 0  ){
        console.log(numero + " FizzBuzz");
        
        
        
    }else if (numero % 3 == 0){
        console.log(numero + "fizz");
        
        
        
    }else if(numero % 5 == 0  ){
        console.log(numero + "Buzz");
        

    }
}