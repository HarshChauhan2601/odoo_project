
function pay_now(){
    // var name=jQuery('#name').val();
    // var contact=jQuery('#phone').val();
    var name = jQuery('#name').val();
    var email = jQuery('#email').val();
    var contact = jQuery('#phone').val();
    var amt= 500;
    
     jQuery.ajax({
           type:'post',
           url:'payment_process.php',
           data:"amt="+amt+"&name="+name,
           success:function(result){
               var options = {
                    "key": "rzp_test_KunzW563N8eKaJ", 
                    "amount": amt*100, 
                    "currency": "INR",
                    "name": "Diet Planner",
                    "description": "Matrimonial Profile Creation Fee",
                    "handler": function (response){
                       jQuery.ajax({
                           type:'post',
                           url:'payment_process.php',
                           data:"payment_id="+response.razorpay_payment_id,
                           success:function(result){
                            window.location.href="thank_you.html";
                           }
                       });
                    },
                    "prefill":{
                        "name": name, //your customer's name
                        "email": email,  
                        "contact": contact  
                    }
                };
                var rzp1 = new Razorpay(options);
                rzp1.open();
           }
       });
    
    
}
