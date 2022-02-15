const { rejects } = require('assert');
const fs = require('fs');
const colors = require('colors')
const crearArchivo = async (base = 5,listar=false,hasta = 10) => {
    try {
        let salida = "";
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        if (listar) {
            console.log("====================".green);
            console.log("Tabla del ", colors.blue(base));
            console.log("====================".green);
            console.log(hasta);
            console.log(salida);
            return (`tabla-${base}.txt`);
        } else {
            return (`tabla-${base}.txt`);
        }
    } catch (error) {
        throw error('No se ha podido crear el archivo');
    }
};

module.exports = {
    crearArchivo
}