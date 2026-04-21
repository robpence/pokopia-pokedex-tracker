const fs = require('node:fs');
const PokemonData = require('./PokemonData.json');
const PokemonToHabitat = require('./PokemonToHabitat.json');
const HabitatData = require('./HabitatData.json');

// console.log(data);
// let Pokemon = [];
// data.forEach(poke => {
//     let habitat1string = poke["Habitat 1 Details"];
//     const index1 = habitat1string.indexOf('- \n');
//     const result1 = index1 !== -1 ? habitat1string.substring(0, index1) : habitat1string;
//     console.log(result1);

//     let habitat2string = poke["Habitat 2 Details"];
//     const index2 = habitat2string.indexOf('- \n');
//     const result2 = index2 !== -1 ? habitat2string.substring(0, index2) : habitat2string;
//     console.log(result2);

//     let habitat3string = poke["Habitat 3 Details"];
//     const index3 = habitat3string.indexOf('- \n');
//     const result3 = index3 !== -1 ? habitat3string.substring(0, index3) : habitat3string;
//     console.log(result3);

//     let pokemon = {
//         "Name": poke.Name,
//         "Habitat1": result1,
//         "Habitat2": result2,
//         "Habitat3": result3
//     };
//     Pokemon.push(pokemon);
// });
// console.log(Pokemon[5]);
// const jsonString = JSON.stringify(Pokemon, null, 2);
// try {
//   fs.writeFileSync('user.json', jsonString, 'utf8');
//   console.log("File written successfully!");
// } catch (err) {
//   console.error("Error writing file:", err);
// }
// console.log(PokemonData[0]);
// console.log(PokemonToHabitat[0]);


// Script to give Pokemon there Habitats.
// for (let i = 0; i < PokemonData.length; i++) {
//     const pokemon = PokemonData[i];
//     console.log(pokemon.Name);

//     for (let i = 0; i < PokemonToHabitat.length; i++) {
//         if (PokemonToHabitat[i].Name === pokemon.Name) {
//             console.log("Found habitat: ", PokemonToHabitat[i]);

//             pokemon.Habitat = PokemonToHabitat[i];
//         }
//     }
// }

// console.log(PokemonData[0]);

// const jsonString = JSON.stringify(PokemonData, null, 2);
// try {
//   fs.writeFileSync('PokemonDataWithHabitat.json', jsonString, 'utf8');
//   console.log("File written successfully!");
// } catch (err) {
//   console.error("Error writing file:", err);
// }

// Script to give Pokemon there Habitats with Links
for (let i = 0; i < PokemonData.length; i++) {
    const pokemon = PokemonData[i];
    console.log(pokemon.Name);
    // console.log(pokemon.Habitat);

    if (pokemon.Habitat) {
      for (const [key, value] of Object.entries(pokemon.Habitat)) {
        if (key == "Habitat1" || key == "Habitat2" || key == "Habitat3") {
          if (value !== "N/A") {
            // console.log("Found habitat: ", value);
            
            for (let j = 0; j < HabitatData.length; j++) {
              if (HabitatData[j].Name && HabitatData[j].Name.toLowerCase() === value.toLowerCase()) {
                console.log("Found habitat data: ", HabitatData[j].Link);

                pokemon.Habitat[key] = HabitatData[j];
              }
            }

          }
        }
      }
    }
}

console.log(PokemonData[0]);

const jsonString = JSON.stringify(PokemonData, null, 2);
try {
  fs.writeFileSync('PokemonDataWithBetterHabitat.json', jsonString, 'utf8');
  console.log("File written successfully!");
} catch (err) {
  console.error("Error writing file:", err);
}