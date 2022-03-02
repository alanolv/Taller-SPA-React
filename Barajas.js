function cartas() {
    let arr=["uno_de_"," dos_de_"," tres_de_"," cuatro_de_"," cinco_de_"," seis_de_"," siete_de_"," ocho_de_"," nueve_de_"," diez_de_"]
    let arr2=["corazones","treboles","diamantes","picas","monedas","copas","espadas","bastones","escudos","rosas","campanas","bellotas"]
    let arr5=[]
    var tipo = prompt('¿Que baraja desesas usar?\n1.Francesa, 2.Española, 3.Suiza');
    switch(tipo) {
        case '1':
            for (let step = 0; step < 4; step++) {
                var newArray = arr.map(number => number + arr2[step]);
                var newa = arr5.push(newArray) 
              }
            alert("La baraja seleccionada es francesa: "+arr5+", jota, reina, rey y as. ")
            break;
        case '2':
            for (let step = 4; step < 8; step++) {
                var newArray = arr.map(number => number + arr2[step]);
                var newa = arr5.push(newArray) 
              }
            alert("La baraja seleccionada es española: "+arr5+", escudero, caballo, rey.")
            break;
        case '3':
        for (let step = 8; step < 12; step++) {
            var newArray = arr.map(number => number + arr2[step]);
            var newa = arr5.push(newArray) 
          }
        alert("La baraja seleccionada es suiza: "+arr5+", escudero, caballo, rey.")
            break;
        default:
            alert("Ninguna baraja seleccionada")
    } 
  }
 cartas();