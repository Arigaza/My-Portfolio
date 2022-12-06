exo0();
// exo1();
// exo2();
//exo3(100,3,20)
// exo4()
// exo5()
// exo6()
// exo6b()
// exo7()
// exo8()
// exo9()
// exo10()
// 0.
// Écrire un programme qui affiche "Hello World"

function exo0() {
	console.log("Hello World");
}

// 1.
// Écrire une fonction qui demande un nombre à l’utilisateur, puis qui calcule et affiche le carré de ce nombre
function exo1() {
	var number = prompt("Please enter a number: ", "a");
	// console.log();
	let number2 = number * number;
	console.log(number2)
}


// 2.
// Écrire une fonction qui demande deux nombres à l’utilisateur,
// puis échange la valeur de ces deux nombres.
// Exemple, si a = 2 et b = 5, le programme donnera a = 5 et b = 2
function exo2() {
	let a = prompt("Please enter a number: ", "a");
	let b = prompt("Please enter a number2: ", "b");
	let temp = a
	//  a = b
	//  b = c
	// console.log(`var a = ${a}`);
	// console.log(`var b = ${b}`);
	[a, b] = [b, a]
	console.log(a, b)
}

// 3.
// Écrire une fonction qui prend en paramètre le prix HT d’un article, le nombre d’articles et le taux de TVA, et qui fournit le prix total TTC correspondant.
function exo3(HT, TVA, amount) {
	HT = prompt("Please enter a number: ", "a");
	TVA = prompt("Please enter a number2: ", "b");
	amount = prompt("Please enter a number: ", "a");
	TVA = TVA / 100;
	var TTC = (((1 + TVA) * HT) * amount);
	console.log(`This is the full price : ${TTC}`);
}

// 4.
// Écrire une fonction qui prend en paramètre deux nombres et informe ensuite si leur produit est négatif ou positif (on laisse de côté le cas où le produit est nul).
// Attention toutefois : on ne doit pas calculer le produit des deux nombres
function exo4() {
	let a = prompt("Please enter a number: ", "a");
	let b = prompt("Please enter a number2: ", "b");
	if ((a > 0 && b > 0) || (a < 0 && b < 0)) {
		console.log("The result is a positive number")
	}
	else if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
		console.log("The result is a negative number")
	} else {
		console.log("The resulting number is null")
	}

}


// 5.
// Ecrire une fonction qui prend en paramètre l’âge d’un enfant. Ensuite, il l’informe de sa catégorie :
// ”Poussin” de 6 à 7 ans
// ”Pupille” de 8 à 9 ans
// ”Minime” de 10 à 11 ans
// ”Cadet” après 12 ans
// Utiliser return et afficher le résultat en dehors de la fonction
function exo5(age) {
	let categorie
	age = parseInt(prompt("Please enter a number: ", "a"))
	if (age < 6) {
		categorie = "You are too young"
	} else if (age => 6 && a <= 7) {
		categorie ="You are a Poussin"
	}
	else if (age => 8 && a <= 9) {
		categorie ="You are a Pupille"
	}
	else if (age => 10 && a <= 11) {
		categorie ="You are a Minime"
	}
	else {
		categorie ="You are a Cadet"
	}
	console.log(categorie)
return categorie
}
// 6.
// Écrire une fonction qui calcule une nombre aléatoire compris entre 0 et 100.
// Le programme demande à l'utilisateur de deviner le nombre, jusqu’à ce que la réponse convienne.
// En cas de réponse supérieure au nombre aléatoire, on fera apparaître un message : Plus petit ! , et inversement, Plus grand !
// Bonus : Utiliser return pour afficher le score (nombre de coups) en dehors de la fonction
function exo6b(guess, attempsb) {
	number = Math.floor(Math.random() * 100)
	attempsb = 0
	guess = parseInt(prompt("Take a guess: "));
	while (guess != number) {
		if (guess < number) {
			console.log("Higher")
			attempsb += 1
				guess = parseInt(prompt("Take a guess: "))
		} else if (guess > number) {
						attempsb++
				console.log("Lower")
			guess = parseInt(prompt("Take a guess: "))
		}
	}	
	attempsb += 1
			console.log( `you took ${attempsb} before finding the right result`)
	return attempsb
	}

function exo6() {
	let number = Math.floor(Math.random() * 100)
	let attemps = 0
	for (let guess = parseInt(prompt("Take a guess: ")); number;) {
		if (guess < number) {
			console.log("Higher")
			attemps += 1
			guess = parseInt(prompt("Take a guess: ")); number;
				} else if (guess > number) {
			attemps += 1
				console.log("Lower")
				guess = parseInt(prompt("Take a guess: ")); number;
			}
		else if (guess = number) {
			attemps += 1
				console.log(`You won after ${attemps} attemps before finding the right result`)
			return attemps
		}
		}
	}


// 7.
// Écrire une fonction qui prend en paramètre un nombre de départ, et qui calcule la somme des entiers jusqu’à ce nombre.
// Par exemple, si l’on entre 5, le programme doit calculer : 1 + 2 + 3 + 4 + 5 = 15
// NB : on souhaite afficher uniquement le résultat, pas la décomposition du calcul.
// Utiliser return et afficher le résultat en dehors de la fonction
function exo7(number) {
	number = parseInt(prompt("Choose a number: "));
	let sum = 0;
	// let result = 1 / 2 * (number * (number + 1));
	// console.log(result);
	for (let i = 1; i <= number; i++) {
		sum += i;
	}
	console.log(sum)
	return sum
}
// let score = exo7()
// console.log(`test ${score}`)

// 8. Écrire une fonction qui prend en paramètre un nombre de départ, et qui calcule sa factorielle.
// Utiliser return et afficher le résultat en dehors de la fonction
function exo8(num) {
	num = parseInt(prompt("Choose a number: "))
	var result = num;
	if (num === 0 || num === 1) {
		result = 1;
	}
	while (num > 1) {
		num--;
		result *= num;
	}
	return result
		;	
}
// let score = exo8()
// console.log(`test ${score}`)

// 9. Écrire une fonction qui remplit un tableau avec six valeurs : 0, 1, 4, 9, 16, 25.
// Il les écrit ensuite à l’écran
// Utiliser return et afficher le résultat en dehors de la fonction
// function exo9(a, b, c, d, e, f) {
// 	const array1 = [a, b, c, d, e, f]
// 	return array1
// }
// let score = exo8()
// console.log(`test ${score}`)
function exo9true() {
	let array = [0, 1, 4, 9, 16, 25]
	for (i=0 ; i <= array.length -1; i++) {
		console.log(array[i])
	}
}
exo9true()
// 10. Écrire une fonction qui prend en paramètre un tableau contenant les notes d’une classe,
// et qui renvoie le nombre de ces notes supérieures à la moyenne de la classe.
// Utiliser return et afficher le résultat en dehors de la fonction
function exo10(array1) {
	
	var average = array1.reduce((a, b) => a + b) / array1.length;
array1.forEach(element => {
	if (element < average) {
		array1.pop(element)
	}
});
console.log(array1)
}
// exo10([1, 2, 3, 4, 5, 6])

// 11. Ecrire une fonction qui retourne un tableau contenant 10 nombres aléatoires
// Utiliser return et afficher le résultat en dehors de la fonction
function exo11() {
	var randomNumber = []
	for (let i = 1; i <= 10; i++) {
		randomNumber.push(Math.random())
	}
	console.log(randomNumber)
}
// exo11()


