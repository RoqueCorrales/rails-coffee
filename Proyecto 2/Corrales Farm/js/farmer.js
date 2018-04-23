var FARMER = FARMER ||{

    // CREAR FARMER
    crearFarmer: function () {
      $.ajax({
          
        url: 'http://localhost:3000/farmers',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify( {farmer:{name:$('#name').val(),address: $('#address').val(),hectareas:$('#hectareas').val(),description:$('#description').val()}} ),
        success: function(data){
          alert( 'Farmer registrada con exito');
          $('#formRegister').trigger("reset"); 
          
  
        },
        error: function(){
          alert('Problema al registrar Farmer');
        }
      });
    },

    

    back: function(){
      window.location.replace("property.html");
    },
    ocultar:  function(){
      document.getElementById('btnLogin').style.display = 'none';
    },

    renderFarmerTable: function(listOfFarmers) {
      listOfFarmers.forEach(function(element) {
      
        var row = "<tr>";
        row += "<td>"+element.name+"</td>";
        row += "<td>"+element.address+"</td>";
        row += "<td>"+element.hectareas+"</td>";
        row += "<td>"+element.description+"</td>";
        
        row += "<tr/>";
        $("#FarmerTable").append(row);
      });
    },
    getFarmers:function() {
      $.ajax({
        method: "GET",
        url: "http://localhost:3000/farmers"
      }).done(function( response ) {
        
        response.forEach(function(element) {
      console.log(element);
          var row = "<tr>";
          row += "<td>"+element.name+"</td>";
          row += "<td>"+element.address+"</td>";
          row += "<td>"+element.hectareas+"</td>";
          row += "<td>"+element.description+"</td>";
          
          row += "<td>"+"<button type='button'  onclick='USER.edit("+element.id+")'id='editbtn' value='element.id' class='btn btn-default'>Edit</button>"+"</td>";
          row += "<td>"+"<button type='button'  onclick='USER.delete("+element.id+")' id='deletebtn' value='element.id' class='btn btn-default'>Delete</button>"+"</td>";
          row += "<tr/>";
         
          $("#FarmerTable").append(row);
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
    },

    
    getFarmersCombo:function() {
      $.ajax({
        method: "GET",
        url: "http://localhost:3000/farmers"
      }).done(function( response ) {
        
        response.forEach(function(element) {
      console.log(element);
          var option = document.createElement("option"); //Creas el elemento opción
        $(option).html(element.name); //Escribes en él el nombre de la provincia
        
        $(option).val(element.id);
        console.log($(option).val());
        $(option).appendTo("#seleccion"); //Lo metes en el select con id provincias
        });
         
      }).fail(function (error){
       
        alert('error');
      });
    }

    
  
  }