function validate(){
    
    $( "#target" ).submit(function( event ) {
        let firstname = $("#firstName").val();
        let lastname = $("#lastName").val();
        let phoneNumber = $('#phoneNumber').val();
        let email = $('#email').val();
        let bvnNumber =  $('#bvn').val();
        let key = "FLWSECK-c28b245590714cb8031ebce8951c8d0c-X";
        let apiUrl = `https://ravesandboxapi.flutterwave.com/v2/kyc/bvn/${bvnNumber}?seckey=${key}`

        $(".error").remove();
 

        if(!firstname || !lastname){
            $("#firstName").after('<span class="error">This field is required</span>');
        }
        if(!phoneNumber){
            $("#phoneNumber").after('<span class="error">This field is required</span>');
        }
        if(!email){
            $("#email").after('<span class="error">This field is required</span>');
        }
        if(bvnNumber.length < 11){
            $('#bvn').after('<span class="error">BVN number must be eleven digits </span>')
        }
    
        
        event.preventDefault();

        $.getJSON(`https://ravesandboxapi.flutterwave.com/v2/kyc/bvn/${bvnNumber}?seckey=${key}`, function(jd) {
            if(jd.status === 'success'){
                console.log('Yes')
            }
         });

      });    



}

validate()