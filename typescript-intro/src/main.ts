//import { charizard, pokemonIds, pokemons } from "./bases/02-objects";
//import { charmander, sonGoku } from "./bases/03-classes";

import { charmander } from "./bases/06-decorators";
import "./style.css";

// import { name } from "./bases/01-types.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>
   Clases en typescript
    
    </h1>
    <p>Pokemon:  ${charmander.name}</p>
  </div>
`;

/* 
 <div>
    <h1>
    ids:
    ${pokemonIds.join(",")}
    Nombre:
    ${charizard.name}
    Prueba:
    ${pokemons.join(",")}
    
    </h1>
  </div>
*/
