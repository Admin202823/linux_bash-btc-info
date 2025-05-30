// Ce script récupère en continu le cours actuel du Bitcoin en dollars américains (USD)
// en utilisant l'API CryptoCompare, puis affiche le résultat dans la console toutes les 500 ms.
// Contrairement à btc.js qui effectue une seule récupération, ce script utilise setInterval
// pour mettre à jour le prix du Bitcoin à intervalles réguliers.

async function obtenirCours() {
    try {
        // 1. Effectuer une requête HTTP GET vers l'API CryptoCompare
        const response = await fetch("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD");
        
        // 2. Convertir la réponse en format JSON
        const data = await response.json();

        // 3. Extraire le prix du Bitcoin en USD depuis la réponse JSON
        const prixUSD = data.USD;

        // Effacer la ligne précédente et afficher la nouvelle valeur
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(`Bitcoin : ${prixUSD}$`);
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
    }
}

// 5. Appeler la fonction pour lancer la récupération du cours
obtenirCours();
setInterval(obtenirCours, 10000);
