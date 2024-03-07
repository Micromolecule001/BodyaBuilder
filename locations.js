document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from locations.json
    fetch('./data/locations.json')
        .then(response => response.json())
        .then(data => {
            // Build HTML for each card dynamically
            const cardsHTML = data.map(location => `
                <a class="mb-0 overflow-hidden bg-white rounded shadow dark:bg-gray-700" href="#">
                    <div class="relative overflow-hidden h-72">
                        <img class="object-cover w-full h-full transition-all hover:scale-110"
                            src="${location.image}" alt="">
                    </div>
                    <div class="relative z-20 p-8 -mt-12 ">
                        <span class="inline-block px-4 py-2 mb-5 text-xs text-white bg-blue-500 rounded">
                            ${location.category}
                        </span>
                        <span class="block mb-2 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300">
                            ${location.author} • ${location.date}
                        </span>
                        <h2 class="mb-3 text-2xl font-bold leading-9 text-blue-800 dark:text-white">
                            ${location.title}
                        </h2>
                        <p class="text-base leading-7 text-gray-400">
                            ${location.description}
                        </p>
                    </div>
                </a>
            `).join('');

            // Set the HTML content
            document.getElementById("locations").innerHTML = `
                <section class="container ok-shadow mx-auto rounded-lg dark:bg-gray-800">
                    <div class="p-4 mx-auto max-w-7xl">
                        <div class="my-3 text-sm font-extrabold tracking-tight leading-none md:text-3xl xl:text-3xl text-gray-900 dark:text-white">
                            Де брали участь
                        </div>
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                ${cardsHTML}
                            </div>
                            <div class="swiper-pagination"></div>
                            <div class="swiper-button-next"></div>
                            <div class"swiper-button-prev"></div>
                        </div>
                    </div>
                </section>
            `;
        })
        .catch(error => console.error('Error fetching data:', error));
});
