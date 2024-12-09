gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 2,
    effects: true,
});

gsap.from(".block:nth-child(1)", {
    x: "-100%",
    rotateY: -70,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".blocks-container",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
    }
});


gsap.from(".block:nth-child(2)", {
    scale: 0,
    opacity: 0,
    duration: 2,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".blocks-container",
        start: "top 90%",
        end: "top 50%",
        scrub: true,
    }
});

gsap.from(".block:nth-child(3)", {
    x: "100%",
    rotateY: -90,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".blocks-container",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
    }
});

gsap.from(".horizontal-block", {
    scale: 0,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".block-container",
        start: "top 120%",
        end: "end 70%",
        scrub: true,
    }
});

gsap.to(".hero-title", {
    duration: 2,
    backgroundImage: "linear-gradient(200deg, rgb(114, 114, 103) 8%, rgb(255, 255, 247) 105%)",
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
});


const spanAnim = document.querySelectorAll('.hero-introduction span')
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true');
            observer.unobserve(entry.target);
        } else {
            entry.target.removeAttribute('data-visible');
        }
    });
}, {
    threshold: 0.7
});

spanAnim.forEach((span) => observer.observe(span));

let activeFAQ = null; 
 
function toggleFAQ(element) { 
    const faq = element.parentElement; 
    const answer = faq.querySelector(".faq-answer"); 
 
    if (faq.classList.contains("active")) { 
        answer.style.height = "0"; 
        answer.style.opacity = "0"; 
        answer.style.padding = "0 20px"; 
        faq.classList.remove("active"); 
        activeFAQ = null; 
 
    } else { 
 
        if (activeFAQ && activeFAQ != faq) { 
            const activeAnswer = activeFAQ.querySelector('.faq-answer'); 
            activeAnswer.style.height = "0"; 
            activeAnswer.style.opacity = "0"; 
            activeAnswer.style.padding = "0 20px"; 
            activeFAQ.classList.remove("active"); 
        } 
 
        faq.classList.add("active"); 
        answer.style.height = `${answer.scrollHeight}px`; 
        answer.style.opacity = "1"; 
        answer.style.padding = "15px 20px"; 
 
        activeFAQ = faq; 
    }
}

gsap.from(".faq", {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".faq",
        start: "top 80%",
        end: "bottom 10%",
    }
});

const faqTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#faq",
        start: "top 60%",
        toggleActions: "play none none none"
    }
});

faqTimeline
    .to(".faq-title h1", {
        opacity: 1,
        y: 0,
        duration: 0.5
    })
    .to(".faq-title p", {
        opacity: 1,
        y: 0,
        duration: 0.5
    }, "-=0.3")
    .to(".framer-faq", {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.5
    }, "-=0.3");
