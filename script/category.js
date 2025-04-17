const categoryContainer = document.getElementById('category-container');



const loadCategory = async () => {
    try {
        const response = await fetch('https://openapi.programming-hero.com/api/levels/all');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        showCategory(data.data);
    } catch (error) {
        console.error("Error loading categories:", error);
        // Optionally display an error message to the user
    }
};

const showCategory = (array) => {
    if (categoryContainer) {
        categoryContainer.innerHTML = ''; // Clear previous content (optional)
        array.forEach(element => {
            const newCategory = document.createElement('div');
            newCategory.innerHTML = `
                <button id="btn-${element.level_no}"
                    class="flex gap-1 text-sm font-semibold items-center px-4 py-[10px] text-[#422AD5] border border-[#422AD5] rounded hover:bg-[#422AD5] cursor-pointer hover:text-white active:text-white">
                    <img class="w-4 h-4 cursor-pointer" src="./assets/fa-book-open.png" alt="">${element.lessonName}
                </button>
            `;
            categoryContainer.append(newCategory);

            // Example of adding an event listener immediately (optional)
            const button = document.getElementById(`btn-${element.level_no}`);
            if (button) {
                button.addEventListener('click', () => {
                    console.log(`Clicked category: ${element.lessonName}`);
                    removeActive();
                    button.classList.add('active');
                    // Your specific logic here
                    getWords(element.level_no);
                });
            }
        });
    } else {
        console.error("Error: category-container element not found in the DOM.");
    }
};

// Call loadCategory to start the process
loadCategory();

// If you need to access the buttons *after* they are created,
// you would typically do that within the event listeners
// attached to the buttons (as shown in the showCategory function)
// or using event delegation.

const removeActive = () => {
const active = document.getElementsByClassName('active');
for(let item of active) {
    item.classList.remove('active');
}
}

