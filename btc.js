// Ce script récupère le cours actuel du Bitcoin en dollars américains (USD)
// en utilisant l'API CryptoCompare, puis affiche le résultat dans la console.

async function obtenirCours() {
    try {
        // 1. Effectuer une requête HTTP GET vers l'API CryptoCompare
        const response = await fetch("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD");
        
        // 2. Convertir la réponse en format JSON
        const data = await response.json();

        // 3. Extraire le prix du Bitcoin en USD depuis la réponse JSON
        const prixUSD = data.USD;
        
        // 4. Afficher le prix du Bitcoin dans la console
        process.stdout.write(`Bitcoin : ${prixUSD}$`);
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
    }
}

// 5. Appeler la fonction pour lancer la récupération du cours
obtenirCours();