export class LeiturasTratadas{
    pais: Pais[]
}

interface Pais{
    nome: string,
    regiao: Regiao[]
}

interface Regiao{
    nome:string
    sensor: Sensor[],
    incidencia:number
}

interface Sensor{
    nome: string,
    incidencia: number
}