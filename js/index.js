const loadlessons = () => {
    fetch(`https://openapi.programming-hero.com/api/levels/all`)   // promise of response 
        .then((rev) => (rev.json()))  // promise of json
        .then((json) => displaylessons(json.data))
}

const wordContainer=(id) => {
    const url=`https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then((rev => (rev.json() )))
    .then((json2) => displayword(json2.data))


};


const displayword=(words) => {
    const wordContainer=document.getElementById("word-container");
    wordContainer.innerText='';

    if(words.length ==0){
        wordContainer.innerHTML=`

        <div class="text-center col-span-full text-black  space-y-5">
        
            <img class="mx-auto" src="./english-janala-resources/assets/alert-error.png" alt="">
            <p class="text-[26px] font-semibold">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h2 class="text-[40px] font-bold ">নেক্সট Lesson এ যান</h2>
        </div>
        
        
        
        
        `;
        return ;
    }


    for(const word of words){
        const showWord=document.createElement('div');
        // {
// "id": 4,
// "level": 5,
// "word": "Diligent",
// "meaning": "পরিশ্রমী",
// "pronunciation": "ডিলিজেন্ট"
// },
        showWord.innerHTML=`
        <div class="py-12 px-10 bg-white text-center space-y-4">
            <h2 class="font-bold text-[30px]">${word.word ? word.word : "word paya jay naie"}</h2>
            <p class="font-semibold text-[23px]">${word.meaning ?word.meaning: "ortho paya jay naie"} / ${word.pronunciation ? word.pronunciation:"pronunction pay naie"}</p>
            <div class="font-bold text-[25px]">"আগ্রহী / ইগার"</div>

            <div class="flex justify-between  ">
            <button class="bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
            <button class="bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
        </div>

        </div>
        `;
        wordContainer.append(showWord);


    }




}









const displaylessons = (lessons) => {
    // 4 ta kaj kortea hobea pothom to get the containeer  and empty kortea hobea 
    // then sob ta patea hobea for loop dar a paya jabea 
    // then crete element patea hobea  kortea hobea id ba onnu kisu diynamic kortea hotea parea 
    // append manea jog korea ditea hobea 


    const containerBottun = document.getElementById("level-container");
    containerBottun.innerText = '';

    for (const lesson of lessons) {
        const btndiv = document.createElement('div');
        btndiv.innerHTML = `
        <button onclick="wordContainer(${lesson.level_no})" class="btn btn-outline btn-primary ">
        <i class="fa-solid fa-book-open"></i>
                                        Lesson - ${lesson.level_no}</button>`;

       containerBottun.append(btndiv);

    }

};


loadlessons();