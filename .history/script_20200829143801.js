const counters = document.querySelectorAll(".counter"); // Select all elements with "counter" class
const speed = 2000;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.innerText;
        const inc = target / speed; //increment


        console.log(target);
        console.log(inc);
    }

    updateCount();
});

