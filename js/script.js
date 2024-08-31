
gsap.set("#theGradient", { attr: { x1: -1000, x2: 0 } });
gsap.to("#theGradient", {
    duration: 5,
    attr: { x1: 1000, x2: 2000 },
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.5,
    ease: "none"
});

new Typed('#typed', {
    strings: ['Information'],
    typeSpeed: 60,
    backSpeed: 60, // Add backSpeed if you want the text to erase
    backDelay: 1000, // Delay before the text starts deleting (if backSpeed is set)
    startDelay: 1000, // Delay before typing starts
    delaySpeed: 2000, // The delay after typing is completed before restarting (if loop is true)
    loop: true
});

new Typed('#about_name', {
    strings: ['Mahabur Rahman', 'Professional White Hat SEO Expert'],
    typeSpeed: 60,
    backSpeed: 60, // Add backSpeed if you want the text to erase
    backDelay: 1000, // Delay before the text starts deleting (if backSpeed is set)
    startDelay: 1000, // Delay before typing starts
    delaySpeed: 2000, // The delay after typing is completed before restarting (if loop is true)
    loop: true
});
AOS.init();
// go top button
window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        document.getElementById("go_top").style.display = 'grid'
    }
});
window.addEventListener('scroll', function () {
    if (window.scrollY < 200) {
        document.getElementById("go_top").style.display = 'none'
    }
});
// circle navigation
document.querySelector('.icon_').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    const icon = document.querySelector('.icon_');
    const navbar = document.querySelector('.navbar');
    const icon_sub = document.getElementById('icon_sub');

    if (menu.style.opacity === '1') {
        navbar.style.marginRight = "-135px"
        navbar.style.paddingTop = "0px"
        navbar.style.paddingBottom = "0px"
        navbar.style.height = "50px"
        menu.style.opacity = '0';
        menu.style.transform = 'translateX(300px)';
        icon.style.transform = 'translateX(0)';
        document.querySelector(".ciricle_nav_main").style.top = '65%'

    } else {
        navbar.style.marginRight = "0px"
        navbar.style.height = "auto"
        navbar.style.paddingTop = "20px"
        navbar.style.paddingBottom = "20px"
        menu.style.opacity = '1';
        menu.style.transform = 'translateX(0)';
        icon.style.transform = 'translateX(-300px)';
        document.querySelector(".ciricle_nav_main").style.top = '45%'
    }

    if (icon_sub.classList.contains('fa-cog')) {
        icon_sub.classList.remove('fa-cog');
        icon_sub.classList.add('fa-xmark'); // fa-xmark is the solid version of "x" icon in Font Awesome
    } else {
        icon_sub.classList.remove('fa-xmark');
        icon_sub.classList.add('fa-cog');
    }

    document.getElementById('content_container').addEventListener("click", () => {
        navbar.style.marginRight = "-135px"
        navbar.style.paddingTop = "0px"
        navbar.style.paddingBottom = "0px"
        navbar.style.height = "50px"
        menu.style.opacity = '0';
        menu.style.transform = 'translateX(300px)';
        icon.style.transform = 'translateX(0)';
        document.querySelector(".ciricle_nav_main").style.top = '65%'
        icon_sub.classList.remove('fa-xmark');
        icon_sub.classList.add('fa-cog');
    })

});

// custom cursor
const numDots = 7; // Number of dots
const dots = [];
const speed = 0.2; // Adjust speed (lower is slower, higher is faster)

// Create the dots
function initDots() {
    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        document.getElementById('content_container').appendChild(dot);
        dots.push(dot);
    }
}

let mouseX = 0, mouseY = 0;
const positions = Array(numDots).fill({ x: 0, y: 0 });

// Update the position of the dots
function updateDots() {
    const scrollX = window.pageXOffset; // Get current horizontal scroll position
    const scrollY = window.pageYOffset; // Get current vertical scroll position

    positions[0] = { x: mouseX + scrollX, y: mouseY + scrollY };

    for (let i = 1; i < numDots; i++) {
        const prev = positions[i - 1];
        const current = positions[i];
        const dx = prev.x - current.x;
        const dy = prev.y - current.y;

        positions[i] = {
            x: current.x + dx * speed,
            y: current.y + dy * speed
        };
    }

    dots.forEach((dot, index) => {
        dot.style.left = positions[index].x + 'px';
        dot.style.top = positions[index].y + 'px';
        dot.style.transform = 'translate(-50%, -50%)';
    });

    requestAnimationFrame(updateDots);
}

// Track the mouse movement
window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Start the animation
updateDots();


// Add an event listener for resizing the window to handle responsiveness
function handleResize() {
    if (window.innerWidth > 768) {
        if (dots.length === 0) initDots(); // Initialize dots if not already done
    } else {
        dots.forEach(dot => dot.remove());
        dots.length = 0; // Clear the dots array
    }
}
handleResize();

window.addEventListener('resize', handleResize);

// MY SCRIPT
let mail_link = document.getElementById("mailLink");
let home_name = document.getElementById('home_name');
let hire_now = document.getElementById('hire_now');
let home_img = document.getElementById('home_img');
let infoTitle1 = document.getElementById('home_info_title1');
let infoTitle2 = document.getElementById('home_info_title2');
let infoTitle3 = document.getElementById('home_info_title3');
let infoTitle4 = document.getElementById('home_info_title4');
let fbLink = document.getElementById("quick_links_fb");
let quick_links_twitter = document.getElementById("quick_links_twitter");
let quick_links_whatsapp = document.getElementById("quick_links_whatsapp");
let quick_links_upwork = document.getElementById("quick_links_upwork");

// home page
fetch('./api/home.json')
    .then(response => response.json())

    .then(data => {
        home_name.textContent = data.HOME_NAME;
        mail_link.href = 'mailto: ' + data.EMAIL;
        hire_now.href = data.FIVERR;
        home_img.src = data.HOME_PAGE_IMAGE;
        infoTitle1.innerHTML = data.BASIC_INFO_TITLE1;
        infoTitle2.innerHTML = data.BASIC_INFO_TITLE2;
        infoTitle3.innerHTML = data.BASIC_INFO_TITLE3;
        infoTitle4.innerHTML = data.BASIC_INFO_TITLE4;
        fbLink.href = data.FB_LINK;
        quick_links_twitter.href = data.TWITTER_LINK;
        quick_links_whatsapp.href = data.LINKDIN_LINK;
        quick_links_upwork.href = data.UPWORK_LINK;
    })
    .catch(error => console.error('Error fetching data:', error));


// about page
fetch('./api/about.json')
    .then(response => response.json())

    .then(data => {
        document.getElementById('data1').innerHTML = data.data1;
        document.getElementById('data2').innerHTML = data.data2;
        document.getElementById('about_name').innerHTML = data.name;
        document.getElementById('about_img_link').src = data.img_link;  //
    })
    .catch(error => console.error('Error fetching data:', error));

// skill page
fetch('./api/skill.json')
    .then(response => response.json())
    .then(progressData => {
        // Get the container element
        const container = document.getElementById('progress-container');
        // Map through the progress data and create HTML elements
        progressData.map(item => {
            const progressElement = document.createElement('div');
            progressElement.className = 'progress-container';
            progressElement.setAttribute("data-aos", "fade-up");

            progressElement.innerHTML = `
                 <div>
                 <h3 class="skill_h1">${item.name}</h3>
                 <h3 class="skill_h1">${item.percentage}%</h3>
                 </div>
                 <div class="progress-bar" style="width: ${item.percentage}%">
                 </div>
             `;

            // Append to the container
            container.appendChild(progressElement);
        });
    })
    .catch(error => {
        console.error('Error fetching progress data:', error);
    });



// services page

fetch('./api/services.json')
    .then(response => response.json())
    .then(services => {
        // Get the container element
        const container = document.getElementById('service-container');

        // Map through the services data and create HTML elements
        services.map(service => {
            const card = document.createElement('div');
            card.className = 'card';
            card.setAttribute("data-aos", "fade-up");

            card.innerHTML = `
            <div class="number">
                <span>${service.id}</span>
            </div>
            <div class="text_">
                <h1>${service.title}</h1>
                <p>${service.description}</p>
                <a href="#contact">
                    <button>Hire Now</button>
                </a>
            </div>
        `;

            // Append the card to the container
            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error fetching services:', error);
    });

// portfolio page

fetch('./api/portfolio.json')
    .then(response => response.json())
    .then(portfolios => {
        // Get the container element
        const container = document.getElementById('portfolio-container');

        // Map through the portfolio data and create HTML elements
        portfolios.map(portfolio => {
            const card = document.createElement('div');
            card.setAttribute("data-aos", "fade-up");

            card.className = 'card';
            card.innerHTML = `
            <div class="img">
                <img src="${portfolio.image}" alt="${portfolio.title}"></div>
            <div class="content">
                <h2>${portfolio.title}</h2>
                <p>${portfolio.description}</p>
                <a href="#" class="view-document" data-image="${portfolio.image}">View Works</a>
            </div>
        `;

            // Append the card to the container
            container.appendChild(card);
        });

        // Add event listeners to the "View Document" links
        const viewButtons = document.querySelectorAll('.view-document');
        viewButtons.forEach(button => {
            button.addEventListener('click', event => {
                event.preventDefault();
                const imageSrc = event.target.getAttribute('data-image');
                const modal = document.getElementById('imageModal');
                const modalImg = document.getElementById('modalImage');
                modal.style.display = "block";
                modalImg.src = imageSrc;
            });
        });
    })
    .catch(error => {
        console.error('Error fetching portfolio data:', error);
    });

// Modal close functionality
const modal = document.getElementById('imageModal');
const span = document.getElementsByClassName('close')[0];

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let currentIndex = 0;

// Function to create testimonial cards
function createTestimonialCard(testimonial) {
    const card = document.createElement('div');
    card.className = 'testimonial-card';

    card.innerHTML = `
        <div class="tes_card">
            <img src="${testimonial.image}" alt="${testimonial.name}">
        </div>
        <p>"${testimonial.feedback}"</p>
        <h3>${testimonial.name}</h3>
    `;

    return card;
}

// Function to load testimonials from the JSON file
function loadTestimonials() {
    const container = document.getElementById('testimonialContainer');

    fetch('./api/testimonial.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(testimonial => {
                const card = createTestimonialCard(testimonial);
                container.appendChild(card);
            });
            updateCarousel();
        })
        .catch(error => console.error('Error fetching testimonials:', error));
}

// Function to update the carousel
function updateCarousel() {
    const container = document.getElementById('testimonialContainer');
    const totalItems = container.children.length;

    document.getElementById('nextBtn').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}

// Load testimonials when the page is loaded
window.onload = loadTestimonials;


// contact page
fetch('./api/contact.json')
    .then(response => response.json())

    .then(data => {
        document.getElementById('phoneNumber').innerHTML = data.phoneNumber;
        document.getElementById('phn_id').href = 'tel:' + data.phoneNumber;
        document.getElementById('ml_id').href = 'mailto:' + data.email;
        document.getElementById('email_contact').innerHTML = data.email;
        document.getElementById('whatsApp_contact').innerHTML = data.whatsAppNum;
        document.getElementById('whatsApp_contact_link').href = `https://wa.me/${data.whatsAppNum}`;
        document.getElementById('facebook_contact').href = data.faceBook;
    })
    .catch(error => console.error('Error fetching data:', error));

// my work process 

fetch('./api/work_process.json')
    .then(response => response.json())

    .then(data => {
        document.getElementById('number_1').innerHTML = data.number1;
        document.getElementById('title_r_1').innerHTML = data.description1;

        document.getElementById('number_2').innerHTML = data.number2;
        document.getElementById('title_r_2').innerHTML = data.description2;

        document.getElementById('number_3').innerHTML = data.number3;
        document.getElementById('title_r_3').innerHTML = data.description3;
    })
    .catch(error => console.error('Error fetching data:', error));


// work process card 
fetch('./api/work_process_card.json')
    .then(response => response.json())

    .then(data => {
        document.getElementById("card_01").innerHTML = data.card_title_1;
        document.getElementById("card_02").innerHTML = data.card_title_2;
        document.getElementById("card_03").innerHTML = data.card_title_3;
        document.getElementById("card_04").innerHTML = data.card_title_4;

        document.getElementById("card_dis_1").innerHTML = data.card_discription_1;
        document.getElementById("card_dis_2").innerHTML = data.card_discription_2;
        document.getElementById("card_dis_3").innerHTML = data.card_discription_3;
        document.getElementById("card_dis_4").innerHTML = data.card_discription_4;

    })
    .catch(error => console.error('Error fetching data:', error));


// why you hire me card 
fetch('./api/why_you_hire_me.json')
    .then(response => response.json())

    .then(data => {
        document.getElementById("hire_title_1").innerHTML = data.title1;
        document.getElementById("hire_title_2").innerHTML = data.title2;
        document.getElementById("hire_title_3").innerHTML = data.title3;
        document.getElementById("hire_title_4").innerHTML = data.title4;

        document.getElementById("hire_dis_1").innerHTML = data.description1;
        document.getElementById("hire_dis_2").innerHTML = data.description2;
        document.getElementById("hire_dis_3").innerHTML = data.description3;
        document.getElementById("hire_dis_4").innerHTML = data.description4;

    })
    .catch(error => console.error('Error fetching data:', error));


// footer page
fetch('./api/footer.json')
    .then(response => response.json())

    .then(data => {
        document.getElementById('ffb').href = data.facebook;
        document.getElementById('ffi').href = data.fiverr;
        document.getElementById('fup').href = data.upWork;
        document.getElementById('fld').href = data.linkDin;
    })
    .catch(error => console.error('Error fetching data:', error));


document.getElementById('footer').innerHTML = `
 © ${new Date().getFullYear()} - Mahabur Rahman. All Rights Reserved.
`