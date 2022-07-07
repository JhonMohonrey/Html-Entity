
let letter = [
    {
        h4Title: 'UPPERCASE A',
        h1: 'U+00041',
        h2: '&#x41;',
        h3: '&#65;', Symbol: '&#65;', h1Main: '&#65;',
        h4: '',
    },
    {
        h4Title: 'UPPERCASE B',
        h1: 'U+00042',
        h2: '&#x42;',
        h3: '&#66;', Symbol: '&#66;', h1Main: '&#66;',
        h4: '',
    },
    {
        h4Title: 'UPPERCASE C',
        h1: 'U+00043',
        h2: '&#x43;',
        h3: '&#67;', Symbol: '&#67;', h1Main: '&#67;',
        h4: '',
    },
    {
        h4Title: 'UPPERCASE D',
        h1: 'U+00044',
        h2: '&#x44;',
        h3: '&#68;', Symbol: '&#68;', h1Main: '&#68;',
        h4: '',
    },
    {
        h4Title: 'UPPERCASE E',
        h1: 'U+00045',
        h2: '&#x45;',
        h3: '&#69;', Symbol: '&#69;', h1Main: '&#69;',
        h4: '',
    },
    {
        h4Title: 'UPPERCASE F',
        h1: 'U+00046',
        h2: '&#x46;',
        h3: '&#70;', Symbol: '&#70;', h1Main: '&#70;',
        h4: '',
    },
    {
        h4Title: 'UPPERCASE G',
        h1: 'U+00047',
        h2: '&#x47;',
        h3: '&#71;', Symbol: '&#71;', h1Main: '&#71;',
        h4: '',
    },
    {
        h4Title: 'UPPERCASE H',
        h1: 'U+00048',
        h2: '&#x48;',
        h3: '&#72;', Symbol: '&#72;', h1Main: '&#72;',
        h4: '',
    },
    {
        h4Title: 'UPPERCASE I',
        h1: 'U+00049',
        h2: '&#x49;',
        h3: '&#73;', Symbol: '&#73;', h1Main: '&#73;',
        h4: '',
    },
    {
        h4Title: 'UPPERCASE J',
        h1: 'U+0004A',
        h2: '&#x4a;',
        h3: '&#74;', Symbol: '&#74;', h1Main: '&#74;',
        h4: '',
    },
    {
        h4Title: 'UPPERCASE K',
        h1: 'U+0004B',
        h2: '&#x4b;',
        h3: '&#75;', Symbol: '&#75;', h1Main: '&#75;',
        h4: '',
    },
    {
        h4Title: 'UPPERCASE L',
        h1: 'U+0004C',
        h2: '&#x4c;',
        h3: '&#76;', Symbol: '&#76;', h1Main: '&#76;',
        h4: '',
    },
    {
        h4Title: 'UPPERCASE M',
        h1: 'U+0004D',
        h2: '&#x4d;',
        h3: '&#77;', Symbol: '&#77;', h1Main: '&#77;',
        h4: '',
    },
    {
        h4Title: 'UPPERCASE N',
        h1: 'U+0004E',
        h2: '&#x4e;',
        h3: '&#78;', Symbol: '&#78;', h1Main: '&#78;',
        h4: '',
    },
    {
        h4Title: 'UPPERCASE O',
        h1: 'U+0004F',
        h2: '&#x4f;',
        h3: '&#79;', Symbol: '&#79;', h1Main: '&#79;',
        h4: '',
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

        letter.filter(data => {
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
        let ROI = letter[getData];

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
        h1.innerText = 'U+00041';
        h2.innerText = '&#x41;';
        h3.innerText = '&#65;';
        h4.innerText = '';
    }

    FrontData();
}

compress();