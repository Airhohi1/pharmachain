function selectCategory(element) {
    // Remove active class from all category boxes
    const boxes = document.querySelectorAll('.category-box');
    boxes.forEach(box => box.classList.remove('active'));

    // Add active class to the clicked category box
    element.classList.add('active');
}