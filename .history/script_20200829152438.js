const counters = document.querySelectorAll(".counter"); // Select all elements with "counter" class
const speed = 200;

counters.forEach(counter => {

    const updateCount = () => {
        const target = +counter.getAttribute('title'); // Total
        let count = +counter.innerText; // Current count

        const inc = Math.floor(target / speed); //increment

        commaSeperator(counter.innerText);

        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 25);
        } else {
            counter.innerText = target;
        }

    }
    updateCount();
});