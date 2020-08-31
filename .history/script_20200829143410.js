const counters = document.querySelectorAll(".counter"); // Select all elements with "counter" class

counters.forEach(counter => {
    const updateCount = (() => {
        const target = +counter.innerText;

        console.log(target);
    })
});

