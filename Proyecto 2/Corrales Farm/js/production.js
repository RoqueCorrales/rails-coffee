var PRODUCTION = PRODUCTION ||{

    
    crearProduction: function () {
      $.ajax({
          
        url: 'http://localhost:3000/productions',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify( {production:{user_id:$('#id_user').val(),date:$('#date').val(),farmer_id:$('#id_farmer').val(),semana:$('#week').val(),cajuelas:$('#cajuelas').val()}} ),
        success: function(data){
          alert( 'Production registrado con exito');
          $('#formRegister').trigger("reset"); 
          
  
        },
        error: function(){
          alert('Problema al registrar Production');
        }
      });
    },

    

    back: function(){
      window.location.replace("property.html");
    },


    renderProductionTable: function(listOfProduction) {
        listOfProduction.forEach(function(element) {
      
        var row = "<tr>";
        row += "<td>"+element.user_id+"</td>";
        row += "<td>"+element.farmer_id+"</td>";
        row += "<td>"+element.semana+"</td>";
        row += "<td>"+element.date+"</td>";
        row += "<td>"+element.cajuelas+"</td>";
        
        row += "<tr/>";
        $("#ProductionTable").append(row);
      });
    },
    getProduction:function() {
      $.ajax({
        method: "GET",
        url: "http://localhost:3000/productions"
      }).done(function( response ) {
        
        response.forEach(function(element) {
      console.log(element);
      var row = "<tr>";
      row += "<td>"+element.user_id+"</td>";
        row += "<td>"+element.farmer_id+"</td>";
        row += "<td>"+element.semana+"</td>";
        row += "<td>"+element.date+"</td>";
        row += "<td>"+element.cajuelas+"</td>";
          
          
          row += "<td>"+"<button type='button'  onclick='PRODUCTION.edit("+element.id+")'id='editbtn' value='element.id' class='btn btn-default'>Edit</button>"+"</td>";
          row += "<td>"+"<button type='button'  onclick='PRODUCTION.delete("+element.id+")' id='deletebtn' value='element.id' class='btn btn-default'>Delete</button>"+"</td>";
          row += "<tr/>";
         
          $("#ProductionTable").append(row);
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