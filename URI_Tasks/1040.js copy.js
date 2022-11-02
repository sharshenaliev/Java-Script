const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const marks = lines[0].split(' ');
const n1 = parseFloat(marks[0]);
const n2 = parseFloat(marks[1]);
const n3 = parseFloat(marks[2]);
const n4 = parseFloat(marks[3]);

const med = (n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / 10;
if (med >= 7.0) {
    console.log(`Media: ${med.toFixed(1)}\n` +
                `Aluno aprovado.`);
} else if (med < 5.0) {
    console.log(`Media: ${med.toFixed(1)}\n` +
                `Aluno reprovado.`);
} else if (med >= 5.0 && med <= 6.9) {
    console.log(`Media: ${med.toFixed(1)}\n` +
                `Aluno em exame.`);

    const extra = parseFloat(lines[1]);
    console.log(`Nota do exame: ${extra.toFixed(1)}`);

    const finMed = (med + extra) / 2;
    if (finMed >= 5.0) {
        console.log(`Aluno aprovado.\n` + 
                    `Media final: ${finMed.toFixed(1)}`);
    } else if (med <= 4.9) {
        console.log(`Aluno reprovado.\n` +
                    `Media final: ${finMed.toFixed(1)}`);
    }
}

