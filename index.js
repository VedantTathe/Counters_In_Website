const counter = document.querySelectorAll(".counter");

counter.forEach((counter)=>{
    counter.innerHTML = 0;

    const updateCounter = ()=>{
        const targetCount = +counter.getAttribute('target');

        const startingCount = Number(counter.innerHTML);

        const inc = targetCount/100;

        if(startingCount < targetCount)
        {
            counter.innerHTML = `${startingCount + inc}`;
            setTimeout(()=>{
                updateCounter(counter);
            }, 50);
        }
    }

    updateCounter(counter);
})