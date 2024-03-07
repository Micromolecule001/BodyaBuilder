document.addEventListener("DOMContentLoaded", function () {
    // Select the services section
    const servicesSection = document.getElementById("work-services");

    // Render the initial HTML structure
    servicesSection.innerHTML = `
        <section class="container mx-auto ok-shadow rounded-lg flex flex-col font-poppins">
            <div class="relative py-10 bg-center bg-no-repeat bg-cover" style="background-image:url('https://novebti.ua/wp-content/uploads/2020/07/%D1%83%D0%BB%D0%BE%D0%B2%D0%BE%D0%BA-%D0%BE%D1%82-%D0%BF%D1%80%D0%BE%D1%80%D0%B0%D0%B1%D0%BE%D0%B2-1024x536.jpeg');">
                <div class="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-80 "></div>
                <div class="relative z-10 px-4 py-4 mx-auto lg:py-10 md:px-7">
                    <div class="max-w-3xl mx-auto text-center">
                        <span class="text-lg font-bold text-blue-300 dark:text-blue-200">
                            
                        </span>
                        <h2 class="text-4xl font-bold tracking-wide text-gray-100 my-7 dark:text-gray-300 lg:text-6xl">
                            Види робіт
                        </h2>
                        <p class="mb-10 text-base font-medium text-gray-300 dark:text-gray-400 md:text-lg">
                            
                        </p>
                        <div class="flex flex-wrap items-center justify-center">
                            <a id="showServicesBtn" class="inline-flex items-center justify-center w-full py-2 mb-4 text-lg font-medium leading-7 text-gray-100 bg-blue-400 border border-transparent rounded-md shadow-sm hover:text-gray-700 hover:bg-blue-100 px-7 h-14 md:w-auto md:mb-0 md:mr-4 dark:bg-blue-500 dark:hover:text-gray-100 dark:hover:bg-blue-400">
                                Показати види робіт
                            </a>
                            <a id="hideServicesBtn" class="hidden inline-flex items-center justify-center w-full py-2 mb-4 text-lg font-medium leading-7 text-gray-100 bg-red-400 border border-transparent rounded-md shadow-sm hover:text-gray-700 hover:bg-red-100 px-7 h-14 md:w-auto md:mb-0 md:mr-4 dark:bg-red-500 dark:hover:text-gray-100 dark:hover:bg-red-400">
                            Сховати види робіт
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <div class="container mx-auto ok-shadow rounded-lg py-2 px-2 hidden " id="servicesCardsContainer">
            <div id="infoContainer">
            </div>
        </div>
    `;

    // Add event listener for the "Show Services" button
    document.getElementById("showServicesBtn").addEventListener("click", function () {
        // Show the "Hide Services" button
        document.getElementById("hideServicesBtn").classList.remove("hidden");
        document.getElementById("servicesCardsContainer").classList.remove("hidden");

        // Fetch data from products.json
        fetch("./data/services.json")
            .then(response => response.json())
            .then(data => {
                // Generate services blocks based on JSON data
                const servicesCardsContainer = document.getElementById("servicesCardsContainer");
                servicesCardsContainer.innerHTML = ''; // Clear the previous content

                // Create a document fragment to optimize DOM insertion
                const fragment = document.createDocumentFragment();

                data.forEach((product, index) => {
                    // Create a new row for every 3rd element
                    if (index % 3 === 0) {
                        const row = document.createElement('div');
                        row.className = 'flex flex-wrap -mx-4';
                        fragment.appendChild(row);
                    }

                    const servicesBlock = createServicesBlock(product.title, product.title, product.description, product.imageUrl, product.price);
                    const card = document.createElement('div');
                    card.className = 'w-full sm:w-1/2 lg:w-1/3 px-4 mb-8';
                    card.innerHTML = servicesBlock;
                    fragment.lastChild.appendChild(card);

                    // Close the row for every 3rd element
                    if ((index + 1) % 3 === 0 || (index + 1) === data.length) {
                        servicesCardsContainer.appendChild(fragment.lastChild);
                    }
                });
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    });


    // Add event listener for the "Hide Services" button
    document.getElementById("hideServicesBtn").addEventListener("click", function () {
        // Hide the "Hide Services" button
        document.getElementById("hideServicesBtn").classList.add("hidden");

        // Clear the Services container
        document.getElementById("servicesCardsContainer").innerHTML = '';
    });

    // Function to create a services block
    function createServicesBlock(id, title, description, imageUrl, price) {
        return `
            <div class="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <span class="hidden"> ${id} </span>
                <div class="w-1/3 bg-cover" style="background-image: url('${imageUrl}')"></div>
                <div class="w-2/3 p-4 md:p-4">                
                    <h1 id="cardName" class="text-xl font-bold text-gray-800 dark:text-white">${title}</h1>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">${description}</p>
                    <div class="flex mt-2 item-center">
                        <!-- Add your SVG icons here -->
                    </div>
                    <div class="flex justify-between mt-3 item-center">
                        <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">${price}</h1>
                        <button id="openPopupBtn" class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                            Консультація
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
});
