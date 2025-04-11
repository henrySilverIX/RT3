# RT3 - Módulos


## Construindo componentes reutilizáveis
A principal vantagem em usar módulos é poder construir componentes reutilizáveis, ou seja, códigos que podem ser utilizados mais de uma vez
e em mais de um projeto. <br>
Este exercício é para praticar a construção, exportação e importação de módulos, utilizando o TypeScript.
## Objetivo 1

Crie um módulo contendo classes, responsáveis por fornecer métodos que realizam as operações matemáticas básicas, soma, subtração, divisão
e multiplicação. Como no exemplo:

```typescript
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

export{Somador, Subtrator}

```

## Objetivo 2

O módulo criado deverá ser colocado em um repositório, como no GitHub por exemplo.
Desenvolva um outro módulo, que utilize o módulo de operações matemática. Para isto, execute códigos que façam os cálculos de soma,
subtração, divisão e multiplicação. Utilize números arbitrariamente para seus testes.