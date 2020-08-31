const counters = document.querySelectorAll(".counter"); // Select all elements with "counter" class
const speed = 200;

counters.forEach(counter => {

    const updateCount = () => {
        const target = +counter.getAttribute('title'); // Total
        let count = +counter.innerText; // Current count

        const inc = Math.floor(target / speed); //increment

        if (count < target) {
            counter.innerText = count + inc;

            console.log(counter.innerText.length);

            if (counter.innerText.length > 3) {
                counter.innerText = counter.innerText.substr(0, counter.innerText.length - 3) + ',' +
            }

            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }

    }
    updateCount();
});

