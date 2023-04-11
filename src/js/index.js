// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const calHeaderElement = document.getElementById('calHeader');
const calBodyElement = document.getElementById('calBody');
// const buttonsElement = calBody.getElementsByTagName('button');
const buttonsElement = calBodyElement.getElementsByTagName('button');

let num = '';
let operator = '';
let result = '';

for (let i = 0; i < buttonsElement.length; i++) {
	buttonsElement[i].addEventListener('click', () => {
		const buttonValue = buttonsElement[i].value;

		if (!isNaN(buttonValue) || buttonValue === ',') {
			//Selección números. Si se hace clic en un número o la coma, agregamos ese valor a la variable num

			if (buttonValue === ',' && num.includes(',')) {
				// Ya hay una coma decimal en el número, no hacer nada
				return;
			}

			num += buttonValue;
			console.log('primer numero ' + num);
			calHeaderElement.textContent = num;
		} else if (buttonValue === 'AC') {
			//Reset calculadora -> reseteamos los valores
			num = '';
			operator = '';
			result = '';
			calHeaderElement.textContent = '0';
		} else if (buttonValue === '=') {
			//Realizamos las operaciones al darle al =

			const numNumber = Number(num);
			const resultNumber = Number(result);

			switch (operator) {
				case '+':
					result = resultNumber + numNumber;
					break;
				case '-':
					result = resultNumber - numNumber;
					break;
				case '*':
					result = resultNumber * numNumber;
					break;
				case '/':
					result = resultNumber / numNumber;
					break;
				default:
					result = num;
					break;
			}

			num = '';
			operator = '';
			calHeader.textContent = result;
		} else {
			//Selección operador
			// Si se hace clic en un operador, almacenamos ese operador y el número actual en las variables correspondientes

			operator = buttonValue;
			console.log('este es el operador: ' + operator);
			result = num;
			console.log('este numeor se almacena en el resultado: ' + result);

			num = '';
		}
	});
}
