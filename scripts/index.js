function validate(){
    
    $( "#target" ).submit(function( event ) {
        let firstname = $("#firstName").val();
        let lastname = $("#lastName").val();
        let phoneNumber = $('#phoneNumber').val();
        let email = $('#email').val();
        let bvnNumber =  $('#bvn').val();
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
        if(bvnNumber.length < 12){
            $('#bvn').after('<span class="error">BVN number must be eleven digits </span>')
        }
    
        
        event.preventDefault();


      });    
}

validate()