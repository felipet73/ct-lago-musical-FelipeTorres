const readline = require('readline');

const main = async() => {
    const SonidosRana = ['brr', 'birip', 'brrah', 'croac'];
    const SonidosLibelula = ['fiu', 'plop', 'pep'];
    const SonidosGrillo = ['cric-cric', 'trri-trri', 'bri-bri'];
    const Cancion1 = ['brr', 'fiu', 'cric-cric', 'brrah'];
    const Cancion2 = ['pep', 'birip', 'trri-trri', 'croac'];
    const Cancion3 = ['bri-bri', 'plop', 'cric-cric', 'brrah'];
    let captura = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    captura.question('Escribe sonido ', function(resp){
        if (SonidosRana.find(x=>x===resp) || SonidosLibelula.find(x=>x===resp) || SonidosGrillo.find(x=>x===resp)){
            let index = Cancion1.findIndex((element) => element === resp)
            let salida;
            if (index>=0) salida = Cancion1.map((x,i)=> i>index && x).filter(x=>x);
            else{
                index = Cancion2.findIndex((element) => element === resp)
                if (index>=0) salida = Cancion2.map((x,i)=> i>index && x).filter(x=>x);
                else{
                    index = Cancion3.findIndex((element) => element === resp)
                    if (index>=0) salida = Cancion3.map((x,i)=> i>index && x).filter(x=>x);
                }
            }
            console.log(salida);
        }
        captura.close();
    })
}
main();

