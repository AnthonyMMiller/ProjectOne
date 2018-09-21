// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("#contact-form").validate({
    rules: {
      name: "required",
      phone: {matches:"[0-9]+",minlength:10, maxlength:10},
      Occasion: "required",
      date:{
        required:true,
        date:true,
      },
      message: {
        required: true,
      }
    },
    // Specify validation error messages
    messages: {
      name: "Please enter a name",
      phone: "Please enter a valid phone number",
      Occcasion: "Please enter an occasion",
      Message:"Please enter a message",
      
      
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});

$(document).ready(function() {
  //Real-time Validation -->
    //Name can't be blank-->
    $('#name').on('input', function() {
      var input=$(this);
      var is_name=input.val();
      if(is_name){input.removeClass("invalid").addClass("valid");}
      else{input.removeClass("valid").addClass("invalid");}
    });
    
    //Email must be an email -->
    $('#phone').on('input', function() {
      var input=$(this);
      var re = [0-9];
      var is_phone=re.test(input.val());
      if(is_phone){input.removeClass("invalid").addClass("valid");}
      else{input.removeClass("valid").addClass("invalid");}
    });
    
    //Website must be a website -->
    $('#ocassion').on('input', function() {
      var input=$(this);
      var is_ocassion=input.val();
      if(is_ocassion){input.removeClass("invalid").addClass("valid");}
      else{input.removeClass("valid").addClass("invalid");}
    });
    
    ///Message can't be blank -->
    $('#message').keyup(function(event) {
      var input=$(this);
      var message=$(this).val();
      console.log(message);
      if(message){input.removeClass("invalid").addClass("valid");}
      else{input.removeClass("valid").addClass("invalid");}	
    });

  ///After Form Submitted Validation-->
  $("#contact_submit button").click(function(event){
    var form_data=$("#contact").serializeArray();
    var error_free=true;
    for (var input in form_data){
      var element=$("#contact_"+form_data[input]['name']);
      var valid=element.hasClass("valid");
      var error_element=$("span", element.parent());
      if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
      else{error_element.removeClass("error_show").addClass("error");}
    }
    if (!error_free){
      event.preventDefault(); 
    }
    else{
      alert('No errors: Form will be submitted');
    }
  });
  
  
  
});

$('#contact-form').submit(function(e) {
  e.preventDefault();
  var name = $('name').val();
  var phone = $('#phone').val();
  var ocassion = $('#occasion').val();
  var message = $('#message').val();

  $(".error").remove();

  if (name.length < 1) {
    $('#name').after('<span class="error">This field is required</span>');
  }
  if (phone.length < 1) {
    $('#last_name').after('<span class="error">This field is required</span>');
  }
  if (ocassion.length < 1) {
    $('#occasion').after('<span class="error">This field is required</span>');
    
  } else {
    var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
    var validEmail = regEx.test(email);
    if (!validEmail) {
      $('#email').after('<span class="error">Enter a valid email</span>');
    }
  }
  if (password.length < 8) {
    $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
  }
});

});