const counters = document.querySelectorAll(".counter"); // Select all elements with "counter" class
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.innerText;
        c
        const inc = target / speed; //increment


        console.log(target);
        console.log(inc);
    }

    updateCount();
});

