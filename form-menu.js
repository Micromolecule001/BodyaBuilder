document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("form-menu").innerHTML = `
    <section class="container mx-auto bg-white rounded-lg ok-shadow flex flex-col items-center" id="order">
        <h2 class="text-2xl font-semibold text-gray-700 dark:text-white justify-center flex">Залиште контакт для зв'язку</h2>
    
        <form id="orderForm"  class="mx-auto justify-center flex flex-col py-4 px-4 ">
            <div class="">
                <div>
                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                        placeholder="Ім'я"
                        pattern="[A-Za-zА-Яа-яЁёЇїІіЄєҐґ]"
                        title="Можна вводити тільки літери"
                        class="block w-96 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                </div>
    
                <div>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        placeholder="Номер телефону"
                        pattern="[0-9]{10,13}"
                        title="Можна вводити тільки цифри від 10 до 13 символів"
                        class="block w-96 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                </div>
            </div>
    
            <div class="flex justify-center mt-6"> 
                <button 
                    type="button"
                    id="submitBtn" 
                    class="w-96 px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                    Оформити замовлення
                </button>
            </div>
        </form>
    
        <br>
    
        <!-- Success Message -->
        <section id="successMessage" class="hidden container ok-shadow max-w-xl py-6 pl-2 bg-white border-b-4 border-green-500 rounded-md">
            <!-- success message content -->
            <div class="place-items-center" role="alert">
                <div class="flex px-6">
                    <div class="py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="w-6 h-6 mr-4 text-green-500 dark:text-green-400 bi bi-check2-circle" viewBox="0 0 16 16">
                            <path
                                d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                            <path
                                d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293l-3.646-3.647a.5.5 0 1 0-.708.708l4 4a.5.5 0 0 0 .708 0l8-8z" />
                        </svg>
                    </div>
                    <div>
                        <p class="mb-1 text-lg font-bold text-green-500 dark:text-gray-300">
                            Успіх!
                        </p>
                        <p class="mb-4 text-sm text-gray-500 dark:text-gray-400">
                            Заявка прийнята успішно.
                        </p>
                        <button id="closeButton" class="text-green-500 dark:text-green-400 hover:text-green-600 hover:underline">
                            Закрити
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </section>
    `;
});
