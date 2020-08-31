const counters = document.querySelectorAll(".counter"); // Select all elements with "counter" class
const speed = 15;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.innerText;
        const inc = target

        console.log(target);
    }

    updateCount();
});

