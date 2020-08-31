const counters = document.querySelectorAll(".counter"); // Select all elements with "counter" class
const speed = 200;

counters.forEach(counter => {

    let count = 0; // Current count

    const updateCount = () => {
        const target = 4000; // Total
        
        const inc = Math.floor(target / speed); //increment

        if (count < target) {
            counter.innerText = count + inc;
        } else {
            counter.innerText = target;
        }

        console.log(target);
        console.log(counter.innerText);

    }
    updateCount();
});
