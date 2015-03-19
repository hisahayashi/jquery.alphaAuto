/**
 * jquery.alphaAuto
 * @author hisayoshi hayashi: HYS INC.
 * @license MIT license
 *
 * @param opacity {int}: 0 or 1
 * @param duration {int}: millisecond
 * @param callback {function}: function
 */

;(function($) {
  $.fn.alphaAuto = function(opacity, duration, callback) {

    var options = {};
    var d = {
      opacity: 0,
      duration: 0,
      callback: null
    };

    var o = $.extend(d, options);
    o.opacity = (opacity != undefined) ? opacity : o.opacity;
    o.duration = (duration != undefined) ? duration : o.duration;
    o.callback = ($.isFunction(callback)) ? callback : o.callback;

    var $that = $(this);

    $that.each(function(i) {
      var $t = $(this);
      if (o.opacity <= 0) {
        $t.animate({ opacity: 0 , filter: 'alpha( opacity=0 );' }, o.duration, 'linear', function() {
          $t.css({ display: 'none' });
          if ($.isFunction(o.callback)) o.callback();
        });
      } else {
        $t.css({ display: 'block' });
        $t.animate({ opacity: o.opacity , filter: 'alpha( opacity=' + o.opacity + ' );' }, o.duration, 'linear', function() {
          if ($.isFunction(o.callback)) o.callback();
        });
      }
    });

    return $that;
  };
})(jQuery);
