;(function($){
  Drupal.behaviors.nomobile = {
    attach: function(context) {
      $(context).find('noscript.nomobile')
      .each(function() {
        var $this = $(this),
            $wrap = $this.parent(),
            isVis = $wrap.is(':visible');
        if (isVis) {
          $this.after($this.text());
        }
      });
    }
  };
})(jQuery);