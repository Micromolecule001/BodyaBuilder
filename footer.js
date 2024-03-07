document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("footer").innerHTML = `
    <footer class="container ok-shadow mx-auto rounded-lg  dark:bg-gray-900">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="index.html" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Перший будівельний</span>
                </a>
                <ul
                    class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-6">
                    <li>
                        <a href="about-us.html" class="hover:underline me-4 md:me-6">Про нас</a>
                    </li>
                    <li>
                        <a href="politics-info.html" class="hover:underline me-4 md:me-6">Політика конфіденційності</a>
                    </li>
                    <li>
                        <a href="use-rules.html" class="hover:underline me-4 md:me-6">Правила використання</a>
                    </li>
                    <li>
                        <a href="contacts.html" class="hover:underline">Контакти</a>
                    </li>
                    <li>
                        <a class="hover:underline">© 2020-2024. Всі права захищені.</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    `;
      
    });
