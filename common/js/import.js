/*
  遅延読み込みスクリプト
*/
(function(){
  var import_src = {
    "jquery": "jquery-1.11.3.min.js",
    "common": "common.js"
  },
  base_path = "/campaign/common/js/";

  function do_import() {
    var i;
    for ( i in import_src ) {
      document.write('<script type="text/javascript" src="'+ base_path + import_src[i] +'"></script>');
    }
  }

  do_import();
})();
