var BLIGHT = BLIGHT ||{

    // CREAR FARMER
    crearBlight: function () {
      $.ajax({
          
        url: 'http://localhost:3000/blights',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify( {blight:{treatment:$('#treatment').val(),description:$('#description').val(),date:$('#date').val()}} ),
        success: function(data){
          alert( 'Blight registrado con exito');
          $('#formRegister').trigger("reset"); 
          
  
        },
        error: function(){
          alert('Problema al registrar Blight');
        }
      });
    },

    

    back: function(){
      window.location.replace("property.html");
    },


    renderBlightTable: function(listOfBlights) {
        listOfBlights.forEach(function(element) {
      
        var row = "<tr>";
        row += "<td>"+element.treatment+"</td>";
        row += "<td>"+element.description+"</td>";
        row += "<td>"+element.farmer_id+"</td>";
        
        row += "<tr/>";
        $("#BlightTable").append(row);
      });
    },
    getBlights:function() {
      $.ajax({
        method: "GET",
        url: "http://localhost:3000/blights"
      }).done(function( response ) {
        
        response.forEach(function(element) {
      console.log(element);
          var row = "<tr>";
          row += "<td>"+element.treatment+"</td>";
          row += "<td>"+element.description+"</td>";
          row += "<td>"+element.farmer_id+"</td>";
          
          
          row += "<td>"+"<button type='button'  onclick='BLIGHT.edit("+element.id+")'id='editbtn' value='element.id' class='btn btn-default'>Edit</button>"+"</td>";
          row += "<td>"+"<button type='button'  onclick='BLIGHT.delete("+element.id+")' id='deletebtn' value='element.id' class='btn btn-default'>Delete</button>"+"</td>";
          row += "<tr/>";
         
          $("#BlightTable").append(row);
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