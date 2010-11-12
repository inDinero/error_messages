if(typeof(Effect) != 'undefined' && !window.location.search.match(/disable_error_animation/))
  Event.observe(document, 'dom:loaded', function() {
    $w('notice info alert message success').each(function(flash_type) {
      $$('.flash-'+flash_type).each(function(flash_message) {
        Effect.BlindUp(flash_message, {delay: 3});
        Effect.Fade(flash_message, {delay: 3});
      });
    });
  });
