let en = [
    {h1: '&#169;', title: 'COPYRIGHT SIGN', code1: 'U+000A9', code2: '&#xa9;', code3: '&#169;', code4: '&copy;',},
    
    {title: 'REGISTERED TRADE MARK SIGN ',  code1: 'U+000AE ', code2: '&#xae; ', 
    code3: '&#174; ', h1: '&#174; ', code4: '&reg; ',},

    {title: 'TRADE MARK SIGN ',  code1: 'U+02122 ', code2: '&#x2122; ', 
    code3: '&#8482; ', h1: '&#8482; ', code4: '&trade; ',},

    {title: 'AT SYMBOL ',  code1: 'U+00040 ', code2: '&#x40; ', 
    code3: '&#64; ', h1: ' &#64;', code4: '&commat; ',},

    {title: 'PARAGRAPH SIGN ',  code1: 'U+000B6 ', code2: '&#xb6; ', 
    code3: '&#182; ', h1: '&#182; ', code4: '&para; ',},

    {title: 'SECTION SIGN ',  code1: 'U+000A7 ', code2: '&#xa7; ', 
    code3: '&#167; ', h1: '&#167; ', code4: ' &sect;',},

    {title: 'ACCOUNT OF ',  code1: 'U+02100 ', code2: ' &#x2100;', 
    code3: ' &#8448;', h1: ' &#8448;', code4: ' ',},

    {title: ' ADDRESSED TO THE SUBJECT',  code1: 'U+02101 ', code2: '&#x2101; ', 
    code3: '&#8449; ', h1: '&#8449; ', code4: ' ',},

    {title: 'DOUBLE-STRUCK CAPITAL C ',  code1: 'U+02102 ', code2: '&#x2102; ', 
    code3: '&#8450; ', h1: '&#8450; ', code4: '&Copf; ',},

    {title: 'DEGREE CELSIUS ',  code1: 'U+02103 ', code2: '&#x2103; ', 
    code3: '&#8451; ', h1: '&#8451; ', code4: ' ',},

    {title: ' CENTRE LINE SYMBOL',  code1: 'U+02104 ', code2: '&#x2104; ', 
    code3: '&#8452; ', h1: '&#8452; ', code4: ' ',},

    {title: 'CARE OF ',  code1: 'U+02105 ', code2: '&#x2105; ', 
    code3: '&#8453; ', h1: '&#8453; ', code4: '&incare; ',},

    {title: 'CADA UNA ',  code1: 'U+02106 ', code2: '&#x2106; ', 
    code3: '&#8454; ', h1: '&#8454; ', code4: ' ',},

    {title: 'EULER CONSTANT ',  code1: 'U+02107 ', code2: '&#x2107; ', 
    code3: '&#8455; ', h1: '&#8455; ', code4: ' ',},

    {title: 'SCRUPLE ',  code1: 'U+02108 ', code2: '&#x2108; ', 
    code3: ' &#8456;', h1: ' &#8456;', code4: ' ',},

    {title: 'DEGREE FAHRENHEIT ',  code1: 'U+02109 ', code2: ' &#x2109;', 
    code3: '&#8457; ', h1: ' &#8457;', code4: ' ',},

    {title: ' SCRIPT SMALL G',  code1: 'U+0210A ', code2: ' &#x210A;', 
    code3: '&#8458; ', h1: '&#8458; ', code4: '&gscr; ',},

    {title: 'SCRIPT CAPITAL H ',  code1: 'U+0210B ', code2: '&#x210B; ', 
    code3: ' &#8459;', h1: '&#8459; ', code4: ' &hamilt;',},

    {title: 'BLACK-LETTER CAPITAL H ',  code1: 'U+0210C ', code2: '&#x210C; ', 
    code3: ' &#8460;', h1: '&#8460; ', code4: ' &Hfr;',},

    {title: 'DOUBLE-STRUCK CAPITAL H ',  code1: 'U+0210D ', code2: '&#x210D; ', 
    code3: '&#8461; ', h1: ' &#8461;', code4: '&Hopf; ',},

    {title: 'PLANCK CONSTANT ',  code1: 'U+0210E ', code2: '&#x210E; ', 
    code3: '&#8462; ', h1: '&#8462; ', code4: '&planckh; ',},

    {title: 'PLANCK CONSTANT OVER TWO PI ',  code1: ' U+0210F', code2: '&#x210F; ', 
    code3: '&#8463; ', h1: '&#8463; ', code4: '&planck; ',},

    {title: 'SCRIPT CAPITAL I ',  code1: ' U+02110', code2: ' &#x2110;', 
    code3: ' &#8464;', h1: '&#8464; ', code4: '&Iscr; ',},

    {title: 'BLACK-LETTER CAPITAL I ',  code1: 'U+02111 ', code2: '&#x2111; ', 
    code3: '&#8465; ', h1: '&#8465; ', code4: ' &image;',},

    {title: 'SCRIPT CAPITAL L ',  code1: 'U+02112 ', code2: '&#x2112; ', 
    code3: '&#8466; ', h1: '&#8466; ', code4: '&Lscr; ',},

    {title: 'SCRIPT SMALL L ',  code1: 'U+02113 ', code2: '&#x2113; ', 
    code3: '&#8467; ', h1: '&#8467; ', code4: '&ell; ',},

    {title: 'L B BAR SYMBOL ',  code1: 'U+02114 ', code2: '&#x2114; ', 
    code3: '&#8468; ', h1: '&#8468; ', code4: ' ',},

    {title: 'DOUBLE-STRUCK CAPITAL N ',  code1: 'U+02115 ', code2: '&#x2115; ', 
    code3: '&#8469; ', h1: '&#8469; ', code4: '&Nopf; ',},

    {title: 'NUMERO SIGN ',  code1: 'U+02116 ', code2: '&#x2116; ', 
    code3: '&#8470; ', h1: '&#8470; ', code4: ' &numero;',},

    {title: 'SOUND RECORDING COPYRIGHT ',  code1: 'U+02117 ', code2: '&#x2117; ', 
    code3: ' &#8471;', h1: '&#8471; ', code4: ' &copysr;',},

    {title: 'SCRIPT CAPITAL P ',  code1: 'U+02118 ', code2: ' &#x2118;', 
    code3: '&#8472; ', h1: '&#8472; ', code4: ' &weierp;',},

    {title: 'DOUBLE-STRUCK CAPITAL P ',  code1: 'U+02119 ', code2: '&#x2119; ', 
    code3: '&#8473; ', h1: '&#8473; ', code4: ' &Popf;',},

    {title: 'DOUBLE-STRUCK CAPITAL Q ',  code1: ' U+0211A', code2: '&#x211A; ', 
    code3: '&#8474; ', h1: '&#8474; ', code4: ' &Qopf;',},

    {title: 'SCRIPT CAPITAL R ',  code1: ' U+0211B', code2: '&#x211B; ', 
    code3: ' &#8475;', h1: '&#8475; ', code4: ' &Rscr;',},

    {title: 'BLACK-LETTER CAPITAL R ',  code1: ' U+0211C', code2: '&#x211C; ', 
    code3: '&#8476; ', h1: '&#8476; ', code4: '&real; ',},

    // {title: ' ',  code1: ' ', code2: ' ', 
    // code3: ' ', h1: ' ', code4: ' ',},
]

render();

function render() {
    
    en.filter(data => {
        let div = document.createElement('div');
        div.classList = 'boxes';
        let container = document.querySelector('.body-container');
        container.appendChild(div);

        const textData = data.h1;
        const title = data.title;
        const code1 = data.code1;
        const code2 = data.code2;
        const code3 = data.code3;
        const code4 = data.code4;
        ElementH1(textData, div, title, code1, code2, code3, code4);
    })
}

function ElementH1(data, div, title, code1, code2, code3, code4) {
    let h1 = document.createElement('h1');
    h1.innerHTML = `${data}`;
    div.appendChild(h1);

    let h5 = document.createElement('h5');
    h5.innerText = `${title}`;
    h5.classList = 'title';
    div.appendChild(h5)
//------------------------------------------------------Div
    let divInside = document.createElement('div');
    divInside.id = 'div-1';
    div.appendChild(divInside);

    let divInside2 = document.createElement('div');
    divInside2.id = 'div-2';
    div.appendChild(divInside2);

    let divInside3 = document.createElement('div');
    divInside3.id = 'div-3';
    div.appendChild(divInside3);

    let divInside4 = document.createElement('div');
    divInside4.id = 'div-4';
    div.appendChild(divInside4);
//------------------------------------------------------------------1
    let codeName = document.createElement('h5');
    codeName.innerText = 'UNICODE';
    codeName.classList = 'codeName';
    divInside.appendChild(codeName);

    let code = document.createElement('h2');
    code.innerText = `${code1}`;
    code.classList = 'code';
    divInside.appendChild(code);
//------------------------------------------------------------------2
    let codeName1 = document.createElement('h5');
    codeName1.innerText = 'HEX CODE';
    codeName1.classList = 'codeName';
    divInside2.appendChild(codeName1);

    let codeX = document.createElement('h2');
    codeX.innerText = `${code2}`;
    codeX.classList = 'code';
    divInside2.appendChild(codeX);
//------------------------------------------------------------------>3
    let codeName2 = document.createElement('h5');
    codeName2.innerText = 'HTML CODE';
    codeName2.classList = 'codeName';
    divInside3.appendChild(codeName2);

    let codeXX = document.createElement('h2');
    codeXX.innerText = `${code3}`;
    codeXX.classList = 'code';
    divInside3.appendChild(codeXX);
//------------------------------------------------------------------>4
    let codeName3 = document.createElement('h5');
    codeName3.innerText = 'HTML ENTITY';
    codeName3.classList = 'codeName';
    divInside4.appendChild(codeName3);

    let codeXXX = document.createElement('h2');
    codeXXX.innerText = `${code4}`;
    codeXXX.classList = 'code';
    divInside4.appendChild(codeXXX);
}

