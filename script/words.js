
const getWords = (id) => {
    fetch(`https://openapi.programming-hero.com/api/level/${id}`)
        .then(response => response.json())
        .then(data => displayWords(data.data))
}


const displayWords = (data) => {
    const wordsCard = document.getElementById('wordsCard');
    document.getElementById('temp-lesson-p').style.display = 'none';
    wordsCard.innerHTML = "";
    let count = 0;
    wordsCard.classList.add('p-8')
    for (let element of data) {
        const newWords = document.createElement('div');
        count++;
        newWords.innerHTML = `
        
        <div class=" bg-white rounded-xl">
                            <div id="words" class=" flex flex-col justify-center items-center">
                                <h2 class="inter font-bold text-[32px] text-black mt-10">${element.word}</h2>
                                <p class=" inter font-medium text-xl text-black py-6">Meaning /Pronounciation</p>
                                <h2 class="text-[#18181B99] font-semibold text-3xl hind-siliguri">
                                    ${element.meaning !== null && element.meaning !== undefined ? `"${element.meaning} / ${element.pronunciation}"` : element.pronunciation ? ` / ${element.pronunciation}` : ''}
                                </h2>
                            </div>
                            <div class="p-12 flex justify-between">
                                <i onclick=getModal(${element.id}) id="info-${element.id}"class="info-button fa-solid fa-circle-info p-3 bg-[#1A91FF10] rounded-lg cursor-pointer"></i>
                                <i class="fa-solid fa-volume-low p-3 bg-[#1A91FF10] rounded-lg cursor-pointer"></i>
                            </div>
                        </div>


        `;

        wordsCard.append(newWords);
    }

    if (count === 0) {
        wordsCard.classList.remove('p-8')
        let tempLesson = document.getElementById('temp-lesson-p')
        tempLesson.innerHTML = `
                        <div id="temp-lesson-p">
                <div id="temp-lesson"
                    class="p-14 bg-[#F8F8F8] rounded-3xl mt-10 justify-center flex flex-col items-center hind-siliguri">
                    <img class="mb-4" src="./assets/alert-error.png" alt="">
                    <p class="text-sm text-[#79716B] mb-3">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                    <h2 class="text-[34px] font-medium text-[#292524] hind-siliguri">নেক্সট Lesson এ যান</h2>
                </div>
                 </div>
       `
        tempLesson.style.display = 'block';
    }


}


// const getModal = (elements) => {
//     const infoIcon = document.getElementsByClassName("info-button")
//     let i = 0;
//     for (let info of infoIcon) {
//         info.addEventListener('click', () => {
//             const myModal = document.getElementById('my_modal_5');
//             myModal.showModal();
//             i++;
//             console.log(elements)
//         })
//     }
//     for(let element of elements) {
//         console.log(element.id);
//     }
// }

const getModal = (elementId) => {
    fetch(`https://openapi.programming-hero.com/api/word/${elementId}`)
    .then(res => res.json())
    .then(information => modalData(information.data))
}


const modalData = (element) => {
    const myModal = document.getElementById('my_modal_5');
    myModal.showModal();
    myModal.innerHTML = `
      <div class="modal-box">
    <div class="border border-2 border-[#EDF7FF] rounded-xl p-4">

    <h3 class="poppins font-bold font-semibold text-3xl">${element.word} ( <span><i class="fa-solid fa-microphone-lines"></i></span>  :${element.pronunciation})</h3>
    <p class="py-4 poppins text-xl font-semibold">Meaning</p>
    <p class="py-4 poppins text-xl">
    ${element.meaning !== null && element.meaning !== undefined ? element.meaning : ''}
</p>
    <p class="py-4 poppins text-xl font-semibold">Example</p>
    <p class="py-4 poppins text-xl">${element.sentence}</p>
    <p class="py-4 poppins text-xl">সমার্থক শব্দ গুলো</p>
    <div class="flex gap-2">
    <button class="btn poppins text-xl bg-[#D7E4EF]">${element.synonyms[0]}</button>
    <button class="btn poppins text-xl bg-[#D7E4EF]">${element.synonyms[1]}</button>
    <button class="btn poppins text-xl bg-[#D7E4EF]">${element.synonyms[2]}</button>
    </div>
    
        
    </div>
    <div class="modal-action flex justify-start">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn text-white bg-[#422AD5] rounded-xl hind-siliguri font-medium text-xl">Complete Learning</button>
      </form>
    </div>
  </div>
    `;
}