const timelineContents = document.querySelectorAll('.timeline-content');

const options = {
    root: null, 
    rootMargin: '0px', 
    threshold: 0.5
};

function callback(entries, observer) { 
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const columnIndex = Array.from(entry.target.parentNode.children).indexOf(entry.target) % 3;
            if(columnIndex === 0) {
                entry.target.classList.add('animate-right');
            } else if(columnIndex === 2) {
                entry.target.classList.add('animate-left');
            }
        } else {
            entry.target.classList.remove('animate-right', 'animate-left');
        }
    });
}
let observer = new IntersectionObserver(callback, options);

timelineContents.forEach(node => observer.observe(node));