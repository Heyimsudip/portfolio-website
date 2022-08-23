/*
* Template Name: MyPortfolio
* Template URL: https://bootstrapmade.com/myportfolio-bootstrap-portfolio-website-template/
* License: https://bootstrapmade.com/license/
*/

(function ($) {
  "use strict";

  var burgerMenu = function() {
	  $('.burger').click(function(e) {
	  	$(window).scrollTop(0);
	    if(!$('.burger').hasClass('active'))
	      $('.burger').addClass('active');
	    else
	      $('.burger').removeClass('active');
	  });
  }
  burgerMenu();

  var siteIstotope = function() {
	  var $container = $('#portfolio-grid').isotope({
	    itemSelector : '.item',
	    isFitWidth: true
	  });

	  $(window).resize(function(){
	    $container.isotope({
	      columnWidth: '.col-sm-3'
	    });
	  });
	  
	  $container.isotope({ filter: '*' });

	  $('#filters').on( 'click', 'a', function(e) {
	  	e.preventDefault();
	    var filterValue = $(this).attr('data-filter');
	    $container.isotope({ filter: filterValue });
	    $('#filters a').removeClass('active');
	    $(this).addClass('active');
	  });
  }
  $(window).on('load', function () {
    siteIstotope();
  });


  var siteOwlCarousel = function() {
  	$('.testimonial-carousel').owlCarousel({
		  center: true,
	    items: 1,
	    loop: true,
	    margin: 0,
	    autoplay: true,
	    smartSpeed: 1000,
		});
  };
  siteOwlCarousel();


})(jQuery);

AOS.init({
	easing: 'ease',
	duration: 1000,
	once: true
});

// SCROLL BACK UP =======================================
function scrollUp() {
	const scrollUp = document.getElementById("scroll-up");

	if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
	else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// const gallery = document.querySelectorAll(".gallery .image")
//     previewBox = document.querySelector(".preview-box")
//     previewImg = previewBox.querySelector("img")
//     closeIcon = previewBox.querySelector(".icon")

//     window.onload = () => {
//       for (let i = 0; i < gallery.length; i++) {
// 		let newIndex = i;
//         gallery[i].onclick = () => {
//           console.log(i);
//           function preview() {
//             let selectedImgUrl = gallery[newIndex].querySelector("img").src;
// 			previewImg.src = selectedImgUrl;
//           }

// 		  const prevBtn = document.querySelector(".prev")
// 		  const nextBtn = document.querySelector(".next")
// 		  prevBtn.onclick = () => {
// 			newIndex--;
// 			if (newIndex == 0) {
// 				preview();
// 				prevBtn.style.display = "none"
// 			}else{
// 				preview();
// 			}
// 		  }
// 		  nextBtn.onclick = () => {
// 			newIndex++;
// 			if (newIndex >= gallery.length - 1) {
// 				preview();
// 				nextBtn.style.display = "none"
// 			}else{
// 				preview();
// 			}
// 		  }
		  
//           preview();
//           previewBox.classList.add("show")

//           closeIcon.onclick = () => {
// 			prevBtn.style.display = "block"
// 			nextBtn.style.display = "block"
//             previewBox.classList.remove("show")
//           }
//         }
//       }
//     }

const gallery  = document.querySelectorAll(".image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow");
window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; //passing total img length to totalImg variable
        let newIndex = i; //passing i value to newIndex variable
        let clickedImgIndex; //creating new variable
        
        gallery[i].onclick = () =>{
            clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
            function preview(){
                currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
                let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
                previewImg.src = imageURL; //passing user clicked img url in previewImg src
            }
            preview(); //calling above function
    
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){ //if index value is equal to 0 then hide prevBtn
                prevBtn.style.display = "none"; 
            }
            if(newIndex >= gallery.length - 1){ //if index value is greater and equal to gallery length by -1 then hide nextBtn
                nextBtn.style.display = "none"; 
            }
            prevBtn.onclick = ()=>{ 
                newIndex--; //decrement index
                if(newIndex == 0){
                    preview(); 
                    prevBtn.style.display = "none"; 
                }else{
                    preview();
                    nextBtn.style.display = "block";
                } 
            }
            nextBtn.onclick = ()=>{ 
                newIndex++; //increment index
                if(newIndex >= gallery.length - 1){
                    preview(); 
                    nextBtn.style.display = "none";
                }else{
                    preview(); 
                    prevBtn.style.display = "block";
                }
            }
            document.querySelector("body").style.overflow = "hidden";
            previewBox.classList.add("show"); 
            shadow.style.display = "block"; 
            closeIcon.onclick = ()=>{
                newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
                prevBtn.style.display = "block"; 
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "scroll";
            }
        }
        
    } 
}

	





