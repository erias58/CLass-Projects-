
        //Load the DOM contents 
document.addEventListener('DOMContentLoaded',function(){
    //declare constants 
    const Quantity = document.getElementById('quantity');
    const Price = document.getElementById('price');
    const Tip = document.getElementById('tip');
    const Total = document.getElementById('total');
    const totalDiv = document.querySelector('.Total');
    
    //collect the inputs on click and parsefloat if necessary
        document.getElementById('calculate').addEventListener('click',function(){
            const QuantityValue = parseFloat(Quantity.value);
            const PriceValue = parseFloat(Price.value);
            const TipValue = parseFloat(Tip.value);
            
                //check if the inputs are populated with numbers (integers).
                if(isNaN(Quantity.value) || isNaN(Price.value) || isNaN(Tip.value)){
                    alert("Please Enter Valid Order Details");
                //check if the input boxes are not empty    
                }else if(Quantity.value === ''|| Price.value === '' || Tip.value === ''){
                    alert("Please Enter the order details");
                }else{
                    //calculate the total
                    const subTotal = Quantity.value * Price.value;
                    totalAmount = subTotal+(subTotal*(Tip.value/100));
                    
                    //update the total in put
                    Total.value = totalAmount.Fixed(2);
                    
                    
                    //display the calculated Amount
                    totalDiv.classList.add('visible');
                };
            
            
        });
});