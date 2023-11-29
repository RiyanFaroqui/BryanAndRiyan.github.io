 AOS.init({
  duration: 800,
  easing: 'slide-up',
  once: true
 });

(function($) {

	'use strict';

	// bootstrap dropdown hover

  // loader
  var loader = function() {
    setTimeout(function() { 
      if($('#loader').length > 0) {
        $('#loader').removeClass('show');
      }
    }, 1);
  };
  loader();

	
	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

  $('.navbar .dropdown > a').click(function(){
    location.href = this.href;
  });


	// home slider
	$('.home-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1000,
    nav:true,
    autoplayHoverPause: true,
    items: 1,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:true
      }
    }
	});

  $('.home-slider-loop-false').owlCarousel({
    loop:false,
    autoplay: true,
    margin:0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    autoplayHoverPause: true,
    items: 1,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:true
      }
    }
  });

	// owl carousel
	var majorCarousel = $('.js-carousel-1');
	majorCarousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1000,
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        nav:true,
        loop:false
      }
  	}
	});

	// owl carousel
	var major2Carousel = $('.js-carousel-2');
	major2Carousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 4,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:3,
        nav:false
      },
      1000:{
        items:4,
        nav:true,
        loop:false
      }
  	}
	});


  $('.centernonloop').owlCarousel({
    center: true,
    items: 1,
    loop: false,
    margin: 30,
    smartSpeed: 1000,
    dots: true,
    responsive:{
      600:{
        items: 2
      },
      900:{
        items: 3
      }
    }
  });

  $('.centernonloop2').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    smartSpeed: 1000,
    dots: true,
  });



	var contentWayPoint = function() {
		var i = 0;
		$('.element-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('element-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .element-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn element-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft element-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight element-animated');
							} else {
								el.addClass('fadeInUp element-animated');
							}
							el.removeClass('item-animate');
						},  k * 100);
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();



})(jQuery);

//start of the menu section
const menuSection = document.querySelector('#menuSection');
const container = document.createElement('div');
container.classList.add('container');
menuSection.append(container);


//creates a table for picked items
const pickedItemsTable = document.createElement('table');
pickedItemsTable.style.border = '1';

pickedItemsTable.classList.add('col-md-6');


// headers
const headerRow = document.createElement('tr');
const header1 = document.createElement('th');
header1.textContent = 'Item';
const header2 = document.createElement('th');
header2.textContent = 'Price';
headerRow.append(header1);
headerRow.append(header2);
pickedItemsTable.append(headerRow);

container.append(pickedItemsTable);

const pickedMenuTable = [];
var total = 0;

//table update function, deletes and adds rows and updates total
const updateTable = () => {
    // Clear the existing rows
    while (pickedItemsTable.rows.length > 1) {
        pickedItemsTable.deleteRow(1);
    }

    // add data to table from pickedMenuTable
    pickedMenuTable.forEach(element => {
        const row = pickedItemsTable.insertRow(-1);
        const cell1 = row.insertCell(0);
        cell1.textContent = element[0]; // Item
        const cell2 = row.insertCell(1);
        cell2.textContent = `$${element[1]}`; // Price

        // remove buttons
        const buttonCell = row.insertCell(2);
        const removeButton = document.createElement('button');
        removeButton.classList.add('btn', 'btn-primary', 'btn-sm');
        removeButton.type = 'button';
        removeButton.innerText = 'Remove';
        buttonCell.appendChild(removeButton);

        // click event listener to the remove button
        removeButton.addEventListener('click', function() {
            // removal 
            const indexToRemove = pickedMenuTable.findIndex(item => item[0] === element[0]);
            if (indexToRemove !== -1) {
                pickedMenuTable.splice(indexToRemove, 1);
                total -= element[1];
                updateTable();
            }
        });
    });

    // display total in a separate row
    const totalRow = pickedItemsTable.insertRow(-1);
    const totalCell = totalRow.insertCell(0);
    totalCell.textContent = 'Total:';
    const totalValueCell = totalRow.insertCell(1);
    totalValueCell.textContent = `$${total}`;

    // add a row for the checkout button
    const checkoutRow = pickedItemsTable.insertRow(-1);
    const checkoutCell = checkoutRow.insertCell(0);
    checkoutCell.colSpan = 3; // Set the colspan to span all three columns
    const checkoutButton = document.createElement('button');
    checkoutButton.classList.add('btn', 'btn-success', 'btn-lg');
    checkoutButton.type = 'button';
    checkoutButton.innerText = 'Checkout';
    checkoutCell.append(checkoutButton);
    // Add click event listener to the checkout button
    checkoutButton.addEventListener('click', function() {
    // Redirect to checkout.html
    window.location.href = 'checkout.html';
    });

    
};

//menu page with clickable menu options
const parent = document.querySelector('#menuBtns'); //picks parent element
  parent.addEventListener('click', function(e){ //eventlistner added to H3 node in parent element
    
    if (e.target && e.target.nodeName == "INPUT"){
    console.log('target ID',e.target) //debugs for target
      //list of menu items
      const menuItemTable = [["menuItem1", 25],["menuItem2", 46],["menuItem3", 12],
      ["menuItem4", 52],["menuItem5", 16],
      ["menuItem6", 37],["menuItem7", 24],["menuItem8", 29]];

      
      menuItemTable.forEach(element => {
        if (e.target.id == element[0]){
            pickedMenuTable.push([e.target.previousElementSibling.previousElementSibling.previousElementSibling.innerText,element[1]]);
            console.log('Matched ID:', element[0]);
        }
      });
    console.log('picked',pickedMenuTable);//debugs for picked menu

      pickedMenuTable.forEach(element =>{
        total += element[1];
      })
    console.log('total', total);//debugs for total

    // Confirmation of item being added to list
const alertPlaceholder = document.body; // Append the alert to the body
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
  <div class="alert alert-${type} alert-dismissible" role="alert">
      <div>${message}</div>
  </div>`;

  // Apply styles for a fixed position at the bottom of the viewport
  wrapper.style.position = 'fixed';
  wrapper.style.bottom = '0';
  wrapper.style.left = '0';
  wrapper.style.right = '0';
  wrapper.style.zIndex = '9999'; // Set a high z-index to ensure it appears above everything

  document.body.appendChild(wrapper);

  // Adds a timeout to remove the alert after a certain period
  setTimeout(() => {
      wrapper.remove();
  }, 3000); // Remove the alert after 3 seconds
};

// Click event listener where an item is added to the cart
const alertMessage = `${e.target.previousElementSibling.previousElementSibling.previousElementSibling.innerText} added to order!`;
appendAlert(alertMessage, 'success');

    // Reset total
    total = 0;

    pickedMenuTable.forEach(element => {
        total += element[1];
    });

    console.log('total', total); // debugs for total

    updateTable();
}
});