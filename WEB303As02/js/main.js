// WEB303 Assignment 2


$(document).ready(function() 
{
    // Function to load content using AJAX
    function loadContent(file) {
      $.ajax({
        url: file,
        type: 'GET',
        dataType: 'html',
        success: function(data) {
          // Animate the content
          $('#content').html(data).slideDown(); // You can choose the animation effect you prefer
        },
        error: function() {
          alert('Error loading content');
        }
      });
    }
  
    // Click event handler for menu links
    $('.menu-link').on('click', function() {
      $('#content').slideUp(function() {
        loadContent($(this).data('file'));
      });
    });
});