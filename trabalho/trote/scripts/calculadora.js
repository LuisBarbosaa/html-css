function trote(){
   let kits = Number(document.getElementById("kits").value)
   let ComSup = Number(document.getElementById("suple").value)
   let times = Number(document.getElementById("times").value)
   let meta
   let sangue = Number(document.getElementById("doacao").value)
   let leite = Number(document.getElementById("leite").value)
   let quiz = Number(document.getElementById("quiz").value)
   let mascote = Number(document.getElementById("masc").value)
   let apre = Number(document.getElementById("apre").value)
   let acaos = Number(document.getElementById("acao").value)
   let pontuacaoex = Number(document.getElementById("extra").value)
   let pontuacaoTotal 
   let arroz = Number(document.getElementById("arroz").value)
   let feijao = Number(document.getElementById("feijao").value)
   let macarrao = Number(document.getElementById("maca").value)
   let oleo = Number(document.getElementById("oleo").value)
   let kitA = Number(document.getElementById("kit").value)
   let lata = Number(document.getElementById("lasuple").value)


   switch (times) {
      case 1:
          if(kits == 91 && ComSup == 46){
              meta = 5000
         }
          
         else if(kits >= 73 && kits < 91 && ComSup >= 37 && ComSup < 46){
              meta = 4000
         }
         else if (kits >= 46 && kits < 73 && ComSup >= 23 && ComSup < 37){
              meta = 2500
         }
         else if (kits >= 18 && kits < 46 && ComSup <= 9 && ComSup < 23){
              meta = 1000
         }
         else if(kits < 18 && ComSup < 9){
             meta = 0 
         }
      break;

      case 2:
         if(kits == 84 && ComSup == 42){
             meta = 5000
         }
         else if(kits >= 67 && kits < 84 && ComSup >= 34 && ComSup < 42){
              meta = 4000
         }
         else if (kits >= 42 && kits < 67 && ComSup >= 21 && ComSup < 34){
              meta = 2500
         }
         else if (kits >= 17 && kits < 42 && ComSup >= 8 && ComSup < 21){
              meta = 1000
         }
         else if(kits < 17 && ComSup < 8){
              meta = 0
         }
      break;

      case 3:
         if(kits == 84 && ComSup == 42){
              meta = 5000
         }
         else if(kits >= 68 && kits < 84 && ComSup >= 34 && ComSup < 42){
              meta = 4000
              
         }
         else if (kits >= 42 && kits < 68 && ComSup >= 21 && ComSup < 34){
              meta = 2500
         }
         else if (kits >= 17 && kits < 42 && ComSup >= 9 && ComSup < 21){
              meta = 1000
         }
         else if(kits < 17 && ComSup < 8){
            meta = 0
         }
      break;

      case 4:
         if(kits == 81 && ComSup == 41){
                  meta = 5000
         }
         else if(kits >= 65 && kits < 81 && ComSup >= 33 && ComSup < 41){
                  meta = 4000
         }
         else if (kits >= 41 && kits < 65 && ComSup >= 21 && ComSup < 31){
                  meta = 2500
         }
         else if (kits >= 16 && kits < 41 && ComSup >= 8 && ComSup < 21){
                  meta = 1000
         }
         else if(kits < 16 && ComSup < 8){
                  meta = 0
         }
      break;

      case 5:
         if(kits == 108 && ComSup == 52){
                     meta = 5000
         }
         else if(kits >= 83 && kits < 108 && ComSup >= 42 && ComSup < 52){
                      meta = 4000
         }
         else if (kits >= 52 && kits < 83 && ComSup >= 26 && ComSup < 42){
                      meta = 2500
         }
         else if (kits >= 21 && kits < 52 && ComSup >= 10 && ComSup < 26){
                      meta = 1000
         }
         else if (kits < 21 && ComSup < 10){
                      meta = 0
         }
       break;
   }
    if (quiz > 1000){
      alert(`Pontuaçao incorreta`)
    }
    else if (mascote > 500){
      alert(`Pontuaçao incorreta`)
    }
    else if(apre > 1500){
      alert(`Pontuaçao incorreta`)
    }
    else if(acaos > 2000){
      alert(`Pontuaçao incorreta`)
    }
    else if(pontuacaoex > 1000){
      alert(`Pontuaçao incorreta`)
    }
    else if(sangue > 1){
       sangue = sangue * 20
    }
    else if(leite > 1){
         leite = leite * 2
    }
    else if(arroz > 1){
        arroz = arroz * 5
    }
    else if (feijao > 1){
        feijao = feijao * 2
    }
    else if(macarrao > 1){
      macarrao = macarrao + macarrao /2
    }
    else if(oleo > 1){
      oleo = oleo * 1
    }
    else if(kitA > 1){
      kitA = kitA * 30
    }
    else if(lata > 1){
      lata = lata * 15
    }

         
     pontuacaoTotal = meta + sangue + leite + quiz + mascote + apre + acaos + pontuacaoex + oleo + arroz + feijao + macarrao + kitA + lata;
    

    document.getElementById("resultado").innerHTML = `Pontuação Total: ${pontuacaoTotal}`;
    

}
