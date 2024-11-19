async function obtenirCours() {
    try {
        // Exemple d'API pour les cours de crypto-monnaies (par exemple, le cours du Bitcoin en USD)
        const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice/BTC.json");
        const data = await response.json();

        // Extraire le prix en USD
        const prixUSD = data.bpi.USD.rate;
        
        // Utilisation du retour chariot pour "réécrire" la ligne dans la console
        process.stdout.write(`Bitcoin : ${prixUSD}$`);
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
    }
}

obtenirCours();