const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const class1 = lines[0]
const class2 = lines[1]
const class3 = lines[2]

const classification = {
    'vertebrado': {
        'ave': {
            'carnivoro': 'aguia',
            'onivoro': 'pomba'
        },
        'mamifero': {
            'onivoro': 'homem',
            'herbivoro': 'vaca'
        }
    },
    'invertebrado': {
        'inseto': {
            'hematofago': 'pulga',
            'herbivoro': 'lagarta'
        },
        'anelideo': {
            'hematofago': 'sanguessuga',
            'onivoro': 'minhoca'
        }
    }
}

console.log(classification[class1][class2][class3])