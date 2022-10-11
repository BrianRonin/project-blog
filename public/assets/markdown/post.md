## Syntax: `[]` = obrigatorio / `()` = opcional

## D = #Docker

## CT = Container

## DC = #Docker/container

| Syntax Docker Container                                                | oque faz                  | option                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **DC** run **`( OPTION )[ IMAGE ]( ID / NAME / HASH )(TERMINAL -c )`** | roda ou cria um container | { -**p** PortOutside:PortInside }, -v **Caminho**, -**c**, ( -**d** no modo "deamon" em segundo plano ), ( -**it** com o terminal 'aqui' ), ( [--volumes](https://docs.docker.com/storage/volumes/)=from=VOLUME ), (--rm //removenduo ao executar um comando -c ), (--net #Docker/network/mode //E selecione uma rede), (ifconfig //e mostra a config dele ) (--name //e da um nome) |
| **DC** start **`[ ID / NAME / HASH ]`**                                | inicia um ct              |                                                                                                                                                                                                                                                                                                                                                                                      |
| **DC** stop **`[ ID / NAME / HASH ]`**                                 | parar um ct               |                                                                                                                                                                                                                                                                                                                                                                                      |
| **DC** restart **`[ ID / NAME / HASH ]`**                              | reinicia um ct            |                                                                                                                                                                                                                                                                                                                                                                                      |
| **DC** ls                                                              | lista os ct em exec       | { -**a** ja criados também }                                                                                                                                                                                                                                                                                                                                                         |
| **DC** image                                                           | lista todas imagens do ct |                                                                                                                                                                                                                                                                                                                                                                                      |
| **DC** logs **`[ ID / NAME / HASH ]`**                                 | vizualiza logs de um ct   |                                                                                                                                                                                                                                                                                                                                                                                      |
| **DC** spec **`[ ID / NAME / HASH ]`**                                 | inspeciona um ct          |                                                                                                                                                                                                                                                                                                                                                                                      |
| **DC** exec **`[ ID / NAME / HASH ]`**`(ifconfig)`                     | roda um comando no ct     | -it                                                                                                                                                                                                                                                                                                                                                                                  |

## DI = #Docker/image

| Syntax Docker image                                          | oque faz?                             | opções                                                                                                                                           |
| ------------------------------------------------------------ | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **DI** **pull** `[ image / image:versao ]`                   | baixa imagem                          |                                                                                                                                                  |
| **DI** **inspect** `[ image / image:versao ]`                | inspeciona imagem x                   | { [--format](https://docs.docker.com/config/formatting/)"{}" }                                                                                   |
| **DI** **ls**                                                | lista imagens                         |                                                                                                                                                  |
| **DI** **tag** `[ image / image:versao ]` 2.0                | Cria uma imagem "image" com a tag 2.0 |                                                                                                                                                  |
| **DI** build `[ Option ][ path ]`                            | Cria uma imagem com Dockerfile        | { -t nome }, { [--build-arg](https://docs.docker.com/engine/reference/commandline/build/#set-build-time-variables---build-arg) ARGUMENTO=VALOR } |
| **DI** push                                                  |                                       |                                                                                                                                                  |
| **D** **rmi**/**DI** **rm** **`[ x / x:versao ][ Tag... ]`** | apagar imagem                         |                                                                                                                                                  |

## Opção ao baixar versão de imagem

| command | oque faz? | opções |
| ------- | --------- | ------ |
|         |           |        |

#Terminal/Commands

## DN = #Docker/network

| command                                             | oque faz?                          | opções |
| --------------------------------------------------- | ---------------------------------- | ------ |
| **DN** ls                                           | mostra os tipos de rede            |        |
| **DN** create `[ --driver `#Docker/network/mode` ]` | cria um novo tipo de rede          |        |
| **DN** inspect `[ DN mode]`                         | inspeciona um tipo de rede         |        |
| **DN** connect #Docker/network/mode `[ CT ]`        | conecta um CT a um tipo de rede    |        |
| **DN** disconnect #Docker/network/mode `[ CT ]`     | disconecta um CT a um tipo de rede |        |

![testando imagem](https://d1.awsstatic.com/acs/characters/Logos/Docker-Logo_Horizontel_279x131.b8a5c41e56b77706656d61080f6a0217a3ba356d.png)
#Terminal/Commands

## DP = #Docker/compose

| command   | oque faz?   | opções |
| --------- | ----------- | ------ |
| **DP** up | inicia o DP |        |

#Terminal/Commands

relacionado: [[Docker]]
tags: #Terminal/Docker/Commands
