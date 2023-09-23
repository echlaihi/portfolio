$(document).ready(function(){

    // Method 1: 
    
    var projectsWrapper, btnNext, btnPrevious, cardWidth, count = 0;

    projectsWrapper = $(".projects-wrapper");
    projectsContainer = $(".projects-container");
    btnNext = $("#next-container");
    btnPrevious = $("#previous-container");
    cardWidth = $(".projects-wrapper").width()/6;


    // console.log($(projectsContainer).scrollLeft().val());
    

        // $(projectsWrapper).css({
        //     transform: "translateX(0)",
        // });
    
    $(projectsContainer);

  


   $(btnPrevious).click(function(){
       
              if (count == 3) count = 0;
              else count++;
        $(projectsWrapper).css({transform: `translateX(${cardWidth * count}px)`,
                                transition: "transform 1s ease"});
       console.log("previous",count);

       console.log($(projectsContainer).scrollLeft());

        
   });


   $(btnNext).click(function(){
       if (count == -3) count = 1;
       else count--;
    $(projectsWrapper).css({transform: `translateX(${cardWidth * count}px)`,
                            transition: "transform 1s ease"});

    console.log("next", count);
    
});

// Method 2:
// var carouselContainer = $(".projects-container");
// // console.log("carousel container", carouselContainer);
// var carouselPosition = $(carouselContainer).scrollLeft();
// console.log(carouselPosition);



});