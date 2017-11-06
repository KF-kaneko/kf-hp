/**
 * common.js
 *
 *  version --- 1.0
 *  updated --- 2017/6/16
 */

/* !drawer
 ---------------------------------------------------------------- */
$(document).ready(function() {
  $(".drawer").drawer();
});

/* sticky menu */
$(document).ready(function() {
  var $win = $(window),
      $header = $('nav'),
      animationClass = 'isAnimation';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 100 ) {
      $header.addClass(animationClass);
    } else {
      $header.removeClass(animationClass);
    }
  });
});

/* !page anchor
 ---------------------------------------------------------------- */
$(document).ready(function($) {
var headerHight = 100; //ヘッダの高さ
/*ページ内＃リンク*/
        $('a[href^="#"]').click(function(){
                var href= $(this).attr("href");
                var target = $(href == "#" || href == "" ? 'body' : href);
                var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
                $("html, body").animate({scrollTop:position}, 550, "swing");
                return false;
        });
 /*ページ外＃リンク*/
        var url = $(location).attr('href');
        if (url.indexOf("?id=") == -1) {
                // スムーズスクロール以外の処理（必要なら）
        }else{
                // スムーズスクロールの処理
                var url_sp = url.split("?id=");
                var hash     = '#' + url_sp[url_sp.length - 1];
                var target2        = $(hash);
                var position2        = target2.offset().top-headerHight;
                $("html, body").animate({scrollTop:position2}, 550, "swing");
        }
});


