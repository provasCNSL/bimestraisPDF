function gerar() {
  var res9A = document.getElementById("res9A");
  var res9B = document.getElementById("res9B");
  var res1A = document.getElementById("res1A");
  var res1B = document.getElementById("res1B");
  var res2A = document.getElementById("res2A");
  var res2B = document.getElementById("res2B");
  var res3A = document.getElementById("res3A");
  var res3B = document.getElementById("res3B");
  res9A.innerHTML = "";
  res9B.innerHTML = "";
  res1A.innerHTML = "";
  res1B.innerHTML = "";
  res2A.innerHTML = "";
  res2B.innerHTML = "";
  res3A.innerHTML = "";
  res3B.innerHTML = "";
  var alunos9A;
  var alunos9B;
  var alunos1A;
  var alunos1B;
  var alunos2A;
  var alunos2B;
  var alunos3A;
  var alunos3B;

  function definindoAlunos() {
    alunos9A = [
      "ALICE",
      "ANA CLARA",
      "ANA LAURA",
      "ANA LUÍSA",
      "ANDRÉ",
      "ANGELINA",
      "ANITA",
      "ARTHUR",
      "BRUNA",
      "CAIO GABRIEL",
      "CAIO MESQUITA",
      "DEBORA",
      "ENRIQUE",
      "GABRIEL",
      "GABRIELA",
      "GUILHERME",
      "GUSTAVO",
      "HELENA",
      "HENRIQUE",
      "JOÃO VITOR",
      "LEONARDO",
      "LILIAN",
      "LUCAS",
      "LUCIANO",
      "MARCELA",
      "MARIA EDUARDA",
      "MARIA LUIZA",
      "MARIANA",
      "MARINA",
      "OTÁVIO CREPALDI",
      "OTÁVIO CUSTÓDIO",
      "OTÁVIO HENRIQUE",
      "PEDRO FRANÇA",
      "PEDRO MARQUES",
      "SOPHIA",
      "VINÍCIUS",
    ];

    alunos9B = [
      "ÁGATHA",
      "ÁLVARO",
      "ANA LUIZA",
      "ANDRÉ",
      "ANITA",
      "CAIO",
      "CAMILA",
      "DAVI",
      "EDUARDA",
      "EMILLY",
      "FERNANDO",
      "GABRIELLA",
      "GUSTAVO GUEDES",
      "IAN PINHEIRO",
      "IGOR VITORINO",
      "JOÃO VITOR",
      "JÚLIA",
      "KELLY",
      "LAÍS ",
      "LAUDOMILA",
      "LAURA",
      "LEONARDO",
      "LETÍCIA GAMA",
      "LETÍCIA MACHADO",
      "LIRIS",
      "LIVIA",
      "LUÍS ANTÔNIO",
      "MARCELA FERNANDA",
      "MARCUS HENRIQUE",
      "MARIA CLARA DOS SANTOS",
      "MARIA CLARA NUNES",
      "MARIA FERNANDA",
      "MARIA LUÍSA",
      "MARIA PAULA",
      "MIGUEL",
      "STELA ",
      "IVAN",
      "SARA RAYNEE",
      "ERIC",
    ];

    alunos1A = [
      "ANA CLARA",
      "ANA GABRIELA",
      "ANA JÚLIA",
      "ANA PAULA",
      "ANNITA BERTILACCHI",
      "ANTÔNIO MORETTI",
      "AQUILES GONÇALVES",
      "ARTHUR MENESES",
      "BIANCA TONETTI",
      "BRENO HENRIQUE",
      "FÁDUA DE FATIMA",
      "FERNANDA ALVES",
      "GABRIEL COSTA",
      "GEOVANA DE OLIVEIRA",
      "GEOVANNA MADEIRA MARTINS",
      "GUILHERME FREIRE",
      "GUSTAVO SOUZA",
      "HELENA DE RESENDE",
      "JOÃO EDUARDO",
      "JOÃO VITTOR",
      "JÚLIA FERNANDES",
      "LAÍS CRISTINA",
      "LEONARDO NESTOR",
      "LUIZ PAULO",
      "LUIZA SILVA",
      "MARIA EDUARDA BARTHOLO",
      "MARIA EDUARDA VIGILATO",
      "MATHEUS ARAÚJO FABRI",
      "MATHEUS GUERRA",
      "PEDRO CARVALHO",
      "PEDRO DESLANDES",
      "PEDRO UMEMURA",
      "RAUL CARVALHO",
      "RODRIGO ALVES",
    ];

    alunos1B = [
      "ALICE ARRIEL",
      "ANA LAURA",
      "ANTÔNIO HENRIQUE",
      "BERNARDO BARBOSA",
      "CLEO CARVALHO",
      "EMILLY SILVA",
      "ERICK ZAKHIA ",
      "FELIPE SODRE PEREIRA",
      "FELIPE SOUZA CARLOS",
      "GABRIELA LIMA",
      "GIOVANA PEREIRA",
      "GIOVANNA JÚLIA",
      "IAGO MOREIRA",
      "JAMYLE ALBINO",
      "JÚLIA BOTELHO",
      "LARA COSTA",
      "LARA CRISTINA",
      "LAURA CAMILLY",
      "LORENA LAÍS",
      "LUIZ FELIPE",
      "MARIA EDUARDA BOTELHO",
      "MARIA EDUARDA OLIVEIRA ",
      "MARIA LUIZA CARVALHO",
      "MATHEUS BOTELHO",
      "MATHEUS ESTEVES",
      "NATAN BARBOSA",
      "OTÁVIO BARROSO",
      "PEDRO HENRIQUE",
      "PEDRO OTÁVIO",
      "PIERRE PIVATO",
      "RAFAELLA RESENDE",
      "SABRINA INES",
    ];
    alunos2A = [
      "ALICE MENEZES",
      "ANA BEATRIZ",
      "ANA CLARA",
      "ANA LUIZA",
      "ANTONIO HENRIQUE",
      "DANIEL COELHO",
      "DANIEL DE CASTRO",
      "GABRIELLA OLIVEIRA",
      "GUILHERME MENDES",
      "JOÃO BATISTA",
      "JOÃO PAULO WOUTERS",
      "JOÃO PEDRO DA SILVA",
      "JOAO PEDRO MENDES",
      "JOÃO VICTOR",
      "LÍVIA MARIA",
      "LUCAS BORGES",
      "LUCAS SEIJI",
      "LUIGI OLIVEIRA",
      "LUÍS EDUARDO",
      "MARIA CLARA ",
      "MATEUS FRANCO",
      "MATHEUS FELIPE",
      "PEDRO ALENCAR",
      "PEDRO HENRIQUE",
      "RYAN CARLO",
      "VERONICA OLIVEIRA",
      "VITOR CARVALHO",
      "SANDRA PEREIRA",
    ];
    alunos2B = [
      "BETINA LOESCH",
      "CAROLINA MARQUES",
      "DAVI NASCIMENTO",
      "EDUARDA TAYSLA",
      "FELIPE FAZA",
      "FELIPE NASCIMENTO",
      "GUSTAVO ALESSANDRO",
      "GUSTAVO HENRIQUE CARVALHO",
      "HENRIQUE CRESPO",
      "IGNÁCIO DANIEL",
      "ISABELLY CHRISTINE",
      "ISRAEL PULHEZ",
      "JÚLIA DE OLIVEIRA",
      "LARA RESENDE",
      "LERRANYA VICTÓRIA",
      "LUCAS ALVES",
      "LUCAS DE MESQUITA",
      "MARIA CLARA FURUKAVA",
      "MARIA EDUARDA GUIMARÃES",
      "MARIA LUIZA PADOVANI",
      "MATEUS VITOR",
      "MURILO CARVALHO",
      "MURILO SOARES PENIDO",
      "THIAGO ANTÔNIO DE",
      "VICTÓRIA MARIA SANTOS",
      "VITORIO AUGUSTO",
      "SOPHIA MARIA ROMANO",
    ];
    alunos3A = [
      "ALEX ANTONY",
      "ANNA CLARA",
      "BEATRIZ HENRIQUES",
      "BRENO SILVEIRA",
      "BRUNO FERRARI",
      "BRUNO SILVA",
      "CAMILA FALCO",
      "FREDERICO MAIA",
      "GABRIELA GONÇALVES",
      "IAN GEOVANINI",
      "ISABELA NUNES",
      "JÚLIA DE SOUZA",
      "JÚLIA MARQUEZINE",
      "LAÍS DESSIMONI",
      "LUCAS COELHO",
      "LUÍS FELIPE",
      "MARCELY PEREIRA",
      "MARIA CLARA",
      "MARIA EDUARDA MARINHO",
      "MARIA EDUARDA SILVA COSTA",
      "MARIA EMANUELY",
      "MARIANA CARVALHO",
      "MARIANA FALCO",
      "RODRIGO ANTONIO",
      "THIAGO TEIXEIRA",
      "TULIO LASMAR",
      "VINICIUS CARVALHO",
    ];
    alunos3B = [
      "ANA ELISA",
      "ANA PAULA ALVARENGA",
      "ANNA CLARA FURTADO",
      "CAMILA CARVALHO",
      "CAMILLY APARECIDA",
      "GABRIEL FAGUNDES",
      "GIOVANNA UMYE",
      "JOÃO FRANCISCO",
      "JOÃO LUCAS",
      "JOÃO MIGUEL",
      "JÚLLIA LEITE",
      "LARISSA NUNES",
      "LETICIA SANTOS",
      "MARCELO AUGUSTO",
      "MARCOS PAULO",
      "MARIA VITORIA",
      "MARIANA ASSUNÇÃO",
      "MATHEUS MESQUITA",
      "MILENA SOUZA",
      "PEDRO LUCAS",
      "RUBENS ELISEI",
      "SABRINA DIAS",
      "SAMARA ALVES",
      "THAIS CARDOSO",
      "THIAGO JOSÉ",
      "THIAGO LIMA",
      "VINÍCIUS DE CARVALHO",
      "VINICIUS DE SOUZA ",
      "VINICIUS MARQUES",
      "VINICIUS PEREIRA",
      "YUMI CAROLINA TAMAMOTO",
      "MARIA PAULA",
    ];
  }
  var sala9A = [];
  var sala9B = [];
  var sala1A = [];
  var sala1B = [];
  var sala2A = [];
  var sala2B = [];
  var sala3A = [];
  var sala3B = [];

  var alunos9A9A = [];
  var alunos9A9B = []; // alunos 9b na sala 9a
  var alunos9A1A = [];
  var alunos9A1B = [];
  var alunos9A2A = [];
  var alunos9A2B = [];
  var alunos9A3A = [];
  var alunos9A3B = [];

  var alunos9B9A = [];
  var alunos9B9B = [];
  var alunos9B1A = [];
  var alunos9B1B = [];
  var alunos9B2A = [];
  var alunos9B2B = [];
  var alunos9B3A = [];
  var alunos9B3B = [];

  var alunos1A9A = [];
  var alunos1A9B = [];
  var alunos1A1A = [];
  var alunos1A1B = [];
  var alunos1A2A = [];
  var alunos1A2B = [];
  var alunos1A3A = [];
  var alunos1A3B = [];

  var alunos1B9A = [];
  var alunos1B9B = [];
  var alunos1B1A = [];
  var alunos1B1B = [];
  var alunos1B2A = [];
  var alunos1B2B = [];
  var alunos1B3A = [];
  var alunos1B3B = [];

  var alunos2A9A = [];
  var alunos2A9B = [];
  var alunos2A1A = [];
  var alunos2A1B = [];
  var alunos2A2A = [];
  var alunos2A2B = [];
  var alunos2A3A = [];
  var alunos2A3B = [];

  var alunos2B9A = [];
  var alunos2B9B = [];
  var alunos2B1A = [];
  var alunos2B1B = [];
  var alunos2B2A = [];
  var alunos2B2B = [];
  var alunos2B3A = [];
  var alunos2B3B = [];

  var alunos3A9A = [];
  var alunos3A9B = [];
  var alunos3A1A = [];
  var alunos3A1B = [];
  var alunos3A2A = [];
  var alunos3A2B = [];
  var alunos3A3A = [];
  var alunos3A3B = [];

  var alunos3B9A = [];
  var alunos3B9B = [];
  var alunos3B1A = [];
  var alunos3B1B = [];
  var alunos3B2A = [];
  var alunos3B2B = [];
  var alunos3B3A = [];
  var alunos3B3B = [];
  /*
            9A: 5 5 6 4 4 4 4 4 36
            9B: 5 6 6 5 4 4 4 5 39
            1A: 5 5 4 4 4 4 4 4 34
            1B: 5 5 4 5 3 3 3 4 32
            2A: 4 4 3 4 3 3 3 4 28
            2B: 4 4 4 3 3 3 3 3 27
            3A: 4 5 3 3 3 3 3 3 27
            3B: 4 5 4 4 4 3 3 5 32
                36 39 34 32 28 27 27 
            */

  definindoAlunos();
  function randomArrayShuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    // console.log(array)
  }

  function randomizingTheOrderOfTheStudents() {
    randomArrayShuffle(alunos9A);
    randomArrayShuffle(alunos9B);
    randomArrayShuffle(alunos1A);
    randomArrayShuffle(alunos1B);
    randomArrayShuffle(alunos2B);
    randomArrayShuffle(alunos2A);
    randomArrayShuffle(alunos3A);
    randomArrayShuffle(alunos3B);

    var qtd_1A_no_1B;
    function addStudentsAt9A(room, numberOfStudents) {
      for (var i = 0; i < numberOfStudents; i++) {
        // sala9A.push(room[i])
        if (room == alunos9A) {
          alunos9A9A.push(room[i]);
        } else if (room == alunos9B) {
          alunos9A9B.push(room[i]);
        } else if (room == alunos1A) {
          alunos9A1A.push(room[i]);
        } else if (room == alunos1B) {
          alunos9A1B.push(room[i]);
        } else if (room == alunos2A) {
          alunos9A2A.push(room[i]);
        } else if (room == alunos2B) {
          alunos9A2B.push(room[i]);
        } else if (room == alunos3A) {
          alunos9A3A.push(room[i]);
        } else if (room == alunos3B) {
          alunos9A3B.push(room[i]);
        }
        alunos9A9A.sort();
        alunos9A9B.sort();
        alunos9A1A.sort();
        alunos9A1B.sort();
        alunos9A2A.sort();
        alunos9A2B.sort();
        alunos9A3A.sort();
        alunos9A3B.sort();
      }
      room.splice(0, numberOfStudents);
    }

    addStudentsAt9A(alunos9A, 5);
    addStudentsAt9A(alunos9B, 5);
    addStudentsAt9A(alunos1A, 6);
    addStudentsAt9A(alunos1B, 4);
    addStudentsAt9A(alunos2A, 4);
    addStudentsAt9A(alunos2B, 4);
    addStudentsAt9A(alunos3A, 4);
    addStudentsAt9A(alunos3B, 4);

    function addStudentsAt9B(room, numberOfStudents) {
      for (var i = 0; i < numberOfStudents; i++) {
        // sala9B.push(room[i])
        if (room == alunos9A) {
          alunos9B9A.push(room[i]);
        } else if (room == alunos9B) {
          alunos9B9B.push(room[i]);
        } else if (room == alunos1A) {
          alunos9B1A.push(room[i]);
        } else if (room == alunos1B) {
          alunos9B1B.push(room[i]);
        } else if (room == alunos2A) {
          alunos9B2A.push(room[i]);
        } else if (room == alunos2B) {
          alunos9B2B.push(room[i]);
        } else if (room == alunos3A) {
          alunos9B3A.push(room[i]);
        } else if (room == alunos3B) {
          alunos9B3B.push(room[i]);
        }
        alunos9B9A.sort();
        alunos9B9B.sort();
        alunos9B1A.sort();
        alunos9B1B.sort();
        alunos9B2A.sort();
        alunos9B2B.sort();
        alunos9B3A.sort();
        alunos9B3B.sort();
      }
      room.splice(0, numberOfStudents);
    }
    addStudentsAt9B(alunos9A, 5);
    addStudentsAt9B(alunos9B, 6);
    addStudentsAt9B(alunos1A, 6);
    addStudentsAt9B(alunos1B, 5);
    addStudentsAt9B(alunos2A, 4);
    addStudentsAt9B(alunos2B, 4);
    addStudentsAt9B(alunos3A, 4);
    addStudentsAt9B(alunos3B, 5);

    function addStudentsAt1A(room, numberOfStudents) {
      for (var i = 0; i < numberOfStudents; i++) {
        // sala1A.push(room[i])
        if (room == alunos9A) {
          alunos1A9A.push(room[i]);
        } else if (room == alunos9B) {
          alunos1A9B.push(room[i]);
        } else if (room == alunos1A) {
          alunos1A1A.push(room[i]);
        } else if (room == alunos1B) {
          alunos1A1B.push(room[i]);
        } else if (room == alunos2A) {
          alunos1A2A.push(room[i]);
        } else if (room == alunos2B) {
          alunos1A2B.push(room[i]);
        } else if (room == alunos3A) {
          alunos1A3A.push(room[i]);
        } else if (room == alunos3B) {
          alunos1A3B.push(room[i]);
        }
        alunos1A9A.sort();
        alunos1A9B.sort();
        alunos1A1A.sort();
        alunos1A1B.sort();
        alunos1A2A.sort();
        alunos1A2B.sort();
        alunos1A3A.sort();
        alunos1A3B.sort();
      }
      room.splice(0, numberOfStudents);
    }
    addStudentsAt1A(alunos9A, 5);
    addStudentsAt1A(alunos9B, 5);
    addStudentsAt1A(alunos1A, 4);
    addStudentsAt1A(alunos1B, 4);
    addStudentsAt1A(alunos2A, 4);
    addStudentsAt1A(alunos2B, 4);
    addStudentsAt1A(alunos3A, 4);
    addStudentsAt1A(alunos3B, 4);

    //SALA 1B:
    function addStudentsAt1B(room, numberOfStudents) {
      for (var i = 0; i < numberOfStudents; i++) {
        // sala1B.push(room[i])
        if (room == alunos9A) {
          alunos1B9A.push(room[i]);
        } else if (room == alunos9B) {
          alunos1B9B.push(room[i]);
        } else if (room == alunos1A) {
          alunos1B1A.push(room[i]);
        } else if (room == alunos1B) {
          alunos1B1B.push(room[i]);
        } else if (room == alunos2A) {
          alunos1B2A.push(room[i]);
        } else if (room == alunos2B) {
          alunos1B2B.push(room[i]);
        } else if (room == alunos3A) {
          alunos1B3A.push(room[i]);
        } else if (room == alunos3B) {
          alunos1B3B.push(room[i]);
        }
        alunos1B9A.sort();
        alunos1B9B.sort();
        alunos1B1A.sort();
        alunos1B1B.sort();
        alunos1B2A.sort();
        alunos1B2B.sort();
        alunos1B3A.sort();
        alunos1B3B.sort();
      }
      room.splice(0, numberOfStudents);
    }
    addStudentsAt1B(alunos9A, 5);
    addStudentsAt1B(alunos9B, 5);
    addStudentsAt1B(alunos1A, 4);
    addStudentsAt1B(alunos1B, 5);
    addStudentsAt1B(alunos2A, 3);
    addStudentsAt1B(alunos2B, 3);
    addStudentsAt1B(alunos3A, 3);
    addStudentsAt1B(alunos3B, 4);

    //SALA 2A:
    function addStudentsAt2A(room, numberOfStudents) {
      for (var i = 0; i < numberOfStudents; i++) {
        // sala2A.push(room[i])
        if (room == alunos9A) {
          alunos2A9A.push(room[i]);
        } else if (room == alunos9B) {
          alunos2A9B.push(room[i]);
        } else if (room == alunos1A) {
          alunos2A1A.push(room[i]);
        } else if (room == alunos1B) {
          alunos2A1B.push(room[i]);
        } else if (room == alunos2A) {
          alunos2A2A.push(room[i]);
        } else if (room == alunos2B) {
          alunos2A2B.push(room[i]);
        } else if (room == alunos3A) {
          alunos2A3A.push(room[i]);
        } else if (room == alunos3B) {
          alunos2A3B.push(room[i]);
        }
        alunos2A9A.sort();
        alunos2A9B.sort();
        alunos2A1A.sort();
        alunos2A1B.sort();
        alunos2A2A.sort();
        alunos2A2B.sort();
        alunos2A3A.sort();
        alunos2A3B.sort();
      }
      room.splice(0, numberOfStudents);
    }
    addStudentsAt2A(alunos9A, 4);
    addStudentsAt2A(alunos9B, 4);
    addStudentsAt2A(alunos1A, 3);
    addStudentsAt2A(alunos1B, 4);
    addStudentsAt2A(alunos2A, 3);
    addStudentsAt2A(alunos2B, 3);
    addStudentsAt2A(alunos3A, 3);
    addStudentsAt2A(alunos3B, 4);

    //SALA 2B:
    function addStudentsAt2B(room, numberOfStudents) {
      for (var i = 0; i < numberOfStudents; i++) {
        // sala2B.push(room[i])
        if (room == alunos9A) {
          alunos2B9A.push(room[i]);
        } else if (room == alunos9B) {
          alunos2B9B.push(room[i]);
        } else if (room == alunos1A) {
          alunos2B1A.push(room[i]);
        } else if (room == alunos1B) {
          alunos2B1B.push(room[i]);
        } else if (room == alunos2A) {
          alunos2B2A.push(room[i]);
        } else if (room == alunos2B) {
          alunos2B2B.push(room[i]);
        } else if (room == alunos3A) {
          alunos2B3A.push(room[i]);
        } else if (room == alunos3B) {
          alunos2B3B.push(room[i]);
        }
        alunos2B9A.sort();
        alunos2B9B.sort();
        alunos2B1A.sort();
        alunos2B1B.sort();
        alunos2B2A.sort();
        alunos2B2B.sort();
        alunos2B3A.sort();
        alunos2B3B.sort();
      }
      room.splice(0, numberOfStudents);
    }
    addStudentsAt2B(alunos9A, 4);
    addStudentsAt2B(alunos9B, 4);
    addStudentsAt2B(alunos1A, 4);
    addStudentsAt2B(alunos1B, 3);
    addStudentsAt2B(alunos2A, 3);
    addStudentsAt2B(alunos2B, 3);
    addStudentsAt2B(alunos3A, 3);
    addStudentsAt2B(alunos3B, 3);

    //SALA 3A:
    function addStudentsAt3A(room, numberOfStudents) {
      for (var i = 0; i < numberOfStudents; i++) {
        // sala3A.push(room[i])
        if (room == alunos9A) {
          alunos3A9A.push(room[i]);
        } else if (room == alunos9B) {
          alunos3A9B.push(room[i]);
        } else if (room == alunos1A) {
          alunos3A1A.push(room[i]);
        } else if (room == alunos1B) {
          alunos3A1B.push(room[i]);
        } else if (room == alunos2A) {
          alunos3A2A.push(room[i]);
        } else if (room == alunos2B) {
          alunos3A2B.push(room[i]);
        } else if (room == alunos3A) {
          alunos3A3A.push(room[i]);
        } else if (room == alunos3B) {
          alunos3A3B.push(room[i]);
        }
        alunos3A9A.sort();
        alunos3A9B.sort();
        alunos3A1A.sort();
        alunos3A1B.sort();
        alunos3A2A.sort();
        alunos3A2B.sort();
        alunos3A3A.sort();
        alunos3A3B.sort();
      }
      room.splice(0, numberOfStudents);
    }
    addStudentsAt3A(alunos9A, 4);
    addStudentsAt3A(alunos9B, 5);
    addStudentsAt3A(alunos1A, 3);
    addStudentsAt3A(alunos1B, 3);
    addStudentsAt3A(alunos2A, 3);
    addStudentsAt3A(alunos2B, 3);
    addStudentsAt3A(alunos3A, 3);
    addStudentsAt3A(alunos3B, 3);
    /*
                                9A: 5 5 6 4 4 4 4 4
                                9B: 5 6 6 5 4 4 4 5
                                1A: 5 5 4 4 4 4 4 4
                                1B: 5 5 4 5 3 3 3 4
                                2A: 4 4 3 4 3 3 3 4
                                2B: 4 4 4 3 3 3 3 3
                                3A: 4 5 3 3 3 3 3 3
                                3B: 4 5 4 4 4 3 3 5
                                */

    //SALA 3B:
    function addStudentsAt3B(room, numberOfStudents) {
      for (var i = 0; i < numberOfStudents; i++) {
        // sala3B.push(room[i])
        if (room == alunos9A) {
          alunos3B9A.push(room[i]);
        } else if (room == alunos9B) {
          alunos3B9B.push(room[i]);
        } else if (room == alunos1A) {
          alunos3B1A.push(room[i]);
        } else if (room == alunos1B) {
          alunos3B1B.push(room[i]);
        } else if (room == alunos2A) {
          alunos3B2A.push(room[i]);
        } else if (room == alunos2B) {
          alunos3B2B.push(room[i]);
        } else if (room == alunos3A) {
          alunos3B3A.push(room[i]);
        } else if (room == alunos3B) {
          alunos3B3B.push(room[i]);
        }
        alunos3A9A.sort();
        alunos3A9B.sort();
        alunos3A1A.sort();
        alunos3A1B.sort();
        alunos3A2A.sort();
        alunos3A2B.sort();
        alunos3A3A.sort();
        alunos3A3B.sort();
      }
      room.splice(0, numberOfStudents);
    }
    addStudentsAt3B(alunos9A, 4);
    addStudentsAt3B(alunos9B, 5);
    addStudentsAt3B(alunos1A, 4);
    addStudentsAt3B(alunos1B, 4);
    addStudentsAt3B(alunos2A, 4);
    addStudentsAt3B(alunos2B, 3);
    addStudentsAt3B(alunos3A, 3);
    addStudentsAt3B(alunos3B, 5);
  }
  randomizingTheOrderOfTheStudents();
  sala9A.push(
    ...alunos9A9A,
    ...alunos9A9B,
    ...alunos9A1A,
    ...alunos9A1B,
    ...alunos9A2A,
    ...alunos9A2B,
    ...alunos9A3A,
    ...alunos9A3B
  );

  sala9B.push(
    ...alunos9B9A,
    ...alunos9B9B,
    ...alunos9B1A,
    ...alunos9B1B,
    ...alunos9B2A,
    ...alunos9B2B,
    ...alunos9B3A,
    ...alunos9B3B
  );

  sala1A.push(
    ...alunos1A9A,
    ...alunos1A9B,
    ...alunos1A1A,
    ...alunos1A1B,
    ...alunos1A2A,
    ...alunos1A2B,
    ...alunos1A3A,
    ...alunos1A3B
  );

  sala1B.push(
    ...alunos1B9A,
    ...alunos1B9B,
    ...alunos1B1A,
    ...alunos1B1B,
    ...alunos1B2A,
    ...alunos1B2B,
    ...alunos1B3A,
    ...alunos1B3B
  );

  sala2A.push(
    ...alunos2A9A,
    ...alunos2A9B,
    ...alunos2A1A,
    ...alunos2A1B,
    ...alunos2A2A,
    ...alunos2A2B,
    ...alunos2A3A,
    ...alunos2A3B
  );

  sala2B.push(
    ...alunos2B9A,
    ...alunos2B9B,
    ...alunos2B1A,
    ...alunos2B1B,
    ...alunos2B2A,
    ...alunos2B2B,
    ...alunos2B3A,
    ...alunos2B3B
  );

  sala3A.push(
    ...alunos3A9A,
    ...alunos3A9B,
    ...alunos3A1A,
    ...alunos3A1B,
    ...alunos3A2A,
    ...alunos3A2B,
    ...alunos3A3A,
    ...alunos3A3B
  );

  sala3B.push(
    ...alunos3B9A,
    ...alunos3B9B,
    ...alunos3B1A,
    ...alunos3B1B,
    ...alunos3B2A,
    ...alunos3B2B,
    ...alunos3B3A,
    ...alunos3B3B
  );

  console.log(alunos3A3A);
  for (var i = 0; i < sala9A.length; i++) {
    if (i == 0) {
      res9A.innerHTML += `<h2>SALA 9A</h2>`;
    }
    res9A.innerHTML += `${sala9A[i]} <br>`;
  }
  for (var i = 0; i < sala9B.length; i++) {
    if (i == 0) {
      res9B.innerHTML += `<h2>SALA 9B</h2>`;
    }
    res9B.innerHTML += `${sala9B[i]} <br>`;
  }
  for (var i = 0; i < sala1A.length; i++) {
    if (i == 0) {
      res1A.innerHTML += `<h2>SALA 1A</h2>`;
    }
    res1A.innerHTML += `${sala1A[i]} <br>`;
  }
  for (var i = 0; i < sala1B.length; i++) {
    if (i == 0) {
      res1B.innerHTML += `<h2>SALA 1B</h2>`;
    }
    res1B.innerHTML += `${sala1B[i]} <br>`;
  }
  for (var i = 0; i < sala2A.length; i++) {
    if (i == 0) {
      res2A.innerHTML += `<h2>SALA 2A</h2>`;
    }
    res2A.innerHTML += `${sala2A[i]} <br>`;
  }
  for (var i = 0; i < sala2B.length; i++) {
    if (i == 0) {
      res2B.innerHTML += `<h2>SALA 2B</h2>`;
    }
    res2B.innerHTML += `${sala2B[i]} <br>`;
  }
  for (var i = 0; i < sala3A.length; i++) {
    if (i == 0) {
      res3A.innerHTML += `<h2>SALA 3A</h2>`;
    }
    res3A.innerHTML += `${sala3A[i]} <br>`;
  }
  for (var i = 0; i < sala3B.length; i++) {
    if (i == 0) {
      res3B.innerHTML += `<h2>SALA 3B</h2>`;
    }
    res3B.innerHTML += `${sala3B[i]} <br>`;
  }

  console.log(sala9A.length);
  console.log(sala9B.length);
  console.log(sala1A.length);
  console.log(sala1B.length);
  console.log(sala2A.length);
  console.log(sala2B.length);
  console.log(sala3A.length);
  console.log(sala3B.length);
  var res = document.getElementById("res");
  res.innerHTML = `<table border="1"> 
  <tr>
  <td></td> 
  <td><strong>Alunos do 9ºA</strong></td>
  <td><strong>Alunos do</strong></td>
  <td><strong>Alunos do 1ºA</strong></td> 
  <td><strong>Alunos do 1ºB</strong></td>
  <td><strong>Alunos do 2ºA</strong></td>
  <td><strong>Alunos do 2ºB</strong></td>
  <td><strong>Alunos do 3ºA</strong></td>
  <td><strong>Alunos do 3ºB</strong></td>
  </tr>
  <tr>
  <td><strong>Local: Sala 9A</strong></td>
  <td> 
  ${alunos9A9A[0]} <br>
  ${alunos9A9A[1]} <br>
  ${alunos9A9A[2]} <br>
  ${alunos9A9A[3]} <br>
  ${alunos9A9A[4]} <br>
  </td> 
  
  <td> 
  ${alunos9A9B[0]} <br>
  ${alunos9A9B[1]} <br>
  ${alunos9A9B[2]} <br>
  ${alunos9A9B[3]} <br>
  ${alunos9A9B[4]} <br>
  </td>

  <td> 
  ${alunos9A1A[0]} <br>
  ${alunos9A1A[1]} <br>
  ${alunos9A1A[2]} <br>
  ${alunos9A1A[3]} <br>
  ${alunos9A1A[4]} <br>
  ${alunos9A1A[5]} <br>
  </td>

  <td> 
  ${alunos9A1B[0]} <br>
  ${alunos9A1B[1]} <br>
  ${alunos9A1B[2]} <br>
  ${alunos9A1B[3]} <br>
  </td>

  <td> 
  ${alunos9A2A[0]} <br>
  ${alunos9A2A[1]} <br>
  ${alunos9A2A[2]} <br>
  ${alunos9A2A[3]} <br>
  </td>
  
  <td> 
  ${alunos9A2B[0]} <br>
  ${alunos9A2B[1]} <br>
  ${alunos9A2B[2]} <br>
  ${alunos9A2B[3]} <br>
  </td>

  <td>
    ${alunos9A3A[0]} <br>
  ${alunos9A3A[1]} <br>
  ${alunos9A3A[2]} <br>
  ${alunos9A3A[3]} <br>
  </td>

  <td> 
  ${alunos9A3B[0]} <br>
  ${alunos9A3B[1]} <br>
  ${alunos9A3B[2]} <br>
  ${alunos9A3B[3]} <br>
  </td>

  </tr>





  <tr>
  <td><strong>Local: Sala 9B</strong></td> 
  <td> 
  ${alunos9B9A[0]} <br>
  ${alunos9B9A[1]} <br>
  ${alunos9B9A[2]} <br>
  ${alunos9B9A[3]} <br>
  ${alunos9B9A[4]} <br>
  </td> 
  
  <td> 
  ${alunos9B9B[0]} <br>
  ${alunos9B9B[1]} <br>
  ${alunos9B9B[2]} <br>
  ${alunos9B9B[3]} <br>
  ${alunos9B9B[4]} <br>
  ${alunos9B9B[5]} <br>
  </td>

  <td> 
  ${alunos9B1A[0]} <br>
  ${alunos9B1A[1]} <br>
  ${alunos9B1A[2]} <br>
  ${alunos9B1A[3]} <br>
  ${alunos9B1A[4]} <br>
  ${alunos9B1A[5]} <br>
  </td>

  <td> 
  ${alunos9B1B[0]} <br>
  ${alunos9B1B[1]} <br>
  ${alunos9B1B[2]} <br>
  ${alunos9B1B[3]} <br>
  ${alunos9B1B[4]} <br>
  </td>

  <td> 
  ${alunos9B2A[0]} <br>
  ${alunos9B2A[1]} <br>
  ${alunos9B2A[2]} <br>
  ${alunos9B2A[3]} <br>
  </td>
  
  <td> 
  ${alunos9B2B[0]} <br>
  ${alunos9B2B[1]} <br>
  ${alunos9B2B[2]} <br>
  ${alunos9B2B[3]} <br>
  </td>

  <td> 
  ${alunos9B3A[0]} <br>
  ${alunos9B3A[1]} <br>
  ${alunos9B3A[2]} <br>
  ${alunos9B3A[3]} <br>
  </td>

  <td> 
  ${alunos9B3B[0]} <br>
  ${alunos9B3B[1]} <br>
  ${alunos9B3B[2]} <br>
  ${alunos9B3B[3]} <br>
  ${alunos9B3B[4]} <br>
  </td>
  </tr>



  <tr>
  <td><strong>Local: Sala 1A</strong></td>
  <td> 
  ${alunos1A9A[0]} <br>
  ${alunos1A9A[1]} <br>
  ${alunos1A9A[2]} <br>
  ${alunos1A9A[3]} <br>
  ${alunos1A9A[4]} <br>
  </td> 
  
  <td> 
  ${alunos1A9B[0]} <br>
  ${alunos1A9B[1]} <br>
  ${alunos1A9B[2]} <br>
  ${alunos1A9B[3]} <br>
  ${alunos1A9B[4]} <br>
  </td>

  <td> 
  ${alunos1A1A[0]} <br>
  ${alunos1A1A[1]} <br>
  ${alunos1A1A[2]} <br>
  ${alunos1A1A[3]} <br>
  </td>

  <td> 
  ${alunos1A1B[0]} <br>
  ${alunos1A1B[1]} <br>
  ${alunos1A1B[2]} <br>
  ${alunos1A1B[3]} <br>
  </td>

  <td> 
  ${alunos1A2A[0]} <br>
  ${alunos1A2A[1]} <br>
  ${alunos1A2A[2]} <br>
  ${alunos1A2A[3]} <br>
  </td>
  
  <td> 
  ${alunos1A2B[0]} <br>
  ${alunos1A2B[1]} <br>
  ${alunos1A2B[2]} <br>
  ${alunos1A2B[3]} <br>
  </td>

  <td> 
  ${alunos1A3A[0]} <br>
  ${alunos1A3A[1]} <br>
  ${alunos1A3A[2]} <br>
  ${alunos1A3A[3]} <br>
  </td>

  <td> 
  ${alunos1A3B[0]} <br>
  ${alunos1A3B[1]} <br>
  ${alunos1A3B[2]} <br>
  ${alunos1A3B[3]} <br>
  </td>
  </tr>



  <tr>
  <td><strong>Local: Sala 1B</strong></td>
  <td> 
  ${alunos1B9A[0]} <br>
  ${alunos1B9A[1]} <br>
  ${alunos1B9A[2]} <br>
  ${alunos1B9A[3]} <br>
  ${alunos1B9A[4]} <br>
  </td> 
  
  <td> 
  ${alunos1B9B[0]} <br>
  ${alunos1B9B[1]} <br>
  ${alunos1B9B[2]} <br>
  ${alunos1B9B[3]} <br>
  ${alunos1B9B[4]} <br>
  </td>

  <td> 
  ${alunos1B1A[0]} <br>
  ${alunos1B1A[1]} <br>
  ${alunos1B1A[2]} <br>
  ${alunos1B1A[3]} <br>
  </td>

  <td> 
  ${alunos1B1B[0]} <br>
  ${alunos1B1B[1]} <br>
  ${alunos1B1B[2]} <br>
  ${alunos1B1B[3]} <br>
  ${alunos1B1B[4]} <br>
  </td>

  <td> 
  ${alunos1B2A[0]} <br>
  ${alunos1B2A[1]} <br>
  ${alunos1B2A[2]} <br>
  </td>
  
  <td> 
  ${alunos1B2B[0]} <br>
  ${alunos1B2B[1]} <br>
  ${alunos1B2B[2]} <br>
  </td>

  <td> 
  ${alunos1B3A[0]} <br>
  ${alunos1B3A[1]} <br>
  ${alunos1B3A[2]} <br>
  </td>

  <td> 
  ${alunos1B3B[0]} <br>
  ${alunos1B3B[1]} <br>
  ${alunos1B3B[2]} <br>
  ${alunos1B3B[3]} <br>
  </td>
  </tr>




  <tr>
  <td><strong>Local: Sala 2A</strong></td>
  <td> 
  ${alunos2A9A[0]} <br>
  ${alunos2A9A[1]} <br>
  ${alunos2A9A[2]} <br>
  ${alunos2A9A[3]} <br>
  </td> 
  
  <td> 
  ${alunos2A9B[0]} <br>
  ${alunos2A9B[1]} <br>
  ${alunos2A9B[2]} <br>
  ${alunos2A9B[3]} <br>
  </td>

  <td> 
  ${alunos2A1A[0]} <br>
  ${alunos2A1A[1]} <br>
  ${alunos2A1A[2]} <br>
  </td>

  <td> 
  ${alunos2A1B[0]} <br>
  ${alunos2A1B[1]} <br>
  ${alunos2A1B[2]} <br>
  ${alunos2A1B[3]} <br>
  </td>

  <td> 
  ${alunos2A2A[0]} <br>
  ${alunos2A2A[1]} <br>
  ${alunos2A2A[2]} <br>
  </td>
  
  <td> 
  ${alunos2A2B[0]} <br>
  ${alunos2A2B[1]} <br>
  ${alunos2A2B[2]} <br>
  </td>

  <td> 
  ${alunos2A3A[0]} <br>
  ${alunos2A3A[1]} <br>
  ${alunos2A3A[2]} <br>
  </td>

  <td> 
  ${alunos2A3B[0]} <br>
  ${alunos2A3B[1]} <br>
  ${alunos2A3B[2]} <br>
  ${alunos2A3B[3]} <br>
  </td>
  </tr>





  <tr>
  <td><strong>Local: Sala 2B</strong></td>
  <td> 
  ${alunos2B9A[0]} <br>
  ${alunos2B9A[1]} <br>
  ${alunos2B9A[2]} <br>
  ${alunos2B9A[3]} <br>
  </td> 
  
  <td> 
  ${alunos2B9B[0]} <br>
  ${alunos2B9B[1]} <br>
  ${alunos2B9B[2]} <br>
  ${alunos2B9B[3]} <br>
  </td>

  <td> 
  ${alunos2B1A[0]} <br>
  ${alunos2B1A[1]} <br>
  ${alunos2B1A[2]} <br>
  ${alunos2B1A[3]} <br>
  </td>

  <td> 
  ${alunos2B1B[0]} <br>
  ${alunos2B1B[1]} <br>
  ${alunos2B1B[2]} <br>
  </td>

  <td> 
  ${alunos2B2A[0]} <br>
  ${alunos2B2A[1]} <br>
  ${alunos2B2A[2]} <br>
  </td>
  
  <td> 
  ${alunos2B2B[0]} <br>
  ${alunos2B2B[1]} <br>
  ${alunos2B2B[2]} <br>
  </td>

  <td> 
  ${alunos2B3A[0]} <br>
  ${alunos2B3A[1]} <br>
  ${alunos2B3A[2]} <br>
  </td>

  <td> 
  ${alunos2B3B[0]} <br>
  ${alunos2B3B[1]} <br>
  ${alunos2B3B[2]} <br>
  </td>
  </tr>




  <tr>
  <td><strong>Local: Sala 3A</strong></td>
  <td> 
  ${alunos3A9A[0]} <br>
  ${alunos3A9A[1]} <br>
  ${alunos3A9A[2]} <br>
  ${alunos3A9A[3]} <br>
  </td> 
  
  <td> 
  ${alunos3A9B[0]} <br>
  ${alunos3A9B[1]} <br>
  ${alunos3A9B[2]} <br>
  ${alunos3A9B[3]} <br>
  ${alunos3A9B[4]} <br>
  </td>

  <td> 
  ${alunos3A1A[0]} <br>
  ${alunos3A1A[1]} <br>
  ${alunos3A1A[2]} <br>
  </td>

  <td> 
  ${alunos3A1B[0]} <br>
  ${alunos3A1B[1]} <br>
  ${alunos3A1B[2]} <br>
  </td>

  <td> 
  ${alunos3A2A[0]} <br>
  ${alunos3A2A[1]} <br>
  ${alunos3A2A[2]} <br>
  </td>
  
  <td> 
  ${alunos3A2B[0]} <br>
  ${alunos3A2B[1]} <br>
  ${alunos3A2B[2]} <br>
  </td>

  <td> 
  ${alunos3A3A[0]} <br>
  ${alunos3A3A[1]} <br>
  ${alunos3A3A[2]} <br>
  </td>

  <td> 
  ${alunos3A3B[0]} <br>
  ${alunos3A3B[1]} <br>
  ${alunos3A3B[2]} <br>
  </td>
  </tr>





  <tr>
  <td><strong>Local: Sala 3B</strong></td>
  <td> 
  ${alunos3B9A[0]} <br>
  ${alunos3B9A[1]} <br>
  ${alunos3B9A[2]} <br>
  ${alunos3B9A[3]} <br>
  </td> 
  
  <td> 
  ${alunos3B9B[0]} <br>
  ${alunos3B9B[1]} <br>
  ${alunos3B9B[2]} <br>
  ${alunos3B9B[3]} <br>
  ${alunos3B9B[4]} <br>
  </td>

  <td> 
  ${alunos3B1A[0]} <br>
  ${alunos3B1A[1]} <br>
  ${alunos3B1A[2]} <br>
  ${alunos3B1A[3]} <br>
  </td>

  <td> 
  ${alunos3B1B[0]} <br>
  ${alunos3B1B[1]} <br>
  ${alunos3B1B[2]} <br>
  ${alunos3B1B[3]} <br>
  </td>

  <td> 
  ${alunos3B2A[0]} <br>
  ${alunos3B2A[1]} <br>
  ${alunos3B2A[2]} <br>
  ${alunos3B2A[3]} <br>
  </td>
  
  <td> 
  ${alunos3B2B[0]} <br>
  ${alunos3B2B[1]} <br>
  ${alunos3B2B[2]} <br>
  </td>

  <td> 
  ${alunos3B3A[0]} <br>
  ${alunos3B3A[1]} <br>
  ${alunos3B3A[2]} <br>
  </td>

  <td> 
  ${alunos3B3B[0]} <br>
  ${alunos3B3B[1]} <br>
  ${alunos3B3B[2]} <br>
  ${alunos3B3B[3]} <br>
  ${alunos3B3B[4]} <br>
  </td>
  </tr>
  </table>`;
}
function gerarPDF() {
    var dados = res.innerHTML;
    var janela = window.open("", "", "width=1200, height=1200");
    janela.document.write("<html><head><style>");
    janela.document.write(
      "table, tr, td { border: 1px solid black; border-collapse: collapse; font-size: 8px;} td {padding: 5px;} body {font-family: Helvetica;} "
    );
    janela.document.write("</style>");
    janela.document.write("</head>");
    janela.document.write("<body>");
    janela.document.write(dados);
    janela.document.write("</body></html>");
    janela.document.close();
    janela.print();
}

/*
        

        9A: 5 5 6 4 4 4 4 4
        9B: 5 6 6 5 4 4 4 5
        1A: 5 5 4 4 4 4 4 4
        1B: 5 5 4 5 3 3 3 4
        2A: 4 4 3 4 3 3 3 4
        2B: 4 4 4 3 3 3 3 3
        3A: 4 5 3 3 3 3 3 3
        3B: 4 5 4 4 4 3 3 5
            9 9 1 1 2 2 3 3
        */
