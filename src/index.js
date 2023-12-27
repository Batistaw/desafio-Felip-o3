let ataque = ""
class aventuraDeHeroi{
	constructor(name, idade, tipo){
    	this.name = name 
        this.idade = idade
        this.tipo = tipo
	}
    
    atacar(){
    	if(this.tipo === "mago"){
        	ataque = "usou magia"
        }else if(this.tipo === "guerreiro"){
        	ataque = "usou espada"
        }else if(this.tipo === "monge"){
        	ataque = "usou artes marcias "
        }else{
        	ataque = "usou shuriken "	
        }
        
        console.log(`O ${this.tipo} atacou usando ${ataque}`)   
    }
}

let heroi = new aventuraDeHeroi("jarvis", 48, "monge")
heroi.atacar()