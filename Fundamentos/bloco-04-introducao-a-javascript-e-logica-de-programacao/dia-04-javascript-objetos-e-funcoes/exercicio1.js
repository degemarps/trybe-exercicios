let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

console.log('Bem-vinda, ' + info.personagem);

console.log('----------------------------');

console.log(info);

console.log('----------------------------');

for (let key in info) {
  console.log(key);
}

console.log('----------------------------');

for (let key in info) {
  console.log(info[key]);
}

console.log('----------------------------');

for (let key in info) {
  if (key == 'recorrente'){
    break;
  } else {
    console.log(info[key] + ' e ' + info2[key]);
  }
}

if (info['recorrente'] == 'Sim' && info2['recorrente'] == 'Sim') {
  console.log('Ambos recorrentes');
}