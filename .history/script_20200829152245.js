const counters = document.querySelectorAll(".counter"); // Select all elements with "counter" class
const speed = 200;

counters.forEach(counter => {

    const updateCount = () => {
        const target = +counter.getAttribute('title'); // Total
        let count = +counter.innerText; // Current count

        const inc = Math.floor(target / speed); //increment

        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 25);
        } else {
            counter.innerText = target;
        }

    }
    updateCount();
});

const commaSeperator = (int) => {
    if (int.length > 3) {
        int = int.substr(0, int.length - 3) + ',' + int.substr(counter.innerText.length - 3, 3);
    }
}