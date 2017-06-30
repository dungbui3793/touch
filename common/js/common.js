/*
  共通パーツjs
*/
(function(w, $){
  var $window = $(window);

  // jQueryプラグインの定義や即時実行しなければならないものは
  // ここに書く
})(window, jQuery);


/* ダイナミックローダー */
var DynamicLoader;
(function(){
  DynamicLoader = function() {};

  var  prop = DynamicLoader.prototype;
  $.extend(prop, {
    /* includeするファイルが格納されている絶対パス */
    base_path: "/campaign/common/inc/",
    /*
      requires: ダイナミックロードの対象となるファイル一覧
          file: 読み込み対象のファイル名
        target: 読み込んだHTMLをappendする対象のCSSセレクタ
     */
    requires: {
      footer: {
        file: "_footer.html",
        target: "footer.footer",
        callback: function(){
          rewrite_copyright_year();
        }
      },
      navi: {
        file: "_navi.html",
        target: ".globalnavi",
        callback: function(){
        }
      },
    },
    load: function() {
      var i, res = this.requires;
      $.when(this._load(res.navi), this._load(res.footer))
        .done(this.done)
        .fail(this.fail);
    },
    _load: function(res) {
      var t = this;
      return $.ajax({
        url: this.base_path + res.file,
        success: function(html, state, xhr) {
          $(res.target).html(html);
          if ($.isFunction(res.callback)) {
            res.callback();
          }
        }
      });
    },
    // 読み込みの成功時のコールバック
    done: function() {
    },
    // 読み込みの失敗時のコールバック
    fail: function(error) {
      if( console && console.log ) {
        console.log(error);
      }
    }
  });
})();


// コピーライトの年号を現在の年号に書き換える
function rewrite_copyright_year() {
  $(".copyright__year").text(new Date().getFullYear());
}

$(function(){
  // DOM ContentLoadedイベント後の処理はこちらに書く

  // dynamic-loader.jsで定義している非同期共通パーツ読み込みスクリプト
  var loader = new DynamicLoader();
  loader.load();
});
