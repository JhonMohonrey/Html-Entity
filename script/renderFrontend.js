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

    {title: 'DOUBLE-STRUCK CAPITAL R ',  code1: 'U+0211D ', code2: '&#x211D; ', 
    code3: '&#8477; ', h1: '&#8477; ', code4: '&Ropf; ',},

    {title: 'PRESCRIPTION TAKE ',  code1: 'U+0211E ', code2: '&#x211E; ', 
    code3: '&#8478; ', h1: '&#8478; ', code4: ' &rx;',},

    {title: 'RESPONSE ',  code1: ' U+0211F', code2: '&#x211F; ', 
    code3: '&#8479; ', h1: '&#8479; ', code4: ' ',},

    {title: 'SERVICE MARK ',  code1: 'U+02120 ', code2: '&#x2120; ', 
    code3: ' &#8480;', h1: '&#8480; ', code4: ' ',},

    {title: 'TELEPHONE SIGN ',  code1: 'U+02121 ', code2: '&#x2121; ', 
    code3: '&#8481; ', h1: '&#8481; ', code4: ' ',},

    {title: 'VERSICLE ',  code1: 'U+02123 ', code2: '&#x2123; ', 
    code3: ' &#8483;', h1: '&#8483; ', code4: ' ',},

    {title: 'DOUBLE-STRUCK CAPITAL Z ',  code1: ' U+02124', code2: '&#x2124; ', 
    code3: '&#8484; ', h1: '&#8484; ', code4: '&Zopf; ',},

    {title: 'OUNCE SIGN ',  code1: 'U+02125 ', code2: '&#x2125; ', 
    code3: ' &#8485;', h1: ' &#8485;', code4: ' ',},

    {title: 'OHM SIGN ',  code1: ' U+02126', code2: '&#x2126; ', 
    code3: '&#8486; ', h1: '&#8486; ', code4: ' ',},

    {title: 'INVERTED OHM SIGN ',  code1: 'U+02127 ', code2: '&#x2127; ', 
    code3: '&#8487; ', h1: '&#8487; ', code4: '&mho; ',},

    {title: 'BLACK-LETTER CAPITAL Z ',  code1: 'U+02128 ', code2: '&#x2128; ', 
    code3: ' &#8488;', h1: '&#8488; ', code4: '&Zfr; ',},

    {title: 'TURNED GREEK SMALL LETTER IOTA ',  code1: 'U+02129 ', code2: ' &#x2129;', 
    code3: '&#8489; ', h1: '&#8489; ', code4: '&iiota; ',},

    {title: ' KELVIN SIGN',  code1: 'U+0212A ', code2: '&#x212A; ', 
    code3: '&#8490; ', h1: '&#8490; ', code4: ' ',},

    {title: ' ANGSTROM SIGN',  code1: 'U+0212B ', code2: '&#x212B; ', 
    code3: '&#8491; ', h1: '&#8491; ', code4: ' ',},

    {title: 'SCRIPT CAPITAL B ',  code1: 'U+0212C ', code2: '&#x212C; ', 
    code3: ' &#8492;', h1: '&#8492; ', code4: '&bernou; ',},

    {title: ' BLACK-LETTER CAPITAL C',  code1: 'U+0212D ', code2: ' &#x212D;', 
    code3: '&#8493; ', h1: '&#8493; ', code4: '&Cfr; ',},

    {title: 'ESTIMATED SYMBOL ',  code1: 'U+0212E ', code2: '&#x212E; ', 
    code3: '&#8494; ', h1: '&#8494; ', code4: ' ',},

    {title: 'SCRIPT SMALL E ',  code1: 'U+0212F ', code2: '&#x212F; ', 
    code3: ' &#8495;', h1: '&#8495; ', code4: '&escr; ',},

    {title: 'SCRIPT CAPITAL E ',  code1: ' U+02130', code2: '&#x2130; ', 
    code3: ' &#8496;', h1: '&#8496; ', code4: '&Escr; ',},

    {title: 'SCRIPT CAPITAL F ',  code1: 'U+02131 ', code2: '&#x2131; ', 
    code3: '&#8497; ', h1: '&#8497; ', code4: ' &Fscr;',},

    {title: 'TURNED CAPITAL F ',  code1: 'U+02132 ', code2: '&#x2132; ', 
    code3: '&#8498; ', h1: '&#8498; ', code4: ' ',},

    {title: 'SCRIPT CAPITAL M ',  code1: 'U+02133 ', code2: '&#x2133; ', 
    code3: '&#8499; ', h1: '&#8499; ', code4: '&Mscr; ',},

    {title: 'SCRIPT SMALL O ',  code1: 'U+02134 ', code2: '&#x2134; ', 
    code3: '&#8500; ', h1: '&#8500; ', code4: '&oscr; ',},

    {title: 'ALEF SYMBOL ',  code1: 'U+02135 ', code2: '&#x2135; ', 
    code3: '&#8501; ', h1: ' &#8501;', code4: '&alefsym; ',},

    {title: 'BET SYMBOL ',  code1: 'U+02136 ', code2: '&#x2136; ', 
    code3: '&#8502; ', h1: '&#8502; ', code4: '&beth; ',},

    {title: 'GIMEL SYMBOL ',  code1: 'U+02137 ', code2: '&#x2137; ', 
    code3: ' &#8503;', h1: '&#8503; ', code4: '&gimel; ',},

    {title: 'DALET SYMBOL ',  code1: 'U+02138 ', code2: ' &#x2138;', 
    code3: ' &#8504;', h1: '&#8504; ', code4: '&daleth; ',},

    {title: 'INFORMATION SOURCE ',  code1: 'U+02139 ', code2: ' &#x2139;', 
    code3: '&#8505; ', h1: '&#8505; ', code4: ' ',},

    {title: 'ROTATED CAPITAL Q ',  code1: 'U+0213A ', code2: '&#x213A; ', 
    code3: '&#8506; ', h1: '&#8506; ', code4: ' ',},

    {title: 'FACSIMILE SIGN ',  code1: 'U+0213B ', code2: '&#x213B; ', 
    code3: '&#8507; ', h1: ' &#8507;', code4: ' ',},

    {title: 'DOUBLE-STRUCK SMALL PI ',  code1: ' U+0213C', code2: ' &#x213C;', 
    code3: '&#8508; ', h1: '&#8508; ', code4: ' ',},

    {title: 'DOUBLE-STRUCK SMALL GAMMA ',  code1: 'U+0213D ', code2: ' &#x213D;', 
    code3: ' &#8509;', h1: '&#8509; ', code4: ' ',},

    {title: 'DOUBLE-STRUCK CAPITAL GAMMA ',  code1: 'U+0213E ', code2: '&#x213E; ', 
    code3: '&#8510; ', h1: '&#8510; ', code4: ' ',},

    {title: 'DOUBLE-STRUCK CAPITAL PI ',  code1: 'U+0213F ', code2: '&#x213F; ', 
    code3: '&#8511; ', h1: '&#8511; ', code4: ' ',},

    {title: 'DOUBLE-STRUCK N-ARY SUMMATION ',  code1: 'U+02140 ', code2: '&#x2140; ', 
    code3: '&#8512; ', h1: '&#8512; ', code4: ' ',},

    {title: ' TURNED SANS-SERIF CAPITAL G',  code1: 'U+02141 ', code2: '&#x2141; ', 
    code3: '&#8513; ', h1: '&#8513; ', code4: ' ',},

    {title: ' TURNED SANS-SERIF CAPITAL L',  code1: 'U+02142 ', code2: '&#x2142; ', 
    code3: '&#8514; ', h1: '&#8514; ', code4: ' ',},

    {title: 'REVERSED SANS-SERIF CAPITAL L ',  code1: 'U+02143 ', code2: '&#x2143; ', 
    code3: '&#8515; ', h1: '&#8515; ', code4: ' ',},

    {title: 'TURNED SANS-SERIF CAPITAL Y ',  code1: 'U+02144 ', code2: '&#x2144; ', 
    code3: ' &#8516;', h1: '&#8516; ', code4: ' ',},

    {title: 'DOUBLE-STRUCK ITALIC CAPITAL D ',  code1: 'U+02145 ', code2: '&#x2145; ', 
    code3: '&#8517; ', h1: '&#8517; ', code4: ' &DD;',},

    {title: 'DOUBLE-STRUCK ITALIC SMALL D ',  code1: 'U+02146 ', code2: '&#x2146; ', 
    code3: '&#8518; ', h1: '&#8518; ', code4: '&dd; ',},

    {title: 'DOUBLE-STRUCK ITALIC SMALL E ',  code1: 'U+02147 ', code2: '&#x2147; ', 
    code3: '&#8519; ', h1: '&#8519; ', code4: '&ee; ',},

    {title: 'DOUBLE-STRUCK ITALIC SMALL I ',  code1: 'U+02148 ', code2: '&#x2148; ', 
    code3: '&#8520; ', h1: '&#8520; ', code4: '&ii; ',},

    {title: 'DOUBLE-STRUCK ITALIC SMALL J ',  code1: 'U+02149 ', code2: '&#x2149; ', 
    code3: ' &#8521;', h1: '&#8521; ', code4: ' ',},

    {title: 'PROPERTY LINE ',  code1: 'U+0214A ', code2: '&#x214A; ', 
    code3: '&#8522; ', h1: '&#8522; ', code4: ' ',},

    {title: 'TURNED AMPERSAND ',  code1: 'U+0214B ', code2: '&#x214B; ', 
    code3: ' &#8523;', h1: '&#8523; ', code4: ' ',},

    {title: 'AKTIESELSKAB ',  code1: 'U+0214D ', code2: '&#x214D; ', 
    code3: '&#8525; ', h1: '&#8525; ', code4: ' ',},

    {title: 'TURNED SMALL F ',  code1: 'U+0214E ', code2: '&#x214E; ', 
    code3: '&#8526; ', h1: '&#8526; ', code4: ' ',},

    {title: 'BLACK SUN WITH RAYS ',  code1: ' U+02600', code2: '&#x2600; ', 
    code3: ' &#9728;', h1: '&#9728; ', code4: ' ',},

    {title: 'CLOUD ',  code1: ' U+02601', code2: '&#x2601; ', 
    code3: '&#9729; ', h1: '&#9729; ', code4: ' ',},

    {title: 'UMBRELLA ',  code1: 'U+02602 ', code2: '&#x2602; ', 
    code3: '&#9730; ', h1: '&#9730; ', code4: ' ',},

    {title: 'SNOWMAN ',  code1: 'U+02603 ', code2: '&#x2603; ', 
    code3: '&#9731; ', h1: '&#9731; ', code4: ' ',},

    {title: 'COMET ',  code1: ' U+02604', code2: ' &#x2604;', 
    code3: '&#9732; ', h1: '&#9732; ', code4: ' ',},

    {title: 'BLACK STAR ',  code1: 'U+02605 ', code2: '&#x2605; ', 
    code3: '&#9733; ', h1: '&#9733; ', code4: '&starf; ',},

    {title: 'WHITE STAR ',  code1: ' U+02606', code2: '&#x2606; ', 
    code3: '&#9734; ', h1: '&#9734; ', code4: '&star; ',},

    {title: 'LIGHTNING ',  code1: 'U+02607 ', code2: '&#x2607; ', 
    code3: '&#9735; ', h1: ' &#9735;', code4: ' ',},

    {title: 'THUNDERSTORM ',  code1: ' U+02608', code2: '&#x2608; ', 
    code3: '&#9736; ', h1: '&#9736; ', code4: ' ',},

    {title: 'SUN ',  code1: 'U+02609 ', code2: '&#x2609; ', 
    code3: '&#9737; ', h1: '&#9737; ', code4: ' ',},

    {title: 'ASCENDING NODE ',  code1: 'U+0260A ', code2: '&#x260A; ', 
    code3: '&#9738; ', h1: ' &#9738;', code4: ' ',},

    {title: 'DESCENDING NODE ',  code1: 'U+0260B ', code2: '&#x260B; ', 
    code3: '&#9739; ', h1: '&#9739; ', code4: ' ',},

    {title: 'CONJUNCTION ',  code1: 'U+0260C ', code2: '&#x260C; ', 
    code3: '&#9740; ', h1: '&#9740; ', code4: ' ',},

    {title: 'OPPOSITION ',  code1: 'U+0260D ', code2: '&#x260D; ', 
    code3: '&#9741; ', h1: '&#9741; ', code4: ' ',},

    {title: 'BLACK TELEPHONE ',  code1: 'U+0260E ', code2: '&#x260E; ', 
    code3: '&#9742; ', h1: '&#9742; ', code4: '&phone; ',},

    {title: 'WHITE TELEPHONE ',  code1: 'U+0260F ', code2: '&#x260F; ', 
    code3: '&#9743;', h1: '&#9743; ', code4: ' ',},

    {title: 'BALLOT BOX ',  code1: 'U+02610 ', code2: '&#x2610; ', 
    code3: '&#9744; ', h1: '&#9744; ', code4: ' ',},

    {title: 'BALLOT BOX WITH CHECK ',  code1: ' U+02611', code2: '&#x2611; ', 
    code3: ' &#9745;', h1: '&#9745; ', code4: ' ',},

    {title: 'BALLOT BOX WITH X ',  code1: 'U+02612 ', code2: '&#x2612; ', 
    code3: '&#9746; ', h1: '&#9746; ', code4: ' ',},

    {title: 'SALTIRE ',  code1: 'U+02613 ', code2: '&#x2613; ', 
    code3: '&#9747; ', h1: '&#9747; ', code4: ' ',},

    {title: 'WHITE SHOGI PIECE ',  code1: ' U+02616', code2: '&#x2616; ', 
    code3: ' &#9750;', h1: '&#9750; ', code4: ' ',},

    {title: 'BLACK SHOGI PIECE ',  code1: 'U+02617 ', code2: '&#x2617; ', 
    code3: '&#9751; ', h1: '&#9751; ', code4: ' ',},

    {title: 'SHAMROCK ',  code1: 'U+02618 ', code2: ' &#x2618;', 
    code3: '&#9752; ', h1: '&#9752; ', code4: ' ',},

    {title: ' REVERSED ROTATED FLORAL HEART BULLET',  code1: 'U+02619 ', code2: '&#x2619; ', 
    code3: '&#9753; ', h1: '&#9753; ', code4: ' ',},

    {title: 'BLACK LEFT POINTING INDEX ',  code1: 'U+0261A ', code2: '&#x261A; ', 
    code3: '&#9754; ', h1: '&#9754; ', code4: ' ',},

    {title: 'BLACK RIGHT POINTING INDEX ',  code1: 'U+0261B ', code2: '&#x261B; ', 
    code3: '&#9755; ', h1: '&#9755; ', code4: ' ',},

    {title: 'WHITE LEFT POINTING INDEX ',  code1: 'U+0261C ', code2: ' &#x261C;', 
    code3: '&#9756; ', h1: '&#9756; ', code4: ' ',},

    {title: 'WHITE UP POINTING INDEX ',  code1: 'U+0261D ', code2: '&#x261D; ', 
    code3: '&#9757; ', h1: '&#9757; ', code4: ' ',},

    {title: 'WHITE RIGHT POINTING INDEX ',  code1: 'U+0261E ', code2: ' &#x261E;', 
    code3: '&#9758; ', h1: '&#9758; ', code4: ' ',},

    {title: 'WHITE DOWN POINTING INDEX ',  code1: ' U+0261F', code2: '&#x261F; ', 
    code3: '&#9759; ', h1: '&#9759; ', code4: ' ',},

    {title: ' SKULL AND CROSSBONES',  code1: ' U+02620', code2: '&#x2620; ', 
    code3: '&#9760; ', h1: '&#9760; ', code4: ' ',},

    {title: ' CAUTION SIGN',  code1: 'U+02621 ', code2: '&#x2621; ', 
    code3: '&#9761; ', h1: '&#9761; ', code4: ' ',},

    {title: 'RADIOACTIVE SIGN ',  code1: 'U+02622 ', code2: '&#x2622; ', 
    code3: ' &#9762;', h1: ' &#9762;', code4: ' ',},

    {title: 'BIOHAZARD SIGN ',  code1: 'U+02623 ', code2: '&#x2623; ', 
    code3: '&#9763; ', h1: '&#9763; ', code4: ' ',},

    {title: 'CADUCEUS ',  code1: 'U+02624 ', code2: '&#x2624; ', 
    code3: '&#9764; ', h1: '&#9764; ', code4: ' ',},

    {title: 'ANKH ',  code1: ' U+02625', code2: '&#x2625; ', 
    code3: '&#9765; ', h1: '&#9765; ', code4: ' ',},

    {title: 'ORTHODOX CROSS ',  code1: 'U+02626 ', code2: '&#x2626; ', 
    code3: '&#9766; ', h1: '&#9766; ', code4: ' ',},

    {title: 'CHI RHO ',  code1: 'U+02627 ', code2: '&#x2627; ', 
    code3: '&#9767; ', h1: '&#9767; ', code4: ' ',},

    {title: 'CROSS OF LORRAINE ',  code1: 'U+02628 ', code2: '&#x2628; ', 
    code3: '&#9768; ', h1: '&#9768; ', code4: ' ',},

    {title: 'CROSS OF JERUSALEM ',  code1: 'U+02629 ', code2: '&#x2629; ', 
    code3: '&#9769; ', h1: ' &#9769;', code4: ' ',},

    {title: ' STAR AND CRESCENT',  code1: 'U+0262A ', code2: '&#x262A; ', 
    code3: '&#9770; ', h1: '&#9770; ', code4: ' ',},

    {title: 'FARSI SYMBOL ',  code1: 'U+0262B ', code2: '&#x262B; ', 
    code3: '&#9771; ', h1: '&#9771; ', code4: ' ',},

    {title: 'ADI SHAKTI ',  code1: 'U+0262C ', code2: '&#x262C; ', 
    code3: '&#9772; ', h1: '&#9772; ', code4: ' ',},

    {title: 'HAMMER AND SICKLE ',  code1: 'U+0262D ', code2: '&#x262D; ', 
    code3: '&#9773; ', h1: '&#9773; ', code4: ' ',},

    {title: 'PEACE SYMBOL ',  code1: 'U+0262E ', code2: '&#x262E; ', 
    code3: '&#9774; ', h1: ' &#9774;', code4: ' ',},

    {title: 'YIN YANG ',  code1: 'U+0262F ', code2: '&#x262F; ', 
    code3: '&#9775; ', h1: '&#9775; ', code4: ' ',},

    {title: 'TRIGRAM FOR HEAVEN ',  code1: 'U+02630 ', code2: '&#x2630; ', 
    code3: '&#9776; ', h1: '&#9776; ', code4: ' ',},

    {title: 'TRIGRAM FOR LAKE ',  code1: 'U+02631 ', code2: '&#x2631; ', 
    code3: '&#9777; ', h1: '&#9777; ', code4: ' ',},

    {title: 'TRIGRAM FOR FIRE ',  code1: 'U+02632 ', code2: '&#x2632; ', 
    code3: '&#9778; ', h1: '&#9778; ', code4: ' ',},

    {title: 'TRIGRAM FOR THUNDER ',  code1: 'U+02633 ', code2: '&#x2633; ', 
    code3: '&#9779; ', h1: '&#9779; ', code4: ' ',},

    {title: 'TRIGRAM FOR WIND ',  code1: 'U+02634 ', code2: '&#x2634; ', 
    code3: '&#9780; ', h1: '&#9780; ', code4: ' ',},

    {title: 'TRIGRAM FOR WATER ',  code1: 'U+02635 ', code2: '&#x2635; ', 
    code3: '&#9781; ', h1: '&#9781; ', code4: ' ',},

    {title: 'TRIGRAM FOR MOUNTAIN ',  code1: 'U+02636 ', code2: '&#x2636; ', 
    code3: '&#9782; ', h1: '&#9782; ', code4: ' ',},

    {title: 'TRIGRAM FOR EARTH ',  code1: 'U+02637 ', code2: '&#x2637; ', 
    code3: '&#9783; ', h1: '&#9783; ', code4: ' ',},

    {title: 'WHEEL OF DHARMA ',  code1: 'U+02638 ', code2: '&#x2638; ', 
    code3: ' &#9784;', h1: '&#9784; ', code4: ' ',},

    {title: 'WHITE FROWNING FACE ',  code1: 'U+02639 ', code2: ' &#x2639;', 
    code3: '&#9785; ', h1: '&#9785; ', code4: ' ',},

    {title: 'WHITE SMILING FACE ',  code1: 'U+0263A ', code2: '&#x263A; ', 
    code3: '&#9786; ', h1: ' &#9786;', code4: ' ',},

    {title: 'BLACK SMILING FACE ',  code1: 'U+0263B ', code2: '&#x263B; ', 
    code3: '&#9787; ', h1: '&#9787; ', code4: ' ',},

    {title: 'WHITE SUN WITH RAYS ',  code1: 'U+0263C ', code2: '&#x263C; ', 
    code3: '&#9788; ', h1: '&#9788; ', code4: ' ',},

    {title: 'FIRST QUARTER MOON ',  code1: 'U+0263D ', code2: '&#x263D; ', 
    code3: ' &#9789;', h1: '&#9789; ', code4: ' ',},

    {title: 'LAST QUARTER MOON ',  code1: 'U+0263E ', code2: '&#x263E; ', 
    code3: '&#9790; ', h1: '&#9790; ', code4: ' ',},

    {title: 'MERCURY ',  code1: ' U+0263F', code2: '&#x263F; ', 
    code3: '&#9791; ', h1: '&#9791; ', code4: ' ',},

    {title: 'FEMALE SIGN ',  code1: 'U+02640 ', code2: '&#x2640; ', 
    code3: '&#9792; ', h1: '&#9792; ', code4: '&female; ',},

    {title: 'EARTH ',  code1: 'U+02641 ', code2: '&#x2641; ', 
    code3: '&#9793; ', h1: '&#9793; ', code4: ' ',},

    {title: 'MALE SIGN ',  code1: 'U+02642 ', code2: '&#x2642; ', 
    code3: '&#9794; ', h1: '&#9794; ', code4: ' &male;',},

    {title: ' JUPITER',  code1: 'U+02643 ', code2: '&#x2643; ', 
    code3: ' &#9795;', h1: '&#9795; ', code4: ' ',},

    {title: 'SATURN ',  code1: 'U+02644 ', code2: '&#x2644; ', 
    code3: '&#9796; ', h1: ' &#9796;', code4: ' ',},

    {title: 'URANUS ',  code1: 'U+02645 ', code2: '&#x2645; ', 
    code3: ' &#9797;', h1: '&#9797; ', code4: ' ',},

    {title: 'NEPTUNE ',  code1: 'U+02646 ', code2: '&#x2646; ', 
    code3: '&#9798; ', h1: '&#9798; ', code4: ' ',},

    {title: 'PLUTO ',  code1: 'U+02647 ', code2: '&#x2647; ', 
    code3: '&#9799; ', h1: '&#9799; ', code4: ' ',},

    {title: 'WHITE CHESS KING ',  code1: 'U+02654 ', code2: '&#x2654; ', 
    code3: '&#9812; ', h1: ' &#9812;', code4: ' ',},

    {title: ' WHITE CHESS QUEEN',  code1: 'U+02655 ', code2: '&#x2655; ', 
    code3: ' &#9813;', h1: ' &#9813;', code4: ' ',},

    {title: 'WHITE CHESS ROOK ',  code1: 'U+02656', code2: '&#x2656;', 
    code3: '&#9814; ', h1: '&#9814; ', code4: ' ',},

    {title: 'WHITE CHESS BISHOP ',  code1: 'U+02657 ', code2: '&#x2657; ', 
    code3: '&#9815; ', h1: '&#9815; ', code4: ' ',},

    {title: 'WHITE CHESS KNIGHT ',  code1: 'U+02658 ', code2: '&#x2658; ', 
    code3: '&#9816; ', h1: '&#9816; ', code4: ' ',},

    {title: 'WHITE CHESS PAWN ',  code1: 'U+02659 ', code2: '&#x2659; ', 
    code3: '&#9817; ', h1: '&#9817; ', code4: ' ',},

    {title: 'BLACK CHESS KING ',  code1: 'U+0265A ', code2: '&#x265A; ', 
    code3: '&#9818; ', h1: '&#9818; ', code4: ' ',},

    {title: 'BLACK CHESS QUEEN ',  code1: 'U+0265B ', code2: '&#x265B; ', 
    code3: '&#9819; ', h1: '&#9819; ', code4: ' ',},

    {title: 'BLACK CHESS ROOK ',  code1: 'U+0265C ', code2: '&#x265C; ', 
    code3: '&#9820; ', h1: '&#9820; ', code4: ' ',},

    {title: 'BLACK CHESS BISHOP ',  code1: 'U+0265D ', code2: '&#x265D; ', 
    code3: '&#9821; ', h1: '&#9821; ', code4: ' ',},

    {title: 'BLACK CHESS KNIGHT ',  code1: 'U+0265E ', code2: '&#x265E; ', 
    code3: '&#9822; ', h1: ' &#9822;', code4: ' ',},

    {title: 'BLACK CHESS PAWN ',  code1: 'U+0265F ', code2: '&#x265F; ', 
    code3: ' &#9823;', h1: '&#9823; ', code4: ' ',},

    {title: 'BLACK SPADE SUIT',  code1: 'U+02660', code2: '&#x2660;', 
    code3: '&#9824;', h1: '&#9824;', code4: '&spades;',},

    {title: 'WHITE HEART SUIT',  code1: 'U+02661', code2: '&#x2661;', 
    code3: '&#9825;', h1: '&#9825;', code4: '',},

    {title: 'WHITE DIAMOND SUIT',  code1: 'U+02662', code2: '&#x2662;', 
    code3: '&#9826;', h1: '&#9826;', code4: '',},

    {title: 'BLACK CLUB SUIT',  code1: 'U+02663', code2: '&#x2663;', 
    code3: '&#9827;', h1: '&#9827;', code4: '&clubs;',},

    {title: 'WHITE SPADE SUIT',  code1: 'U+02664', code2: '&#x2664;', 
    code3: '&#9828;', h1: '&#9828;', code4: '',},

    {title: 'BLACK HEART SUIT',  code1: 'U+02665', code2: '&#x2665;', 
    code3: '&#9829;', h1: '&#9829;', code4: '&hearts;',},

    {title: 'BLACK DIAMOND SUIT',  code1: 'U+02666', code2: '&#x2666;', 
    code3: '&#9830;', h1: '&#9830;', code4: '&diams;',},

    {title: 'WHITE CLUB SUIT',  code1: 'U+02667', code2: '&#x2667;', 
    code3: '&#9831;', h1: '&#9831;', code4: '',},

    {title: 'HOT SPRINGS',  code1: 'U+02668', code2: '&#x2668;', 
    code3: '&#9832;', h1: '&#9832;', code4: '',},

    {title: 'QUARTER NOTE',  code1: 'U+02669', code2: '&#x2669;', 
    code3: '&#9833;', h1: '&#9833;', code4: '',},

    {title: 'EIGHTH NOTE',  code1: 'U+0266A', code2: '&#x266A;', 
    code3: '&#9834;', h1: '&#9834;', code4: '&sung;',},

    {title: 'BEAMED EIGHTH NOTES',  code1: 'U+0266B', code2: '&#x266B;', 
    code3: '&#9835;', h1: '&#9835;', code4: '',},

    {title: 'BEAMED SIXTEENTH NOTES',  code1: 'U+0266C', code2: '&#x266C;', 
    code3: '&#9836;', h1: '&#9836;', code4: '',},

    {title: 'MUSIC FLAT SIGN',  code1: 'U+0266D', code2: '&#x266D;', 
    code3: '&#9837;', h1: '&#9837;', code4: '&flat;',},

    {title: 'MUSIC NATURAL SIGN',  code1: 'U+0266E', code2: '&#x266E;', 
    code3: '&#9838;', h1: '&#9838;', code4: '&natural;',},

    {title: 'MUSIC SHARP SIGN',  code1: 'U+0266F', code2: '&#x266F;', 
    code3: '&#9839;', h1: '&#9839;', code4: '&sharp;',},

    {title: 'WEST SYRIAC CROSS',  code1: 'U+02670', code2: '&#x2670;', 
    code3: '&#9840;', h1: '&#9840;', code4: '',},

    {title: 'EAST SYRIAC CROSS',  code1: 'U+02671', code2: '&#x2671;', 
    code3: '&#9841;', h1: '&#9841;', code4: '',},

    {title: 'UNIVERSAL RECYCLING SYMBOL',  code1: 'U+02672', code2: '&#x2672;', 
    code3: '&#9842;', h1: '&#9842;', code4: '',},

    {title: 'RECYCLING SYMBOL FOR TYPE-1 PLASTICS',  code1: 'U+02673', code2: '&#x2673;', 
    code3: '&#9843;', h1: '&#9843;', code4: '',},

    {title: 'RECYCLING SYMBOL FOR TYPE-2 PLASTICS',  code1: 'U+02674', code2: '&#x2674;', 
    code3: '&#9844;', h1: '&#9844;', code4: '',},

    {title: 'RECYCLING SYMBOL FOR TYPE-3 PLASTICS',  code1: 'U+02675', code2: '&#x2675;', 
    code3: '&#9845;', h1: '&#9845;', code4: '',},

    {title: 'RECYCLING SYMBOL FOR TYPE-4 PLASTICS',  code1: 'U+02676', code2: '&#x2676;', 
    code3: '&#9846;', h1: '&#9846;', code4: '',},

    {title: 'RECYCLING SYMBOL FOR TYPE-5 PLASTICS',  code1: 'U+02677', code2: '&#x2677;', 
    code3: '&#9847;', h1: '&#9847;', code4: '',},

    {title: 'RECYCLING SYMBOL FOR TYPE-6 PLASTICS',  code1: 'U+02678', code2: '&#x2678;', 
    code3: '&#9848;', h1: '&#9848;', code4: '',},

    {title: 'RECYCLING SYMBOL FOR TYPE-7 PLASTICS',  code1: 'U+02679', code2: '&#x2679;', 
    code3: '&#9849;', h1: '&#9849;', code4: '',},

    {title: 'RECYCLING SYMBOL FOR GENERIC MATERIALS',  code1: 'U+0267A', code2: '&#x267A;', 
    code3: '&#9850;', h1: '&#9850;', code4: '',},

    {title: 'BLACK UNIVERSAL RECYCLING SYMBOL',  code1: 'U+0267B', code2: '&#x267B;', 
    code3: '&#9851;', h1: '&#9851;', code4: '',},

    {title: 'RECYCLED PAPER SYMBOL',  code1: 'U+0267C', code2: '&#x267C;', 
    code3: '&#9852;', h1: '&#9852;', code4: '',},

    {title: 'PARTIALLY-RECYCLED PAPER SYMBOL',  code1: 'U+0267D', code2: '&#x267D;', 
    code3: '&#9853;', h1: '&#9853;', code4: '',},

    {title: 'PERMANENT PAPER SIGN',  code1: 'U+0267E', code2: '&#x267E;', 
    code3: '&#9854;', h1: '&#9854;', code4: '',},

    {title: 'DIE FACE-1',  code1: 'U+02680', code2: '&#x2680;', 
    code3: '&#9856;', h1: '&#9856;', code4: '',},

    {title: 'DIE FACE-2',  code1: 'U+02681', code2: '&#x2681;', 
    code3: '&#9857;', h1: '&#9857;', code4: '',},

    {title: 'DIE FACE-3',  code1: 'U+02682', code2: '&#x2682;', 
    code3: '&#9858;', h1: '&#9858;', code4: '',},

    {title: 'DIE FACE-4',  code1: 'U+02683', code2: '&#x2683;', 
    code3: '&#9859;', h1: '&#9859;', code4: '',},

    {title: 'DIE FACE-5',  code1: 'U+02684', code2: '&#x2684;', 
    code3: '&#9860;', h1: '&#9860;', code4: '',},

    {title: 'DIE FACE-6',  code1: 'U+02685', code2: '&#x2685;', 
    code3: '&#9861;', h1: '&#9861;', code4: '',},

    {title: 'WHITE CIRCLE WITH DOT RIGHT',  code1: 'U+02686', code2: '&#x2686;', 
    code3: '&#9862;', h1: '&#9862;', code4: '',},

    {title: 'WHITE CIRCLE WITH TWO DOTS',  code1: 'U+02687', code2: '&#x2687;', 
    code3: '&#9863;', h1: '&#9863;', code4: '',},

    {title: 'BLACK CIRCLE WITH WHITE DOT RIGHT',  code1: 'U+02688', code2: '&#x2688;', 
    code3: '&#9864;', h1: '&#9864;', code4: '',},

    {title: 'BLACK CIRCLE WITH TWO WHITE DOTS',  code1: 'U+02689', code2: '&#x2689;', 
    code3: '&#9865;', h1: '&#9865;', code4: '',},

    {title: 'MONOGRAM FOR YANG',  code1: 'U+0268A', code2: '&#x268A;', 
    code3: '&#9866;', h1: '&#9866;', code4: '',},

    {title: 'MONOGRAM FOR YIN',  code1: 'U+0268B', code2: '&#x268B;', 
    code3: '&#9867;', h1: '&#9867;', code4: '',},

    {title: 'DIGRAM FOR GREATER YANG',  code1: 'U+0268C', code2: '&#x268C;', 
    code3: '&#9868;', h1: '&#9868;', code4: '',},

    {title: 'DIGRAM FOR LESSER YIN',  code1: 'U+0268D', code2: '&#x268D;', 
    code3: '&#9869;', h1: '&#9869;', code4: '',},

    {title: 'DIGRAM FOR LESSER YANG',  code1: 'U+0268E', code2: '&#x268E;', 
    code3: '&#9870;', h1: '&#9870;', code4: '',},

    {title: 'DIGRAM FOR GREATER YIN',  code1: 'U+0268F', code2: '&#x268F;', 
    code3: '&#9871;', h1: '&#9871;', code4: '',},

    {title: 'WHITE FLAG',  code1: 'U+02690', code2: '&#x2690;', 
    code3: '&#9872;', h1: '&#9872;', code4: '',},

    {title: 'BLACK FLAG',  code1: 'U+02691', code2: '&#x2691;', 
    code3: '&#9873;', h1: '&#9873;', code4: '',},

    {title: 'HAMMER AND PICK',  code1: 'U+02692', code2: '&#x2692;', 
    code3: '&#9874;', h1: '&#9874;', code4: '',},

    {title: 'CROSSED SWORDS',  code1: 'U+02694', code2: '&#x2694;', 
    code3: '&#9876;', h1: '&#9876;', code4: '',},

    {title: 'STAFF OF AESCULAPIUS',  code1: 'U+02695', code2: '&#x2695;', 
    code3: '&#9877;', h1: '&#9877;', code4: '',},

    {title: 'SCALES',  code1: 'U+02696', code2: '&#x2696;', 
    code3: '&#9878;', h1: '&#9878;', code4: '',},

    {title: 'ALEMBIC',  code1: 'U+02697', code2: '&#x2697;', 
    code3: '&#9879;', h1: '&#9879;', code4: '',},

    {title: 'FLOWER',  code1: 'U+02698', code2: '&#x2698;', 
    code3: '&#9880;', h1: '&#9880;', code4: '',},

    {title: 'GEAR',  code1: 'U+02699', code2: '&#x2699;', 
    code3: '&#9881;', h1: '&#9881;', code4: '',},

    {title: 'STAFF OF HERMES',  code1: 'U+0269A', code2: '&#x269A;', 
    code3: '&#9882;', h1: '&#9882;', code4: '',},

    {title: 'ATOM SYMBOL',  code1: 'U+0269B', code2: '&#x269B;', 
    code3: '&#9883;', h1: '&#9883;', code4: '',},

    {title: 'FLEUR-DE-LIS',  code1: 'U+0269C', code2: '&#x269C;', 
    code3: '&#9884;', h1: '&#9884;', code4: '',},

    {title: 'OUTLINED WHITE STAR',  code1: 'U+0269D', code2: '&#x269D;', 
    code3: '&#9885;', h1: '&#9885;', code4: '',},

    {title: 'THREE LINES CONVERGING RIGHT',  code1: 'U+0269E', code2: '&#x269E;', 
    code3: '&#9886;', h1: '&#9886;', code4: '',},

    {title: 'THREE LINES CONVERGING LEFT',  code1: 'U+0269F', code2: '&#x269F;', 
    code3: '&#9887;', h1: '&#9887;', code4: '',},

    {title: 'WARNING SIGN',  code1: 'U+026A0', code2: '&#x26A0;', 
    code3: '&#9888;', h1: '&#9888;', code4: '',},

    {title: 'DOUBLED FEMALE SIGN',  code1: 'U+026A2', code2: '&#x26A2;', 
    code3: '&#9890;', h1: '&#9890;', code4: '',},

    {title: 'DOUBLED MALE SIGN',  code1: 'U+026A3', code2: '&#x26A3;', 
    code3: '&#9891;', h1: '&#9891;', code4: '',},

    {title: 'INTERLOCKED FEMALE AND MALE SIGN',  code1: 'U+026A4', code2: '&#x26A4;', 
    code3: '&#9892;', h1: '&#9892;', code4: '',},

    {title: 'MALE AND FEMALE SIGN',  code1: 'U+026A5', code2: '&#x26A5;', 
    code3: '&#9893;', h1: '&#9893;', code4: '',},

    {title: 'MALE WITH STROKE SIGN',  code1: 'U+026A6', code2: '&#x26A6;', 
    code3: '&#9894;', h1: '&#9894;', code4: '',},

    {title: 'MALE WITH STROKE AND MALE AND FEMALE SIGN',  code1: 'U+026A7', code2: '&#x26A7;', 
    code3: '&#9895;', h1: '&#9895;', code4: '',},

    {title: 'VERTICAL MALE WITH STROKE SIGN',  code1: 'U+026A8', code2: '&#x26A8;', 
    code3: '&#9896;', h1: '&#9896;', code4: '',},

    {title: 'HORIZONTAL MALE WITH STROKE SIGN',  code1: 'U+026A9', code2: '&#x26A9;', 
    code3: '&#9897;', h1: '&#9897;', code4: '',},

    {title: 'MEDIUM SMALL WHITE CIRCLE',  code1: 'U+026AC', code2: '&#x26AC;', 
    code3: '&#9900;', h1: '&#9900;', code4: '',},

    {title: 'MARRIAGE SYMBOL',  code1: 'U+026AD', code2: '&#x26AD;', 
    code3: '&#9901;', h1: '&#9901;', code4: '',},

    {title: 'DIVORCE SYMBOL',  code1: 'U+026AE', code2: '&#x26AE;', 
    code3: '&#9902;', h1: '&#9902;', code4: '',},

    {title: 'UNMARRIED PARTNERSHIP SYMBOL',  code1: 'U+026AF', code2: '&#x26AF;', 
    code3: '&#9903;', h1: '&#9903;', code4: '',},

    {title: 'COFFIN',  code1: 'U+026B0', code2: '&#x26B0;', 
    code3: '&#9904;', h1: '&#9904;', code4: '',},

    {title: 'FUNERAL URN',  code1: 'U+026B1', code2: '&#x26B1;', 
    code3: '&#9905;', h1: '&#9905;', code4: '',},

    {title: 'NEUTER',  code1: 'U+026B2', code2: '&#x26B2;', 
    code3: '&#9906;', h1: '&#9906;', code4: '',},

    {title: 'BASEBALL',  code1: 'U+026BE', code2: '&#x26BE;', 
    code3: '&#9918;', h1: '&#9918;', code4: '',},

    {title: 'ASTRONOMICAL SYMBOL FOR URANUS',  code1: 'U+026E2', code2: '&#x26E2;', 
    code3: '&#9954;', h1: '&#9954;', code4: '',},

    {title: 'UPPER BLADE SCISSORS',  code1: 'U+02701', code2: '&#x2701;', 
    code3: '&#9985;', h1: '&#9985;', code4: '',},

    {title: 'BLACK SCISSORS',  code1: 'U+02702', code2: '&#x2702;', 
    code3: '&#9986;', h1: '&#9986;', code4: '',},

    {title: 'LOWER BLADE SCISSORS',  code1: 'U+02703', code2: '&#x2703;', 
    code3: '&#9987;', h1: '&#9987;', code4: '',},

    {title: 'WHITE SCISSORS',  code1: 'U+02704', code2: '&#x2704;', 
    code3: '&#9988;', h1: '&#9988;', code4: '',},

    {title: 'TELEPHONE LOCATION SIGN',  code1: 'U+02706', code2: '&#x2706;', 
    code3: '&#9990;', h1: '&#9990;', code4: '',},

    {title: 'TAPE DRIVE',  code1: 'U+02707', code2: '&#x2707;', 
    code3: '&#9991;', h1: '&#9991;', code4: '',},

    {title: 'AIRPLANE',  code1: 'U+02708', code2: '&#x2708;', 
    code3: '&#9992;', h1: '&#9992;', code4: '',},

    {title: 'ENVELOPE',  code1: 'U+02709', code2: '&#x2709;', 
    code3: '&#9993;', h1: '&#9993;', code4: '',},

    {title: 'VICTORY HAND',  code1: 'U+0270C', code2: '&#x270C;', 
    code3: '&#9996;', h1: '&#9996;', code4: '',},

    {title: 'WRITING HAND',  code1: 'U+0270D', code2: '&#x270D;', 
    code3: '&#9997;', h1: '&#9997;', code4: '',},

    {title: 'LOWER RIGHT PENCIL',  code1: 'U+0270E', code2: '&#x270E;', 
    code3: '&#9998;', h1: '&#9998;', code4: '',},

    {title: 'PENCIL',  code1: 'U+0270F', code2: '&#x270F;', 
    code3: '&#9999;', h1: '&#9999;', code4: '',},

    {title: 'UPPER RIGHT PENCIL',  code1: 'U+02710', code2: '&#x2710;', 
    code3: '&#10000;', h1: '&#10000;', code4: '',},

    {title: 'WHITE NIB',  code1: 'U+02711', code2: '&#x2711;', 
    code3: '&#10001;', h1: '&#10001;', code4: '',},

    {title: 'BLACK NIB',  code1: 'U+02712', code2: '&#x2712;', 
    code3: '&#10002;', h1: '&#10002;', code4: '',},

    {title: 'CHECK MARK',  code1: 'U+02713', code2: '&#x2713;', 
    code3: '&#10003;', h1: '&#10003;', code4: '&check;',},

    {title: 'HEAVY CHECK MARK',  code1: 'U+02714', code2: '&#x2714;', 
    code3: '&#10004;', h1: '&#10004;', code4: '',},

    {title: 'MULTIPLICATION X',  code1: 'U+02715', code2: '&#x2715;', 
    code3: '&#10005;', h1: '&#10005;', code4: '',},

    {title: 'HEAVY MULTIPLICATION X',  code1: 'U+02716', code2: '&#x2716;', 
    code3: '&#10006;', h1: '&#10006;', code4: '',},

    {title: 'BALLOT X',  code1: 'U+02717', code2: '&#x2717;', 
    code3: '&#10007;', h1: '&#10007;', code4: '&cross;',},

    {title: 'HEAVY BALLOT X',  code1: 'U+02718', code2: '&#x2718;', 
    code3: '&#10008;', h1: '&#10008;', code4: '',},

    {title: 'OUTLINED GREEK CROSS',  code1: 'U+02719', code2: '&#x2719;', 
    code3: '&#10009;', h1: '&#10009;', code4: '',},

    {title: 'HEAVY GREEK CROSS',  code1: 'U+0271A', code2: '&#x271A;', 
    code3: '&#10010;', h1: '&#10010;', code4: '',},

    {title: 'OPEN CENTRE CROSS',  code1: 'U+0271B', code2: '&#x271B;', 
    code3: '&#10011;', h1: '&#10011;', code4: '',},

    {title: 'HEAVY OPEN CENTRE CROSS',  code1: 'U+0271C', code2: '&#x271C;', 
    code3: '&#10012;', h1: '&#10012;', code4: '',},

    {title: 'LATIN CROSS',  code1: 'U+0271D', code2: '&#x271D;', 
    code3: '&#10013;', h1: '&#10013;', code4: '',},

    {title: 'SHADOWED WHITE LATIN CROSS',  code1: 'U+0271E', code2: '&#x271E;', 
    code3: '&#10014;', h1: '&#10014;', code4: '',},

    {title: 'OUTLINED LATIN CROSS',  code1: 'U+0271F', code2: '&#x271F;', 
    code3: '&#10015;', h1: '&#10015;', code4: '',},

    {title: 'MALTESE CROSS',  code1: 'U+02720', code2: '&#x2720;', 
    code3: '&#10016;', h1: '&#10016;', code4: '&malt;',},

    {title: 'STAR OF DAVID',  code1: 'U+02721', code2: '&#x2721;', 
    code3: '&#10017;', h1: '&#10017;', code4: '',},

    {title: 'FOUR TEARDROP-SPOKED ASTERISK',  code1: 'U+02722', code2: '&#x2722;', 
    code3: '&#10018;', h1: '&#10018;', code4: '',},

    {title: 'FOUR BALLOON-SPOKED ASTERISK',  code1: 'U+02723', code2: '&#x2723;', 
    code3: '&#10019;', h1: '&#10019;', code4: '',},

    {title: 'HEAVY FOUR BALLOON-SPOKED ASTERISK',  code1: 'U+02724', code2: '&#x2724;', 
    code3: '&#10020;', h1: '&#10020;', code4: '',},

    {title: 'FOUR CLUB-SPOKED ASTERISK',  code1: 'U+02725', code2: '&#x2725;', 
    code3: '&#10021;', h1: '&#10021;', code4: '',},

    {title: 'BLACK FOUR POINTED STAR',  code1: 'U+02726', code2: '&#x2726;', 
    code3: '&#10022;', h1: '&#10022;', code4: '',},

    {title: 'WHITE FOUR POINTED STAR',  code1: 'U+02727', code2: '&#x2727;', 
    code3: '&#10023;', h1: '&#10023;', code4: '',},

    {title: 'STRESS OUTLINED WHITE STAR',  code1: 'U+02729', code2: '&#x2729;', 
    code3: '&#10025;', h1: '&#10025;', code4: '',},

    {title: 'CIRCLED WHITE STAR',  code1: 'U+0272A', code2: '&#x272A;', 
    code3: '&#10026;', h1: '&#10026;', code4: '',},

    {title: 'OPEN CENTRE BLACK STAR',  code1: 'U+0272B', code2: '&#x272B;', 
    code3: '&#10027;', h1: '&#10027;', code4: '',},

    {title: 'BLACK CENTRE WHITE STAR',  code1: 'U+0272C', code2: '&#x272C;', 
    code3: '&#10028;', h1: '&#10028;', code4: '',},

    {title: 'OUTLINED BLACK STAR',  code1: 'U+0272D', code2: '&#x272D;', 
    code3: '&#10029;', h1: '&#10029;', code4: '',},

    {title: 'HEAVY OUTLINED BLACK STAR',  code1: 'U+0272E', code2: '&#x272E;', 
    code3: '&#10030;', h1: '&#10030;', code4: '',},

    {title: 'PINWHEEL STAR',  code1: 'U+0272F', code2: '&#x272F;', 
    code3: '&#10031;', h1: '&#10031;', code4: '',},

    {title: 'SHADOWED WHITE STAR',  code1: 'U+02730', code2: '&#x2730;', 
    code3: '&#10032;', h1: '&#10032;', code4: '',},

    {title: 'HEAVY ASTERISK',  code1: 'U+02731', code2: '&#x2731;', 
    code3: '&#10033;', h1: '&#10033;', code4: '',},

    {title: 'OPEN CENTRE ASTERISK',  code1: 'U+02732', code2: '&#x2732;', 
    code3: '&#10034;', h1: '&#10034;', code4: '',},

    {title: 'EIGHT SPOKED ASTERISK',  code1: 'U+02733', code2: '&#x2733;', 
    code3: '&#10035;', h1: '&#10035;', code4: '',},

    {title: 'EIGHT POINTED BLACK STAR',  code1: 'U+02734', code2: '&#x2734;', 
    code3: '&#10036;', h1: '&#10036;', code4: '',},

    {title: 'EIGHT POINTED PINWHEEL STAR',  code1: 'U+02735', code2: '&#x2735;', 
    code3: '&#10037;', h1: '&#10037;', code4: '',},

    {title: 'SIX POINTED BLACK STAR',  code1: 'U+02736', code2: '&#x2736;', 
    code3: '&#10038;', h1: '&#10038;', code4: '&sext;',},

    {title: 'EIGHT POINTED RECTILINEAR BLACK STAR',  code1: 'U+02737', code2: '&#x2737;', 
    code3: '&#10039;', h1: '&#10039;', code4: '',},

    {title: 'HEAVY EIGHT POINTED RECTILINEAR BLACK STAR',  code1: 'U+02738', code2: '&#x2738;', 
    code3: '&#10040;', h1: '&#10040;', code4: '',},

    {title: 'TWELVE POINTED BLACK STAR',  code1: 'U+02739', code2: '&#x2739;', 
    code3: '&#10041;', h1: '&#10041;', code4: '',},

    {title: 'SIXTEEN POINTED ASTERISK',  code1: 'U+0273A', code2: '&#x273A;', 
    code3: '&#10042;', h1: '&#10042;', code4: '',},

    {title: 'TEARDROP-SPOKED ASTERISK',  code1: 'U+0273B', code2: '&#x273B;', 
    code3: '&#10043;', h1: '&#10043;', code4: '',},

    {title: 'OPEN CENTRE TEARDROP-SPOKED ASTERISK',  code1: 'U+0273C', code2: '&#x273C;', 
    code3: '&#10044;', h1: '&#10044;', code4: '',},

    {title: 'HEAVY TEARDROP-SPOKED ASTERISK',  code1: 'U+0273D', code2: '&#x273D;', 
    code3: '&#10045;', h1: '&#10045;', code4: '',},

    {title: 'SIX PETALLED BLACK AND WHITE FLORETTE',  code1: 'U+0273E', code2: '&#x273E;', 
    code3: '&#10046;', h1: '&#10046;', code4: '',},

    {title: 'BLACK FLORETTE',  code1: 'U+0273F', code2: '&#x273F;', 
    code3: '&#10047;', h1: '&#10047;', code4: '',},

    {title: 'WHITE FLORETTE',  code1: 'U+02740', code2: '&#x2740;', 
    code3: '&#10048;', h1: '&#10048;', code4: '',},

    {title: 'EIGHT PETALLED OUTLINED BLACK FLORETTE',  code1: 'U+02741', code2: '&#x2741;', 
    code3: '&#10049;', h1: '&#10049;', code4: '',},

    {title: 'CIRCLED OPEN CENTRE EIGHT POINTED STAR',  code1: 'U+02742', code2: '&#x2742;', 
    code3: '&#10050;', h1: '&#10050;', code4: '',},

    {title: 'HEAVY TEARDROP-SPOKED PINWHEEL ASTERISK',  code1: 'U+02743', code2: '&#x2743;', 
    code3: '&#10051;', h1: '&#10051;', code4: '',},

    {title: 'SNOWFLAKE',  code1: 'U+02744', code2: '&#x2744;', 
    code3: '&#10052;', h1: '&#10052;', code4: '',},

    {title: 'TIGHT TRIFOLIATE SNOWFLAKE',  code1: 'U+02745', code2: '&#x2745;', 
    code3: '&#10053;', h1: '&#10053;', code4: '',},

    {title: 'HEAVY CHEVRON SNOWFLAKE',  code1: 'U+02746', code2: '&#x2746;', 
    code3: '&#10054;', h1: '&#10054;', code4: '',},

    {title: 'SPARKLE',  code1: 'U+02747', code2: '&#x2747;', 
    code3: '&#10055;', h1: '&#10055;', code4: '',},

    {title: 'HEAVY SPARKLE',  code1: 'U+02748', code2: '&#x2748;', 
    code3: '&#10056;', h1: '&#10056;', code4: '',},

    {title: 'BALLOON-SPOKED ASTERISK',  code1: 'U+02749', code2: '&#x2749;', 
    code3: '&#10057;', h1: '&#10057;', code4: '',},

    {title: 'EIGHT TEARDROP-SPOKED PROPELLER ASTERISK',  code1: 'U+0274A', code2: '&#x274A;', 
    code3: '&#10058;', h1: '&#10058;', code4: '',},

    {title: 'HEAVY EIGHT TEARDROP-SPOKED PROPELLER ASTERISK',  code1: 'U+0274B', code2: '&#x274B;', 
    code3: '&#10059;', h1: '&#10059;', code4: '',},

    {title: 'SHADOWED WHITE CIRCLE',  code1: 'U+0274D', code2: '&#x274D;', 
    code3: '&#10061;', h1: '&#10061;', code4: '',},

    {title: 'LOWER RIGHT DROP-SHADOWED WHITE SQUARE',  code1: 'U+0274F', code2: '&#x274F;', 
    code3: '&#10063;', h1: '&#10063;', code4: '',},

    {title: 'UPPER RIGHT DROP-SHADOWED WHITE SQUARE',  code1: 'U+02750', code2: '&#x2750;', 
    code3: '&#10064;', h1: '&#10064;', code4: '',},

    {title: 'LOWER RIGHT SHADOWED WHITE SQUARE',  code1: 'U+02751', code2: '&#x2751;', 
    code3: '&#10065;', h1: '&#10065;', code4: '',},

    {title: 'UPPER RIGHT SHADOWED WHITE SQUARE',  code1: 'U+02752', code2: '&#x2752;', 
    code3: '&#10066;', h1: '&#10066;', code4: '',},

    {title: 'BLACK DIAMOND MINUS WHITE X',  code1: 'U+02756', code2: '&#x2756;', 
    code3: '&#10070;', h1: '&#10070;', code4: '',},

    {title: 'LIGHT VERTICAL BAR',  code1: 'U+02758', code2: '&#x2758;', 
    code3: '&#10072;', h1: '&#10072;', code4: '&VerticalSeparator;',},

    {title: 'MEDIUM VERTICAL BAR',  code1: 'U+02759', code2: '&#x2759;', 
    code3: '&#10073;', h1: '&#10073;', code4: '',},

    {title: 'HEAVY VERTICAL BAR',  code1: 'U+0275A', code2: '&#x275A;', 
    code3: '&#10074;', h1: '&#10074;', code4: '',},

    {title: 'HEAVY SINGLE TURNED COMMA QUOTATION MARK ORNAMENT',  code1: 'U+0275B', code2: '&#x275B;', 
    code3: '&#10075;', h1: '&#10075;', code4: '',},

    {title: 'HEAVY SINGLE COMMA QUOTATION MARK ORNAMENT',  code1: 'U+0275C', code2: '&#x275C;', 
    code3: '&#10076;', h1: '&#10076;', code4: '',},

    {title: 'HEAVY DOUBLE TURNED COMMA QUOTATION MARK ORNAMENT',  code1: 'U+0275D', code2: '&#x275D;', 
    code3: '&#10077;', h1: '&#10077;', code4: '',},

    {title: 'HEAVY DOUBLE COMMA QUOTATION MARK ORNAMENT',  code1: 'U+0275E', code2: '&#x275E;', 
    code3: '&#10078;', h1: '&#10078;', code4: '',},

    {title: 'CURVED STEM PARAGRAPH SIGN ORNAMENT',  code1: 'U+02761', code2: '&#x2761;', 
    code3: '&#10081;', h1: '&#10081;', code4: '',},

    {title: 'HEAVY EXCLAMATION MARK ORNAMENT',  code1: 'U+02762', code2: '&#x2762;', 
    code3: '&#10082;', h1: '&#10082;', code4: '',},

    {title: 'HEAVY HEART EXCLAMATION MARK ORNAMENT',  code1: 'U+02763', code2: '&#x2763;', 
    code3: '&#10083;', h1: '&#10083;', code4: '',},

    {title: 'HEAVY BLACK HEART',  code1: 'U+02764', code2: '&#x2764;', 
    code3: '&#10084;', h1: '&#10084;', code4: '',},

    {title: 'ROTATED HEAVY BLACK HEART BULLET',  code1: 'U+02765', code2: '&#x2765;', 
    code3: '&#10085;', h1: '&#10085;', code4: '',},

    {title: 'FLORAL HEART',  code1: 'U+02766', code2: '&#x2766;', 
    code3: '&#10086;', h1: '&#10086;', code4: '',},

    {title: 'ROTATED FLORAL HEART BULLET',  code1: 'U+02767', code2: '&#x2767;', 
    code3: '&#10087;', h1: '&#10087;', code4: '',},

    {title: 'MEDIUM LEFT PARENTHESIS ORNAMENT',  code1: 'U+02768', code2: '&#x2768;', 
    code3: '&#10088;', h1: '&#10088;', code4: '',},

    {title: 'MEDIUM RIGHT PARENTHESIS ORNAMENT',  code1: 'U+02769', code2: '&#x2769;', 
    code3: '&#10089;', h1: '&#10089;', code4: '',},

    {title: 'MEDIUM FLATTENED LEFT PARENTHESIS ORNAMENT',  code1: 'U+0276A', code2: '&#x276A;', 
    code3: '&#10090;', h1: '&#10090;', code4: '',},

    {title: 'MEDIUM FLATTENED RIGHT PARENTHESIS ORNAMENT',  code1: 'U+0276B', code2: '&#x276B;', 
    code3: '&#10091;', h1: '&#10091;', code4: '',},

    {title: 'MEDIUM LEFT-POINTING ANGLE BRACKET ORNAMENT',  code1: 'U+0276C', code2: '&#x276C;', 
    code3: '&#10092;', h1: '&#10092;', code4: '',},

    {title: 'MEDIUM RIGHT-POINTING ANGLE BRACKET ORNAMENT',  code1: 'U+0276D', code2: '&#x276D;', 
    code3: '&#10093;', h1: '&#10093;', code4: '',},

    {title: 'HEAVY LEFT-POINTING ANGLE QUOTATION MARK ORNAMENT',  code1: 'U+0276E', code2: '&#x276E;', 
    code3: '&#10094;', h1: '&#10094;', code4: '',},

    {title: 'HEAVY RIGHT-POINTING ANGLE QUOTATION MARK ORNAMENT',  code1: 'U+0276F', code2: '&#x276F;', 
    code3: '&#10095;', h1: '&#10095;', code4: '',},

    {title: 'HEAVY LEFT-POINTING ANGLE BRACKET ORNAMENT',  code1: 'U+02770', code2: '&#x2770;', 
    code3: '&#10096;', h1: '&#10096;', code4: '',},

    {title: 'HEAVY RIGHT-POINTING ANGLE BRACKET ORNAMENT',  code1: 'U+02771', code2: '&#x2771;', 
    code3: '&#10097;', h1: '&#10097;', code4: '',},

    {title: 'LIGHT LEFT TORTOISE SHELL BRACKET ORNAMENT',  code1: 'U+02772', code2: '&#x2772;', 
    code3: '&#10098;', h1: '&#10098;', code4: '&lbbrk;',},

    {title: 'LIGHT RIGHT TORTOISE SHELL BRACKET ORNAMENT',  code1: 'U+02773', code2: '&#x2773;', 
    code3: '&#10099;', h1: '&#10099;', code4: '&rbbrk;',},

    {title: 'MEDIUM LEFT CURLY BRACKET ORNAMENT',  code1: 'U+02774', code2: '&#x2774;', 
    code3: '&#10100;', h1: '&#10100;', code4: '',},

    {title: 'MEDIUM RIGHT CURLY BRACKET ORNAMENT',  code1: 'U+02775', code2: '&#x2775;', 
    code3: '&#10101;', h1: '&#10101;', code4: '',},

    {title: 'DINGBAT NEGATIVE CIRCLED DIGIT ONE',  code1: 'U+02776', code2: '&#x2776;', 
    code3: '&#10102;', h1: '&#10102;', code4: '',},

    {title: 'DINGBAT NEGATIVE CIRCLED DIGIT TWO',  code1: 'U+02777', code2: '&#x2777;', 
    code3: '&#10103;', h1: '&#10103;', code4: '',},

    {title: 'DINGBAT NEGATIVE CIRCLED DIGIT THREE',  code1: 'U+02778', code2: '&#x2778;', 
    code3: '&#10104;', h1: '&#10104;', code4: '',},

    {title: 'DINGBAT NEGATIVE CIRCLED DIGIT FOUR',  code1: 'U+02779', code2: '&#x2779;', 
    code3: '&#10105;', h1: '&#10105;', code4: '',},

    {title: 'DINGBAT NEGATIVE CIRCLED DIGIT FIVE',  code1: 'U+0277A', code2: '&#x277A;', 
    code3: '&#10106;', h1: '&#10106;', code4: '',},

    {title: 'DINGBAT NEGATIVE CIRCLED DIGIT SIX',  code1: 'U+0277B', code2: '&#x277B;', 
    code3: '&#10107;', h1: '&#10107;', code4: '',},

    {title: 'DINGBAT NEGATIVE CIRCLED DIGIT SEVEN',  code1: 'U+0277C', code2: '&#x277C;', 
    code3: '&#10108;', h1: '&#10108;', code4: '',},

    {title: 'DINGBAT NEGATIVE CIRCLED DIGIT EIGHT',  code1: 'U+0277D', code2: '&#x277D;', 
    code3: '&#10109;', h1: '&#10109;', code4: '',},

    {title: 'DINGBAT NEGATIVE CIRCLED DIGIT NINE',  code1: 'U+0277E', code2: '&#x277E;', 
    code3: '&#10110;', h1: '&#10110;', code4: '',},

    {title: 'DINGBAT NEGATIVE CIRCLED NUMBER TEN',  code1: 'U+0277F', code2: '&#x277F;', 
    code3: '&#10111;', h1: '&#10111;', code4: '',},

    {title: 'DINGBAT CIRCLED SANS-SERIF DIGIT ONE',  code1: 'U+02780', code2: '&#x2780;', 
    code3: '&#10112;', h1: '&#10112;', code4: '',},

    {title: 'DINGBAT CIRCLED SANS-SERIF DIGIT TWO',  code1: 'U+02781', code2: '&#x2781;', 
    code3: '&#10113;', h1: '&#10113;', code4: '',},

    {title: 'DINGBAT CIRCLED SANS-SERIF DIGIT THREE',  code1: 'U+02782', code2: '&#x2782;', 
    code3: '&#10114;', h1: '&#10114;', code4: '',},

    {title: 'DINGBAT CIRCLED SANS-SERIF DIGIT FOUR',  code1: 'U+02783', code2: '&#x2783;', 
    code3: '&#10115;', h1: '&#10115;', code4: '',},

    {title: 'DINGBAT CIRCLED SANS-SERIF DIGIT FIVE',  code1: 'U+02784', code2: '&#x2784;', 
    code3: '&#10116;', h1: '&#10116;', code4: '',},

    {title: 'DINGBAT CIRCLED SANS-SERIF DIGIT SIX',  code1: 'U+02785', code2: '&#x2785;', 
    code3: '&#10117;', h1: '&#10117;', code4: '',},

    {title: 'DINGBAT CIRCLED SANS-SERIF DIGIT SEVEN',  code1: 'U+02786', code2: '&#x2786;', 
    code3: '&#10118;', h1: '&#10118;', code4: '',},

    {title: 'DINGBAT CIRCLED SANS-SERIF DIGIT EIGHT',  code1: 'U+02787', code2: '&#x2787;', 
    code3: '&#10119;', h1: '&#10119;', code4: '',},

    {title: 'DINGBAT CIRCLED SANS-SERIF DIGIT NINE',  code1: 'U+02788', code2: '&#x2788;', 
    code3: '&#10120;', h1: '&#10120;', code4: '',},

    {title: 'DINGBAT CIRCLED SANS-SERIF NUMBER TEN',  code1: 'U+02789', code2: '&#x2789;', 
    code3: '&#10121;', h1: '&#10121;', code4: '',},

    {title: 'DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT ONE',  code1: 'U+0278A', code2: '&#x278A;', 
    code3: '&#10122;', h1: '&#10122;', code4: '',},

    {title: 'DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT TWO',  code1: 'U+0278B', code2: '&#x278B;', 
    code3: '&#10123;', h1: '&#10123;', code4: '',},

    {title: 'DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT THREE',  code1: 'U+0278C', code2: '&#x278C;', 
    code3: '&#10124;', h1: '&#10124;', code4: '',},

    {title: 'DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT FOUR',  code1: 'U+0278D', code2: '&#x278D;', 
    code3: '&#10125;', h1: '&#10125;', code4: '',},

    {title: 'DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT FIVE',  code1: 'U+0278E', code2: '&#x278E;', 
    code3: '&#10126;', h1: '&#10126;', code4: '',},

    {title: 'DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT SIX',  code1: 'U+0278F', code2: '&#x278F;', 
    code3: '&#10127;', h1: '&#10127;', code4: '',},

    {title: 'DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT SEVEN',  code1: 'U+02790', code2: '&#x2790;', 
    code3: '&#10128;', h1: '&#10128;', code4: '',},

    {title: 'DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT EIGHT',  code1: 'U+02791', code2: '&#x2791;', 
    code3: '&#10129;', h1: '&#10129;', code4: '',},

    {title: 'DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT NINE',  code1: 'U+02792', code2: '&#x2792;', 
    code3: '&#10130;', h1: '&#10130;', code4: '',},

    {title: 'DINGBAT NEGATIVE CIRCLED SANS-SERIF NUMBER TEN',  code1: 'U+02793', code2: '&#x2793;', 
    code3: '&#10131;', h1: '&#10131;', code4: '',},

    {title: 'HEAVY WIDE-HEADED RIGHT ARROW',  code1: 'U+02794', code2: '&#x2794;', 
    code3: '&#10132;', h1: '&#10132;', code4: '',},

    {title: 'HEAVY SOUTH EAST ARROW',  code1: 'U+02798', code2: '&#x2798;', 
    code3: '&#10136;', h1: '&#10136;', code4: '',},

    {title: 'HEAVY RIGHT ARROW',  code1: 'U+02799', code2: '&#x2799;', 
    code3: '&#10137;', h1: '&#10137;', code4: '',},

    {title: 'HEAVY NORTH EAST ARROW',  code1: 'U+0279A', code2: '&#x279A;', 
    code3: '&#10138;', h1: '&#10138;', code4: '',},

    {title: 'DRAFTING POINT RIGHT ARROW',  code1: 'U+0279B', code2: '&#x279B;', 
    code3: '&#10139;', h1: '&#10139;', code4: '',},

    {title: 'HEAVY ROUND-TIPPED RIGHT ARROW',  code1: 'U+0279C', code2: '&#x279C;', 
    code3: '&#10140;', h1: '&#10140;', code4: '',},

    {title: 'TRIANGLE-HEADED RIGHT ARROW',  code1: 'U+0279D', code2: '&#x279D;', 
    code3: '&#10141;', h1: '&#10141;', code4: '',},

    {title: 'HEAVY TRIANGLE-HEADED RIGHT ARROW',  code1: 'U+0279E', code2: '&#x279E;', 
    code3: '&#10142;', h1: '&#10142;', code4: '',},

    {title: 'DASHED TRIANGLE-HEADED RIGHT ARROW',  code1: 'U+0279F', code2: '&#x279F;', 
    code3: '&#10143;', h1: '&#10143;', code4: '',},

    {title: 'HEAVY DASHED TRIANGLE-HEADED RIGHT ARROW',  code1: 'U+027A0', code2: '&#x27A0;', 
    code3: '&#10144;', h1: '&#10144;', code4: '',},

    {title: 'BLACK RIGHT ARROW',  code1: 'U+027A1', code2: '&#x27A1;', 
    code3: '&#10145;', h1: '&#10145;', code4: '',},

    {title: 'THREE-D TOP-LIGHTED RIGHT ARROWHEAD',  code1: 'U+027A2', code2: '&#x27A2;', 
    code3: '&#10146;', h1: '&#10146;', code4: '',},

    {title: 'THREE-D BOTTOM-LIGHTED RIGHT ARROWHEAD',  code1: 'U+027A3', code2: '&#x27A3;', 
    code3: '&#10147;', h1: '&#10147;', code4: '',},

    {title: 'BLACK RIGHT ARROWHEAD',  code1: 'U+027A4', code2: '&#x27A4;', 
    code3: '&#10148;', h1: '&#10148;', code4: '',},

    {title: 'HEAVY BLACK CURVED DOWN AND RIGHT ARROW',  code1: 'U+027A5', code2: '&#x27A5;', 
    code3: '&#10149;', h1: '&#10149;', code4: '',},

    {title: 'HEAVY BLACK CURVED UP AND RIGHT ARROW',  code1: 'U+027A6', code2: '&#x27A6;', 
    code3: '&#10150;', h1: '&#10150;', code4: '',},

    {title: 'SQUAT BLACK RIGHT ARROW',  code1: 'U+027A7', code2: '&#x27A7;', 
    code3: '&#10151;', h1: '&#10151;', code4: '',},

    {title: 'HEAVY CONCAVE-POINTED BLACK RIGHT ARROW',  code1: 'U+027A8', code2: '&#x27A8;', 
    code3: '&#10152;', h1: '&#10152;', code4: '',},

    {title: 'RIGHT-SHADED WHITE RIGHT ARROW',  code1: 'U+027A9', code2: '&#x27A9;', 
    code3: '&#10153;', h1: '&#10153;', code4: '',},

    {title: 'LEFT-SHADED WHITE RIGHT ARROW',  code1: 'U+027AA', code2: '&#x27AA;', 
    code3: '&#10154;', h1: '&#10154;', code4: '',},

    {title: 'BACK-TILTED SHADOWED WHITE RIGHT ARROW',  code1: 'U+027AB', code2: '&#x27AB;', 
    code3: '&#10155;', h1: '&#10155;', code4: '',},

    {title: 'FRONT-TILTED SHADOWED WHITE RIGHT ARROW',  code1: 'U+027AC', code2: '&#x27AC;', 
    code3: '&#10156;', h1: '&#10156;', code4: '',},

    {title: 'HEAVY LOWER RIGHT-SHADOWED WHITE RIGHT ARROW',  code1: 'U+027AD', code2: '&#x27AD;', 
    code3: '&#10157;', h1: '&#10157;', code4: '',},

    {title: 'HEAVY UPPER RIGHT-SHADOWED WHITE RIGHT ARROW',  code1: 'U+027AE', code2: '&#x27AE;', 
    code3: '&#10158;', h1: '&#10158;', code4: '',},

    {title: 'NOTCHED LOWER RIGHT-SHADOWED WHITE RIGHT ARROW',  code1: 'U+027AF', code2: '&#x27AF;', 
    code3: '&#10159;', h1: '&#10159;', code4: '',},

    {title: 'NOTCHED UPPER RIGHT-SHADOWED WHITE RIGHT ARROW',  code1: 'U+027B1', code2: '&#x27B1;', 
    code3: '&#10161;', h1: '&#10161;', code4: '',},

    {title: 'CIRCLED HEAVY WHITE RIGHT ARROW',  code1: 'U+027B2', code2: '&#x27B2;', 
    code3: '&#10162;', h1: '&#10162;', code4: '',},

    {title: 'WHITE-FEATHERED RIGHT ARROW',  code1: 'U+027B3', code2: '&#x27B3;', 
    code3: '&#10163;', h1: '&#10163;', code4: '',},

    {title: 'BLACK-FEATHERED SOUTH EAST ARROW',  code1: 'U+027B4', code2: '&#x27B4;', 
    code3: '&#10164;', h1: '&#10164;', code4: '',},

    {title: 'BLACK-FEATHERED RIGHT ARROW',  code1: 'U+027B5', code2: '&#x27B5;', 
    code3: '&#10165;', h1: '&#10165;', code4: '',},

    {title: 'BLACK-FEATHERED NORTH EAST ARROW',  code1: 'U+027B6', code2: '&#x27B6;', 
    code3: '&#10166;', h1: '&#10166;', code4: '',},

    {title: 'HEAVY BLACK-FEATHERED SOUTH EAST ARROW',  code1: 'U+027B7', code2: '&#x27B7;', 
    code3: '&#10167;', h1: '&#10167;', code4: '',},

    {title: 'HEAVY BLACK-FEATHERED RIGHT ARROW',  code1: 'U+027B8', code2: '&#x27B8;', 
    code3: '&#10168;', h1: '&#10168;', code4: '',},

    {title: 'HEAVY BLACK-FEATHERED NORTH EAST ARROW',  code1: 'U+027B9', code2: '&#x27B9;', 
    code3: '&#10169;', h1: '&#10169;', code4: '',},

    {title: 'TEARDROP-BARBED RIGHT ARROW',  code1: 'U+027BA', code2: '&#x27BA;', 
    code3: '&#10170;', h1: '&#10170;', code4: '',},

    {title: 'HEAVY TEARDROP-SHANKED RIGHT ARROW',  code1: 'U+027BB', code2: '&#x27BB;', 
    code3: '&#10171;', h1: '&#10171;', code4: '',},

    {title: 'WEDGE-TAILED RIGHT ARROW',  code1: 'U+027BC', code2: '&#x27BC;', 
    code3: '&#10172;', h1: '&#10172;', code4: '',},

    {title: 'HEAVY WEDGE-TAILED RIGHT ARROW',  code1: 'U+027BD', code2: '&#x27BD;', 
    code3: '&#10173;', h1: '&#10173;', code4: '',},

    {title: 'OPEN-OUTLINED RIGHT ARROW',  code1: 'U+027BE', code2: '&#x27BE;', 
    code3: '&#10174;', h1: '&#10174;', code4: '',},


    // {title: '',  code1: '', code2: '', 
    // code3: '', h1: '', code4: '',},
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

