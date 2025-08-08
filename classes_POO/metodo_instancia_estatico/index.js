/**
 * Métodos estáticos: Métodos que é possível acessar na classe sem que seja necessário instânciar a classe
 * Esses métodos também não estarão disponíveis dentro das instãncias
 * 
 * Métodos de instância: São os métodos normais que podem ser chamados nos objetos instânciados
 */

class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -= 2;
    }

    // Método estático
    static descontinuar(){
        // Aqui dentro também não é possível usar variáveis this. por que elas são criadas quando uma instância é criada
        console.log('Esse controle foi descontinuado');
    }
}

const c1 = new ControleRemoto('LG');

console.log(c1);

c1.aumentarVolume();
c1.aumentarVolume();
c1.aumentarVolume();
c1.aumentarVolume();
c1.aumentarVolume();

console.log(c1);

// c1.descontinuar(); // Isso vai gerar erro por que c1 é uma instância e o método descontinuar é estático

ControleRemoto.descontinuar();

// Isso é um recurso basicamente de organização de código