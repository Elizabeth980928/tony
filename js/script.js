(function($) {
	
	"use strict";
	
	
	//Add OnepageNav / Sidebar
	function sideNav() {
		if($('.menu-box .sticky-menu').length){
			$('.menu-box .sticky-menu ul').onePageNav();
		}
	}
	
	//Add Scroll Bar To Sidebar
	if($('#sidebar .menu-box').length){
		$("#sidebar .menu-box").mCustomScrollbar({
			axis:"y",
			autoExpandScrollbar:false
		});
	}
	
	//animate to top on Page Refresh
    $('html, body').animate({
	   scrollTop: $('html, body').offset().top
	}, 1000);


/* ==========================================================================
   When document is ready, do
   ========================================================================== */
   
	$(document).on('ready', function() {
		sideNav();
	});


})(window.jQuery);


// contact us  

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    var formData = new FormData(this); // Get form data

    fetch('/your-backend-endpoint', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        const form = document.getElementById('contactForm');
        if (data.success) {
            // Add success message
            form.insertAdjacentHTML('beforeend', '<div class="success-message">Your email was sent successfully!</div>');
        } else {
            // Add error message
            form.insertAdjacentHTML('beforeend', '<div class="error-message">There was an error sending your email. Please try again later.</div>');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        const form = document.getElementById('contactForm');
        form.insertAdjacentHTML('beforeend', '<div class="error-message">There was a problem with the submission. Please try again later.</div>');
    });
});


// pagination

   document.addEventListener("DOMContentLoaded", function () {
      const itemsPerPage = 4;
      const teamItems = document.querySelectorAll("#teamContainer .col-12");
      const totalItems = teamItems.length;
      const totalPages = Math.ceil(totalItems / itemsPerPage);
      let currentPage = 1;

      function showPage(page) {
         teamItems.forEach((item, index) => {
            item.style.display = (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) ? "block" : "none";
         });

         // Update active class
         document.querySelectorAll('.page-link').forEach((link, idx) => {
            link.classList.toggle('active', idx + 1 === page);
         });
      }

      // Set up click events for page numbers
      document.querySelectorAll('.page-link').forEach((link, index) => {
         link.addEventListener("click", function (e) {
            e.preventDefault();
            currentPage = index + 1;
            showPage(currentPage);
         });
      });

      // Prev/Next buttons
      document.getElementById("prevPage").addEventListener("click", function () {
         if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
         }
      });

      document.getElementById("nextPage").addEventListener("click", function () {
         if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
         }
      });

      // Initialize
      showPage(currentPage);
   });

