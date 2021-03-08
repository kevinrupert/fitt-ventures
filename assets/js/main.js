$('.animate-fade, .animate-fade-up, .animate-scale, .animate-width').waypoint(function() {
  $(this.element).addClass('animated');
}, {offset: '100%' });

$('.animation-group').waypoint(function() {
  $(this.element).find('.animate-fade, .animate-fade-up, .animate-scale, .animate-width').addClass('animated');
}, {offset: '100%' });