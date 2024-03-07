document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("popUp").innerHTML = `
        <div id="popup" class="fixed hidden inset-0 z-50  overflow-y-auto bg-gray-900 bg-opacity-50">
            <div class="flex items-center justify-center min-h-screen">
                <div class="w-full max-w-2xl p-10 bg-white rounded-md shadow-md dark:bg-gray-800">

                    <div class="flex justify-between items-center mb-4">
                        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Оформити замовлення</h2>

                        <button id="closePopUp" class="px-4 text-black z-10">
                            <svg id="svgCross" xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" stroke="currentColor"
                                class="h-6 w-6 z-0">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                                </path>
                            </svg>
                        </button>
                    </div>

                    <form id="popupForm" action="./order.php" method="POST">
                        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label class="text-gray-700 dark:text-gray-200" for="name">Ім'я</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name"
                                    placeholder="Введіть своє ім'я"
                                    title="Можна вводити тільки літери"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                            </div>
                            <div>
                                <label class="text-gray-700 dark:text-gray-200" for="phone">Номер телефону</label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    name="phone"
                                    placeholder="000-000-00-00"
                                    title="Можна вводити тільки цифри від 10 до 13 символів"
                                    oninput="formatPhoneNumber(this)"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">

                            </div>
                        </div>

                        <input type="hidden" name="field" value=" "></input>

                        <button 
                            type="button" 
                            id="submitBtn"
                            class="px-8 my-3 w-full py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                            Оформити замовлення
                        </button>
                    </form>
                </div>
            </div>   
        </div>
    `;
});
