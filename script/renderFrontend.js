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

