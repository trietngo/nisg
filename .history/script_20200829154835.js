var enroll = document.getElementById('my-element');
var bounding = myElement.getBoundingClientRect();
var enrollHeight = enroll.offsetHeight;
var enrollWidth = myElement.offsetWidth;

function elementInViewport() {

    var bounding = myElement.getBoundingClientRect();

    if (bounding.top >= -myElementHeight 
        && bounding.left >= -myElementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {

        console.log('Element is in the viewport!');
    } else {

        console.log('Element is NOT in the viewport!');
    }
}

const counters = document.querySelectorAll(".counter"); // Select all elements with "counter" class
const speed = 200;

counters.forEach(counter => {

    const updateCount = () => {
        const target = +counter.getAttribute('title'); // Total
        let count = +counter.innerText; // Current count

        const inc = Math.floor(target / speed); //increment

        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 5);
        } else {
            counter.innerText = target;

            // if (counter.innerText.length > 3) {
            //     counter.innerText = counter.innerText.substr(0, counter.innerText.length - 3) + ',' + counter.innerText.substr(counter.innerText.length - 3, 3);
            // }
        }

    }
    updateCount();
});

