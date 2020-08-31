const counters = document.querySelectorAll(".counter"); // Select all elements with "counter" class
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.innerText;
        let count = 0;
        const inc = target / speed; //increment

        if (count < target) {
            counter.innerText = count + inc;
        }

        
        console.log(target);
        console.log(inc);
    }

    updateCount();
});

