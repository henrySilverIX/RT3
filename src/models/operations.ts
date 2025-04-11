class Somador{
    public calcular = (numero1: number, numero2: number) => {
        return numero1 + numero2;
    }
}

class Subtrator{
    public calcular = (numero1: number, numero2: number) => {
        return numero1 - numero2;
    }
}

class Multiplicador{
    public calcular = (numero1: number, numbero2: number) => {
        return numero1 * numbero2
    }
}

class Divisor{
    public calcular = (numero1: number, numbero2: number) => {
        return numero1 / numbero2
    }
}

export{Somador, Subtrator, Multiplicador, Divisor}
