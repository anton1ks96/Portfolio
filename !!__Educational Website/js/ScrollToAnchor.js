function scrollToAnchor(anchorId) {
    let targetPosition = 0; 

    if (anchorId) {
        const target = document.getElementById(anchorId) || document.querySelector(`.${anchorId}`);
        if (target) {

            const offset = -150; 
            targetPosition = target.getBoundingClientRect().top + window.pageYOffset + offset;
        }
    }

    window.scrollTo({
        top: targetPosition,
    });
}
