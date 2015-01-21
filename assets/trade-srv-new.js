function validateEmail(email) { 
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
var params = [];
var query = location.search.substr(1); 
var A = query.split("&");
var qwe;
for (var j=0; j<A.length; j++){ qwe = A[j].split("="); params[qwe[0]] = qwe[1]; }

$(document).ready(function() {
  // var phonemask = "+7 (999) 999-99-99"
  // $("#phone").mask(phonemask);
  // $("#phone1").mask(phonemask);
  // $("#phone2").mask(phonemask);

  // function send_data(form){
  //   data = $(form).serializeArray();
    
  //   // if ($(name).val().length==0) { alert("Пожалуйста, введите своё имя"); return;}
  //   // if ($(phone).val().length==0) { alert("Пожалуйста, введите свой номер телефона"); return;}
  //   // if ($(email).val().length==0) { alert("Пожалуйста, введите свой адрес электронной почты"); return;}
  //   // if (!validateEmail($(email).val())) { alert("Пожалуйста, введите корректный адрес электронной почты"); return;}
    
  //   jsonData = { name: $(data)[0].value, email: $(data)[2].value, phone: $(data)[1].value };
  //   $.ajax({
  //     type: "POST",
  //     dataType: 'json',
  //     url: "ajax-proxy",
  //     data: jsonData
  //   })
  //   .done(function( msg ) {
  //     console.log(msg);
  //   });
  // }
  
  // $("form").on('submit', function(){
  //   send_data(this);
  // });
});