let enroll = document.getElementById('enroll');
let bounding = enroll.getBoundingClientRect();

if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {

    console.log('Element is in the viewport!');
}
