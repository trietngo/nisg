const counters = document.querySelectorAll(".counter"); // Select all elements with "counter" class
const speed = 200;

counters.forEach(counter => {

    const updateCount = () => {
        const target = +counter.getAttribute; // Total
        let count = 0; // Current count

        const inc = Math.floor(target / speed); //increment

        if (count < target) {
            count += inc;
        } else {
            counter.innerText = target;
        }

        console.log(count);

    }
    updateCount();
});

