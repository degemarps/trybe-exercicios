// Utilizando then/catch
function matematicFunc1(num1, num2, num3) {
	const promise = new Promise((resolve, reject) => {
		if (typeof num1 !== 'number'
      || typeof num2 !== 'number'
      || typeof num3 !== 'number')
			reject(new Error('Informe apenas números')); 
    
		const resultOp = (num1 + num2) * num3;

		if (resultOp < 50) reject(new Error('Valor muito baixo'));

    resolve(resultOp)
	});

	return promise;
}

matematicFunc1(3, 5, 9)
	.then(result => console.log(`Sucesso: ${result}`))
	.catch(err => console.log(`erro: ${err}`));

// Utilizando async/await
function matematicFunc2(num1, num2, num3) {
  const promise = new Promise((resolve, reject) => {
    if (typeof num1 !== 'number'
      || typeof num2 !== 'number'
      || typeof num3 !== 'number')
      reject(new Error('Informe apenas números')); 
    
    const resultOp = (num1 + num2) * num3;

    if (resultOp < 50) reject(new Error('Valor muito baixo'));

    resolve(resultOp)
  });

  return promise;
}

async function resolveFunc() {
  try {
    const result = await matematicFunc2(3, 5, 6);
    console.log(`Sucesso: ${result}`);
  } catch (error) {
    console.log(`erro: ${error}`);
  }
}

resolveFunc();
