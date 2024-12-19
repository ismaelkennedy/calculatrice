// Sélectionner les éléments HTML
const input1 = document.querySelectorAll("input")[0]; // Premier champ d'entrée
const input2 = document.querySelectorAll("input")[1]; // Deuxième champ d'entrée
const button = document.querySelector("button"); // Bouton
const resultParagraph = document.querySelector("p"); // Paragraphe pour afficher le résultat

// Ajouter un écouteur d'événement au bouton
button.addEventListener("click", () => {
    // Récupérer les valeurs des deux champs d'entrée
    const value1 = parseFloat(input1.value); // Convertir en nombre
    const value2 = parseFloat(input2.value); // Convertir en nombre

    // Vérifier si les deux entrées sont des nombres valides
    if (isNaN(value1) || isNaN(value2)) {
        resultParagraph.textContent = "Veuillez entrer des nombres valides.";
        return;
    }

    // Effectuer l'addition
    const sum = value1 + value2;

    // Afficher le résultat
    resultParagraph.textContent = `Le résultat est: ${sum}`;
});
