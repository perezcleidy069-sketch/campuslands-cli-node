import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { agregarCamper } from './campers.js';

const rl = readline.createInterface({ input, output });

async function main() {
    try {
        console.log('=== REGISTRO INTERACTIVO DE CAMPERS (ESM) ===');
        const nombre = await rl.question('¿Nombre del camper? ');
        const stack = await rl.question('¿Stack tecnológico? ');

        const guardado = await agregarCamper(nombre, stack);
        console.log('🎉 Registrado en JSON:', guardado);
    } catch (error) {
        console.error('❌ Error al registrar:', error.message);
    } finally {
        rl.close(); // ¡Obligatorio para que Node no quede congelado!
    }
}

main();
