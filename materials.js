document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("materials").innerHTML = `
        <section class="container mx-auto ok-shadow rounded-lg flex flex-col font-poppins">
            <div class="relative py-10 bg-center bg-no-repeat bg-cover" style="background-image:url('https://gruzavto.lviv.ua/wp-content/uploads/2020/08/155.jpg');">
                <div class="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-80 "></div>
                <div class="relative z-10 px-4 py-4 mx-auto lg:py-10 md:px-7">
                    <div class="max-w-3xl mx-auto text-center">
                        <span class="text-lg font-bold text-blue-300 dark:text-blue-200">
                            asdfasfasfasdfs
                        </span>
                        <h2 class="text-4xl font-bold tracking-wide text-gray-100 my-7 dark:text-gray-300 lg:text-6xl">
                            Будматеріали
                        </h2>
                        <p class="mb-10 text-base font-medium text-gray-300 dark:text-gray-400 md:text-lg">
                            Дата оновлення 21.02.24
                        </p>
                        <div class="flex flex-wrap items-center justify-center">
                            <a id="showMaterialsBtn" class="inline-flex items-center justify-center w-full py-2 mb-4 text-lg font-medium leading-7 text-gray-100 bg-blue-400 border border-transparent rounded-md shadow-sm hover:text-gray-700 hover:bg-blue-100 px-7 h-14 md:w-auto md:mb-0 md:mr-4 dark:bg-blue-500 dark:hover:text-gray-100 dark:hover:bg-blue-400">
                                Показати матеріали
                            </a>
                            <a id="hideMaterialsBtn" class="hidden inline-flex items-center justify-center w-full py-2 mb-4 text-lg font-medium leading-7 text-gray-100 bg-red-400 border border-transparent rounded-md shadow-sm hover:text-gray-700 hover:bg-red-100 px-7 h-14 md:w-auto md:mb-0 md:mr-4 dark:bg-red-500 dark:hover:text-gray-100 dark:hover:bg-red-400">
                            Сховати матеріали
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <div class="container mx-auto ok-shadow rounded-lg py-2 px-2 hidden" id="materialCardsContainer">
        </div>
    `;

    // Add event listener for the "Show Materials" button
    document.getElementById("showMaterialsBtn").addEventListener("click", function () {
        // Show the "Hide Materials" button
        document.getElementById("hideMaterialsBtn").classList.remove("hidden");
        document.getElementById("materialCardsContainer").classList.remove("hidden");

        // Fetch data from products.json
        fetch("./data/materials.json")
            .then(response => response.json())
            .then(data => {
                // Generate material blocks based on JSON data
                const materialCardsContainer = document.getElementById("materialCardsContainer");
                materialCardsContainer.innerHTML = ''; // Clear the previous content

                // Create a document fragment to optimize DOM insertion
                const fragment = document.createDocumentFragment();

                data.forEach((product, index) => {
                    // Create a new row for every 3rd element
                    if (index % 3 === 0) {
                        const row = document.createElement('div');
                        row.className = 'flex flex-wrap -mx-4';
                        fragment.appendChild(row);
                    }

                    const materialBlock = createMaterialBlock(product.title, product.title, product.description, product.imageUrl, product.price);
                    const card = document.createElement('div');
                    
                    card.className = 'w-full sm:w-1/2 lg:w-1/3 px-4 mb-8';
                    card.innerHTML = materialBlock;
                    fragment.lastChild.appendChild(card);

                    // Close the row for every 3rd element
                    if ((index + 1) % 3 === 0 || (index + 1) === data.length) {
                        materialCardsContainer.appendChild(fragment.lastChild);
                    }
                });
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    });

    // Add event listener for the "Hide Materials" button
    document.getElementById("hideMaterialsBtn").addEventListener("click", function () {
        // Hide the "Hide Materials" button
        document.getElementById("hideMaterialsBtn").classList.add("hidden");

        // Clear the materials container
        document.getElementById("materialCardsContainer").innerHTML = '';
    });   
    


    // Function to create a material block
    function createMaterialBlock(id, title, description, imageUrl, price) {
        return `
            <div class="flex max-w-md  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
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
                        <button id="openPopupBtn" class=" px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                            Консультація
                        </button>
                    </div>
                </div>
            </div>
        `;
    }  
});
