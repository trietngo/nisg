const counters = document.querySelectorAll(".counter"); // Select all elements with "counter" class
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.innerText; // Total
        const inc = Math.floor(target / speed); //increment

        if (currentCount < target) {
            currentCount += inc;
        } else {
            counter.innerText = target;
        }

        console.log(inc);

    }
    updateCount();
});

