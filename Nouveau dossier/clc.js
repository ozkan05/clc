// Fonction pour afficher les chiffres et opérateurs dans le champ de résultat
function display(value) {
    document.getElementById('result').value += value;
}
 
// Fonction pour calculer le résultat
function calculate() {
    var result = document.getElementById('result').value;
    try {
        var calculatedValue = eval(result);
        document.getElementById('result').value = calculatedValue;
       
        // Ajouter le calcul à l'historique
        addToHistory(result + ' = ' + calculatedValue);
    } catch (e) {
        document.getElementById('result').value = "Error";
    }
}
 
// Fonction pour effacer l'écran
function clearScreen() {
    document.getElementById('result').value = "";
}
 
// Fonction pour ajouter un calcul à l'historique
function addToHistory(calculation) {
    var history = document.getElementById('history');
    history.value = history.value + calculation + '\n';  // Ajouter le calcul à l'historique
    history.scrollTop = history.scrollHeight;  // Faire défiler vers le bas
}
 
// Fonction pour calculer le pourcentage
function calculatePercentage() {
    var value = document.getElementById('result').value;
    document.getElementById('result').value = eval(value) / 100;
}
 
// Fonction pour calculer le carré
function calculateSquare() {
    var value = document.getElementById('result').value;
    document.getElementById('result').value = Math.pow(eval(value), 2);  // Utilisation de Math.pow pour le carré
    addToHistory(value + '² = ' + document.getElementById('result').value);  // Ajouter l'opération au flux d'historique
}
 
// Fonction pour calculer la racine carrée
function calculateSquareRoot() {
    var value = document.getElementById('result').value;
    document.getElementById('result').value = Math.sqrt(eval(value));  // Utilisation de Math.sqrt pour la racine carrée
    addToHistory('√' + value + ' = ' + document.getElementById('result').value);  // Ajouter l'opération au flux d'historique
}
 
// Fonction pour calculer le carré
function calculateSquare() {
    var value = document.getElementById('result').value;
    document.getElementById('result').value = eval(value) * eval(value);
}
 
// Fonction pour calculer la racine carrée
function calculateSquareRoot() {
    var value = document.getElementById('result').value;
    document.getElementById('result').value = Math.sqrt(eval(value));
}
 
// Écouter les événements du clavier
document.addEventListener('keydown', function(event) {
    // Si la touche appuyée est un chiffre du pavé numérique ou les touches de calcul
    if (event.key >= '0' && event.key <= '9') {
        display(event.key);  // Afficher le chiffre
    }
    else if (event.key === '/') {
        display('/');
    }
    else if (event.key === '-') {
        display('-');
    }
    else if (event.key === '+') {
        display('+');
    }
    else if (event.key === '*') {
        display('*');
    }
    else if (event.key === 'Enter') {  // Touche "Enter" pour calculer
        calculate();
    }
    else if (event.key === 'Backspace') {  // Touche "Backspace" pour effacer un caractère
        var currentValue = document.getElementById('result').value;
        document.getElementById('result').value = currentValue.slice(0, -1);
    }
    else if (event.key === 'c' || event.key === 'C') {  // Touche "C" pour effacer l'écran
        clearScreen();
    }
});