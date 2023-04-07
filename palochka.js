function(settings){
  var instance = settings.oInstance;
  var table = instance.api();
  var $inputs = instance.parent().find('.form-group input');
  $inputs.off('keyup search input').on('keyup', function(){
    var index = 1 + $inputs.index(this);
    if(index === 2 || index === 4){ // id of the column to filter; CHANGE if needed
    	var keyword = $(this).val().replaceAll('1','Ӏ').replaceAll('I','Ӏ');
    } else {
	var keyword = $(this).val();
    }
    table.column(index).search(keyword, true, false).draw();
  });
}
