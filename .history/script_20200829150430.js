const counters = document.querySelectorAll(".counter"); // Select all elements with "counter" class
const speed = 200;

counters.forEach(counter => {

    const updateCount = () => {
        const target = +counter.getAttribute('title'); // Total
        let count = +counter.innerText; // Current count

        const inc = Math.floor(target / speed); //increment

        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        console.log(target);
        console.log(count);

    }
    updateCount();
});

