# Introdução

## Objetivo
Criar uma aplicação que forneça ao usuário um overview de leituras de sensores de acordo com a região do país.

## Tecnologias

- .Net Core

- .Net EF

- Angular

- Docker

- MySql

## Páginas SPA

- Home
    - Endpoint: localhost:8090/
    - Descrição: Somente uma landing page de apresentação ao software
- Tabela Leituras
    - Endpoint: localhost:8090/Leituras
    - Descrição: Uma tabela atualizada automaticamente que exibe todas as leituras de todos os sensores.
- Dashboard
    - Endpoint: localhost:8090/Dashboard
    - Descrição: Aqui nós temos um componente de lista não ordenada que exibe um totalizador de leituras por região e também por sensor. Além disso temos um gráfico que exibe a última leitura registrada de cada sensor.

## Rotas API

- Leitura
    - Endpoint: localhost:8090/Api/Leitura
        - Metodos: 
            - Get: Não recebe nenhum parâmetro e retorna a lista de leituras registradas no sistema.
            - Post: Recebe uma instância de LeituraDto e faz a inserção de uma nova leitura no banco com base nos dados informados
                - Body: `{
                    "timeStamp": 59874269871,
                    "tag": 'brasil.sudeste.sensor01',
                    "valor": '300'
                }`
    - Endpoint: localhost:8090/Api/Leitura
        - Metodos:
            - Get: Não recebe nenhum parâmetro e retorna uma lista do último lançamento de cada sensor que não estiver com status de Erro, para montagem do gráfico

# Como instalar:
## Requisitos:

- Windows/Linux
- Docker

## Passo a Passo


1. Abrir um programa de linha de comando ex:PowerShell
2. Navegar até o diretório onde foi inserido o download do projeto
3. Rodar o comando `docker-compose up --build`
4. Após o término da execução do comando, basta abrir um navegador de sua escolha e entrar na URL: `http://localhost:8090`
5. Bom proveito!
