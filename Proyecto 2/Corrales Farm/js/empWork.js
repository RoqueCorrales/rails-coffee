var EMPWORK = EMPWORK ||{

    
    crearEmpWork: function () {
      $.ajax({
          
        url: 'http://localhost:3000/empl_works',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify( {empl_work:{user_id:$('#id_user').val(),work_id:$('#id_work').val(),start_date:$('#dateStart').val(),end_date:$('#dateEnd').val(),farmer_id:$('#id_farmer').val()}} ),
        success: function(data){
          alert( 'Empl_work registrado con exito');
          $('#formRegister').trigger("reset"); 
          
  
        },
        error: function(){
          alert('Problema al registrar Empl_work');
        }
      });
    },

    

    back: function(){
      window.location.replace("property.html");
    },


    renderEmpWorkTable: function(listOfEmp) {
        listOfEmp.forEach(function(element) {
      
        var row = "<tr>";
        row += "<td>"+element.user_id+"</td>";
        row += "<td>"+element.farmer_id+"</td>";
        row += "<td>"+element.work_id+"</td>";
        row += "<td>"+element.start_date+"</td>";
        row += "<td>"+element.end_date+"</td>";
        
        row += "<tr/>";
        $("#EmpWorkTable").append(row);
      });
    },
    getEMP:function() {
      $.ajax({
        method: "GET",
        url: "http://localhost:3000/empl_works"
      }).done(function( response ) {
        
        response.forEach(function(element) {
      console.log(element);
      var row = "<tr>";
      row += "<td>"+element.user_id+"</td>";
      row += "<td>"+element.farmer_id+"</td>";
      row += "<td>"+element.work_id+"</td>";
      row += "<td>"+element.start_date+"</td>";
      row += "<td>"+element.end_date+"</td>";
          
          
          row += "<td>"+"<button type='button'  onclick='EMPWORK.edit("+element.id+")'id='editbtn' value='element.id' class='btn btn-default'>Edit</button>"+"</td>";
          row += "<td>"+"<button type='button'  onclick='EMPWORK.delete("+element.id+")' id='deletebtn' value='element.id' class='btn btn-default'>Delete</button>"+"</td>";
          row += "<tr/>";
         
          $("#EmpWorkTable").append(row);
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