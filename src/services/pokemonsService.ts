export async function getPokemons() {
    let limit = 20;
    let state = [];
    for (let i = 1; i <= limit; i++) {
        try{
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            state.push(data);
            return data;
        }catch(err){
            return "Erro!";
        }
    }
}