
let Symbols = [
    {
        h4Title: 'COPYRIGHT SIGN',
        h1: 'U+000A9',
        h2: '&#xa9;',
        h3: '&#169;', Symbol: '&#169;', h1Main: '&#169;',
        h4: '&copy;',
    },
    {
        h4Title: 'REGISTERED TRADE MARK SIGN',
        h1: 'U+000AE',
        h2: '&#xae;',
        h3: '&#174;', Symbol: '&#174;', h1Main: '&#174;',
        h4: '&reg;',
    },
    {
        h4Title: 'TRADE MARK SIGN',
        h1: 'U+02122',
        h2: '&#x2122;',
        h3: '&#8482;', Symbol: '&#8482;', h1Main: '&#8482;',
        h4: '&trade;',
    },
    {
        h4Title: 'AT SYMBOL',
        h1: 'U+00040',
        h2: '&#x40;',
        h3: '&#64;', Symbol: '&#64;', h1Main: '&#64;',
        h4: '&commat;',
    },
    {
        h4Title: 'PARAGRAPH SIGN',
        h1: 'U+000B6',
        h2: '&#xb6;',
        h3: '&#182;', Symbol: '&#182;', h1Main: '&#182;',
        h4: '&para;',
    },
    {
        h4Title: 'SECTION SIGN',
        h1: 'U+000A7',
        h2: '&#xa7;',
        h3: '&#167;', Symbol: '&#167;', h1Main: '&#167;',
        h4: '&sect;',
    },
    // {
    //     h4Title: '',
    //     h1: '',
    //     h2: '',
    //     h3: '', Symbol: '', h1Main: '',
    //     h4: '',
    // },
];

const compress = () => {
    let rightDiv = document.querySelector('.right-scroll');
    // let counts = document.querySelector('.count');
    let count = 0;
    let count2 = 1;

    const renderRight = () => {

        Symbols.filter(data => {
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
        let ROI = Symbols[getData];

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
        h1.innerText = 'U+000A9';
        h2.innerText = '&#xa9;';
        h3.innerText = '&#169;';
        h4.innerText = '&copy;';
    }

    FrontData();
}

compress();