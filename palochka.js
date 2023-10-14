function(settings){

  
  var instance = settings.oInstance;
  var table = instance.api();
  var $inputs = instance.parent().find('.form-group input');
  $inputs.off('keyup search input').on('keyup', function(){
    var index = $inputs.index(this); // I turned off rownames; column index starts from 0; if rownames are ON add +1
    if(index === 1 || index === 3){ // id of the column to filter; CHANGE if needed
    	var keyword = $(this).val()
    	.replaceAll('I','Ӏ');

    } else {
	var keyword = $(this).val();
    }
    
    
    table.column(index).search(keyword, true, false).draw();
  });
}
