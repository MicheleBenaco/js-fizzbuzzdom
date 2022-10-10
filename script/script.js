
for(x=0; x<101; x++){
    const numero = x;
    if(numero % 3 == 0 && numero % 5 == 0  ){
        console.log(x);
        let multipolo3_5 = numero;
        document.getElementById("m").innerHTML= "ciao"

        
        
    }else if (numero % 3 == 0){
        console.log(x);
        // const multipolo3_ = document.getElementById("s").innerHTML = "Buzz";
        
        
    }else if(numero % 5 == 0  ){
        console.log(numero);
        // const multipolo3_ = document.getElementById("d").innerHTML = "Fizz";

    }else{
            

    }
}