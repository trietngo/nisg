let enroll = document.getElementById('enroll');
let bounding = enroll.getBoundingClientRect();

if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {

    console.log('Element is in the viewport!');
    
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
});
