
        //Load the DOM contents 
document.addEventListener('DOMContentLoaded',function(){
    //declare constants 
    const Quantity = document.getElementById('quantity');
    const Price = document.getElementById('price');
    const Tip = document.getElementById('tip');
    const Total = document.getElementById('total');
    const TotalDiv = document.querySelector('.Total');
    
    //create the onclick function
        document.getElementById('calculate').addEventListener('click',function(){
                //stop the form from reloading after the calculate button is clicked 
                event.preventDefault();
                //parseFloat the in[uted strings to integers(values).
            const QuantityValue = parseFloat(Quantity.value);
            const PriceValue = parseFloat(Price.value);
            const TipValue = parseFloat(Tip.value);
            
                //check if the inputs are populated with numbers (integers).
                if(isNaN(QuantityValue) || isNaN(PriceValue) || isNaN(TipValue)){
                    alert("Please Enter Valid Order Details");
                //check if the input boxes are not empty    
                }else if(Quantity.value === ''|| Price.value === '' || Tip.value === ''){
                    alert("Please Enter the order details");
                }else{
                    //calculate the total
                    const subTotal = Quantity.value * Price.value;
                    totalAmount = subTotal+(subTotal*(Tip.value/100));
                    
                    //update the total in put
                    Total.value = totalAmount.toFixed(0);
                    
                    
                    //display the calculated Amount
                    TotalDiv.classList.add('visible');
                    // FORMDiv.classList.add('hidden');
                }
            
                //Receipt button.
                document.getElementById('Receipt').addEventListener('click',function(){
                alert('SORRY NO PRINTER CONNECTED');
                });
                
                //New order button
                document.getElementById('AnotherOrder').addEventListener('click',function(){
                    //initialize the form id 
                    const OrderForm = document.getElementById('ORDER');
                    if(OrderForm){
                        OrderForm.reset();
                        TotalDiv.classList.remove('visible');
                    
                    }
                    //document.getElementById('ORDER').reset();
                });
        });
    });
