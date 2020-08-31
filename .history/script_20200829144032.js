const counters = document.querySelectorAll(".counter"); // Select all elements with "counter" class
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.innerText; // Total
        let count = 0;
        const inc = Math.floor(target / speed); //increment

        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 1);
        } else {
            count.innerText = target;
        }

    }

    updateCount();
});

