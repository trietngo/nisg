const counters = document.querySelectorAll(".counter"); // Select all elements with "counter" class
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.innerText; // Total
        
        const inc = Math.floor(target / speed); //increment

        if (count < target) {
            counter.innerText = count + inc;
        } else {
            counter.innerText = target;
        }

    }
    updateCount();
});

