
for(x=0; x<101; x++){
    const numero = x;
    if(numero % 3 == 0 && numero % 5 == 0  ){
        console.log(numero + " FizzBuzz");
        let myElm = document.createElement("div35");	

        myElm.innerText = (numero + " FizzBuzz");		
        myElm.style.color = 'red';		                       

        document.body.appendChild(myElm);	                    
        
    }else if (numero % 3 == 0){
        console.log(numero + "fizz");
        
        let myElm = document.createElement("div35");	

        myElm.innerText = (numero + " Fizz");		
        myElm.style.color = 'green';		                       

        document.body.appendChild(myElm);
        
        
    }else if(numero % 5 == 0  ){
        console.log(numero + "Buzz");
        let myElm = document.createElement("div35");	

        myElm.innerText = (numero + " Buzz");		
        myElm.style.color = 'red';		                       

        document.body.appendChild(myElm);

    }else
    console.log(numero);
    let myElm = document.createElement("div35");	

        myElm.innerText = numero;		
        myElm.style.color = 'black';		                       

        document.body.appendChild(myElm);
}