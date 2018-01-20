var array = [];

var Pokemon = class {


constructor(name, type, hp, def, atk, legend){

this.name = name;

this.type = type;

this.hp = hp;

this.def = def;

this.atk = atk;

this.legend = legend;
array.push(this)

}

static all(){

  return  array;
}

attack(pokemonName){
  pokemonName.hp = pokemonName.hp - (this.atk - pokemonName.def);
  
}

aliveCheck(){
  if(this.hp > 0){
    return true;
  }
  else{
    
    return false;
  }
}



}

var Pikachu = new Pokemon("Pikachu", "Electirc",150,20,100,true);
var Blaziken = new Pokemon("Blaziken","Fire", 250,30,400,true);


console.log(Pokemon.all());
console.log(Pikachu.attack(Blaziken));
console.log(Blaziken.hp);