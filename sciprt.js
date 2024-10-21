const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);


document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});