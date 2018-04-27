var WORK = WORK ||{

    // CREAR FARMER
    crearWork: function () {
      $.ajax({
          
        url: 'http://localhost:3000/works',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify( {work:{name:$('#name').val(),description:$('#description').val(),number_of_employees:$('#number_of_employees').val()}} ),
        success: function(data){
          alert( 'Work registrado con exito');
          $('#formRegister').trigger("reset"); 
          
  
        },
        error: function(){
          alert('Problema al registrar Work');
        }
      });
    },

    

    back: function(){
      window.location.replace("indexWork.html");
    },


    renderWorksTable: function(listOfWorks) {
      listOfWorks.forEach(function(element) {
      
        var row = "<tr>";
        row += "<td>"+element.name+"</td>";
        row += "<td>"+element.description+"</td>";
        row += "<td>"+element.number_of_employees+"</td>";
        
        row += "<tr/>";
        $("#WorkTable").append(row);
      });
    },
    getWorks:function() {
      $.ajax({
        method: "GET",
        url: "http://localhost:3000/works"
      }).done(function( response ) {
        
        response.forEach(function(element) {
      console.log(element);
          var row = "<tr>";
          row += "<td>"+element.name+"</td>";
          row += "<td>"+element.description+"</td>";
          row += "<td>"+element.number_of_employees+"</td>";
          
          
          row += "<td>"+"<button type='button'  onclick='USER.edit("+element.id+")'id='editbtn' value='element.id' class='btn btn-default'>Edit</button>"+"</td>";
          row += "<td>"+"<button type='button'  onclick='USER.delete("+element.id+")' id='deletebtn' value='element.id' class='btn btn-default'>Delete</button>"+"</td>";
          row += "<tr/>";
         
          $("#WorkTable").append(row);
        });
         
      }).fail(function (error){
       
        alert('error');
      });
    },

    getWorksCombo:function() {
      $.ajax({
        method: "GET",
        url: "http://localhost:3000/works"
      }).done(function( response ) {
        
        response.forEach(function(element) {
      console.log(element);
          var option = document.createElement("option"); //Creas el elemento opción
        $(option).html(element.name); //Escribes en él el nombre de la provincia
        
        $(option).val(element.id);
        console.log($(option).val());
        $(option).appendTo("#seleccionWorks"); //Lo metes en el select con id provincias
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