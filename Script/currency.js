let currency = [
    // {
    //     h4Title: '',
    //     h1: '',
    //     h2: '',
    //     h3: '', Symbol: '', h1Main: '',
    //     h4: '',
    // },
]

const compress = () => {
    let rightDiv = document.querySelector('.right-scroll');
    // let counts = document.querySelector('.count');
    let count = 0;
    let count2 = 1;

    const renderRight = () => {

        currency.filter(data => {
            let divBoxes = document.createElement('div');
            divBoxes.classList = 'boxes';
            divBoxes.onclick = nextData;
            divBoxes.id = count;
            rightDiv.appendChild(divBoxes);

            let mainH1 = document.createElement('h1');
            mainH1.innerHTML = data.Symbol;
            divBoxes.appendChild(mainH1);
            
            let counts = document.createElement('span');
            counts.classList = 'count';
            counts.textContent = count2;
            counts.id = count;
            divBoxes.appendChild(counts)
            count2++;
            count++;
        });
    }

    const rend = document.querySelector('.render');
    const title = document.getElementById('title');
    const code1 = document.getElementById('h1');
    const code2 = document.getElementById('h2');
    const code3 = document.getElementById('h3');
    const code4 = document.getElementById('h4');
    const p1 = document.getElementById('p1');
    const p2 = document.getElementById('p2');
    const p3 = document.getElementById('p3');
    const p4 = document.getElementById('p4');

    console.log(rend)

    const nextData = (e) => {
        let getData = e.currentTarget.id;
        let ROI = currency[getData];

        console.log(getData)

        rend.innerHTML = ROI.h1Main;
        title.innerText = ROI.h4Title
        code1.innerText = ROI.h1;
        code2.innerText = ROI.h2;
        code3.innerText = ROI.h3;
        code4.innerText = ROI.h4;
    }

    renderRight();

    const FrontData = () => {
        let h1 = document.getElementById('h1');
        let h2 = document.getElementById('h2');
        let h3 = document.getElementById('h3');
        let h4 = document.getElementById('h4');
        h1.innerText = 'U+02190';
        h2.innerText = '&#x2190;';
        h3.innerText = '&#8592;';
        h4.innerText = '&larr;';
    }

    FrontData();
}

compress();