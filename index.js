class aventuraDeHeroi{
	constructor(name, idade, tipo){
    	this.name = name 
        this.idade = idade
        this.tipo = tipo
	}
    atacar(){
    	if(this.tipo === mago){
        	let ataque = "usou magia"
        }else if(this.tipo === guerreiro){
        	let ataque = "usou espada"
        }else if(this.tipo === monge){
        	let ataque = "usou artes marcias "
        }else{
        	let ataque = "usou shuriken "	
        }
        
        console.lo(`O ${this.tipo} atacou usando ${ataque}`)
        
    }
}

let heroi = new aventuraDeHeroi("jarvis", 48, "ninja")
heroi.atacar