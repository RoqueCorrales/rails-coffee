var USER = USER ||{
    // login user
    
    login: function () {
    

      $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/sessions',
        
        contentType: 'application/json',
        data: JSON.stringify( {username:$('#username').val(),password: $('#password').val(),} ),
        success: function(data){
          alert( 'ok');
          localStorage.setItem("token", data);
          
          window.location.replace("index.html");
          
        },
        error: function(){
          
          alert("error");
        }
      });
    },
  
    // CREAR USUARIO
    crearUsuario: function () {
      $.ajax({
          
        url: 'http://localhost:3000/users',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify( {user:{username:$('#username').val(),password: $('#password').val(),name:$('#first_name').val(),lastname:$('#last_name').val(),
        phone:$('#phone').val(),age:$('#age').val(),address:$('#address').val(),admin: $('#admin').prop('checked')}} ),
        success: function(data){
          alert( 'Usuario registrado con exito');
          $('#formRegister').trigger("reset"); 
          
  
        },
        error: function(){
          alert('error');
        }
      });
    },

    confirmation: function(){
      
      var pass1=$('#password').val();
       var pass2 = $('#password_confirmation').val();
      
       
      

        if(pass1==pass2){
         
           this.crearUsuario();
        }else{
            alert('password not match')
        }
        

    },

    back: function(){
      window.location.replace("indexuser.html");
    },
    ocultar:  function(){
      document.getElementById('btnLogin').style.display = 'none';
    },

    renderUserTable: function(listOfUsers) {
      listOfUsers.forEach(function(element) {
      
        var row = "<tr>";
        row += "<td>"+element.name+"</td>";
        row += "<td>"+element.lastname+"</td>";
        row += "<td>"+element.username+"</td>";
        row += "<td>"+element.age+"</td>";
        row += "<td>"+element.phone+"</td>";
        row += "<tr/>";
        $("#UserTable").append(row);
      });
    },
    getUsers:function() {
      $.ajax({
        method: "GET",
        url: "http://localhost:3000/users"
      }).done(function( response ) {
        
        response.forEach(function(element) {
      console.log(element);
          var row = "<tr>";
          row += "<td>"+element.name+"</td>";
          row += "<td>"+element.lastname+"</td>";
          row += "<td>"+element.username+"</td>";
          row += "<td>"+element.age+"</td>";
          row += "<td>"+element.phone+"</td>";
          row += "<td>"+"<button type='button'  onclick='USER.edit("+element.id+")'id='editbtn' value='element.id' class='btn btn-default'>Edit</button>"+"</td>";
          row += "<td>"+"<button type='button'  onclick='USER.delete("+element.id+")' id='deletebtn' value='element.id' class='btn btn-default'>Delete</button>"+"</td>";
          row += "<tr/>";
         
          $("#userTable").append(row);
        });
         
      }).fail(function (error){
       
        alert('error');
      });
    },


    delete: function(id){
  console.log(getElementById('editbtn'));
    },
    edit: function(id){
      alert(id);
      console.log(getElementById('deletebtn'));
    }

    
  
  }