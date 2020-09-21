// Adding new navigation class for small screens

function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "header__nav") {
      x.className += " responsive";
    } else {
      x.className = "header__nav";
    }
}

// Activate counters when element is in view

const isInView = el => {
	const scroll = window.scrollY || window.pageYOffset
	const boundsTop = el.getBoundingClientRect().top + scroll
	
	const viewport = {
		top: scroll,
		bottom: scroll + window.innerHeight,
	}
	
    const bounds = {
		top: boundsTop,
		bottom: boundsTop + el.clientHeight,
	}
	
	return ( bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom ) 
		|| ( bounds.top <= viewport.bottom && bounds.top >= viewport.top );
}

document.addEventListener( 'DOMContentLoaded', () => {
    const div = document.querySelector( '.enrollment__category' )
	
	const handler = () => raf( () => {
		if (isInView( div )) {

            // console.log("In view");
            const counters = document.querySelectorAll(".counter"); // Select all elements with "counter" class
            const speed = 200;
            
            counters.forEach(counter => {
            
                const updateCount = () => {
                    const target = +counter.getAttribute('title'); // Total
                    let count = +counter.innerText; // Current count
            
                    const inc = Math.floor(target / speed); //increment
            
                    if (count < target) {
                        counter.innerText = count + inc;
                        setTimeout(updateCount, 50);
                    } else {
                        counter.innerText = target;
            
                        // if (counter.innerText.length > 3) {
                        //     counter.innerText = counter.innerText.substr(0, counter.innerText.length - 3) + ',' + counter.innerText.substr(counter.innerText.length - 3, 3);
                        // }
                    }
            
                }
                updateCount();
            });
        } else {
            console.log("Not in view");
        }
	} )
	
	handler()
	window.addEventListener( 'scroll', handler )
} )



const raf = 
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    
    function( callback ) {
        window.setTimeout( callback, 1000 / 60 )
}