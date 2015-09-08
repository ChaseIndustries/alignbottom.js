/* Copyright (c) 2015 Jordan Chase (http://chaseu.com)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 1.0.0
 *
 * Requires: jQuery 1.4+
 */


(function($) {
  
  $.fn.alignBottom = function() {
    
    return this.each(function () {
      var push      = document.createElement('div'),
      wrapper       = document.createElement('div'),
      offsetParent  = $(this).offsetParent(),
      h             = $(this).outerHeight(),
      paddingBottom = ( offsetParent.css('padding-bottom') ? offsetParent.css('padding-bottom') : 0 );
      
      // Make the push element the same height as the element it replaces
      push.setAttribute('style', 'height:' + h + 'px;display:block');
      
      // Make the wrapper element have the same properties as the aligned element as to not screw 
      // with any styles already applied to the element
      wrapper.setAttribute('style', 'position:absolute; left:0; width:100%; bottom:' + paddingBottom);
      
      // Append the push element to the offset parent
      offsetParent.append(push);
      
      // Wrap the original element in the absolutely positioned container
      $(this).wrap(wrapper);
    });
  }
  
})(jQuery);