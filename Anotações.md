# NPM (fundamentos)

- **NPM - Node Package Manager;**
- **Gerenciador de pacotes do Node.js;**
- **Através do NPM, podemos instalar pacotes externos, configurar os nossos projetos e rodar scripts;**
- **Ao criar um projeto com o NPM (`npm init`/`npm init -y`), um arquivo `package.json` (arquivo de configuração) é criado;**



### npm init x npm init -y

- **Ao criarmos um projeto com o `npm init`, seremos questionados para configurar algumas opções iniciais, relacionadas ao projeto (nome do projeto, nome do autor, etc.);**
  - **Essas configurações podem ser vistas no arquivo `package.json`;**
- **Já com o comando `npm init -y`, essas perguntas são puladas;**



### Pacotes externos

- **Para instalar pacotes externos, temos as opções:**

  ```javascript
  npm install nome_do_pacote
  
  OU
  
  npm i nome_do_pacote
  ```

- **Ao fazer a instalação de um pacote externo, a pasta _node_modules_ é criada (nela encontramos todos os arquivos dos módulos externos instalados);**

- **OBS.: sempre que rodarmos o comando `npm install`, a pasta _node_modules_ é recriada com todos os módulos do `package.json`;**



### Ambiente de desenvolvimento

- **Podemos instalar pacotes apenas para o ambiente de desenvolvimento;**
- **Podemos utilizar as flags: `-D` ou `--save-dev`;**
- **Isso faz com que o pacote seja separado no arquivo `package.json`, em relação aos demais pacotes (na build de produção, não instalaremos este módulo);**



### Atualizando pacotes

- **Constantemente, os pacotes do NPM são atualizados;**
- **Logo, para podermos atualizar os nossos pacotes já instalados, utilizamos o comando: `npm update` (atualiza todos os pacotes instalados no arquivo `package.json`);**
- **Para atualizar um pacote em específico, utilizamos o comando: `npm update nome_do_pacote`;**
- **OBS.: caso os comandos acima, não atualizem "de fato", os pacotes, podemos utilizar o comando `npx npm-check-updates -u` (`npx` é um executador de pacotes do node);**
  - **O comando acima vai verificar a existência de alguma atualização dos pacotes e, caso seja necessário a atualização, utilizamos o comando `npm install`, em seguida;**



### Scripts

- **Com o NPM, podemos criar rotinas (executar uma série de comandos, com apenas um);**
- **Para isso, temos o comando: `npm run script` (`script` é o nome dado a sequência de comandos, que configuramos no arquivo `package.json`);**
  - **Também podemos utilizar somente: `npm start`, ao invés de `npm run start`;**



### Pacotes globais

- **Pacotes globais são pacotes que não ficam salvos na pasta _node_modules_ e sim no computador do usuário (ficam disponíveis independente dos projetos) ;**
- **Com isso, podemos acessá-lo de qualquer local do nosso computador, via terminal (utilizamos a flag `-g`, no comando `npm i nome_do_pacote`, ou no comando `npm install nome_do_pacote`);**
- **OBS.: se o `lodash` for um pacote global, devemos utilizar o comando: `npm link lodash`, para copiar os arquivos instalados de forma global, para o nosso projeto;**



### npx

- **Alguns pacotes são scripts executáveis, que resultam em alguma ação no nosso computador (como por exemplo, a instalção do React, feita através do `npx`);**
- **Desta forma, uma série de processos são simplificados por esse executor;**



### Removendo pacotes

- **Para remover um pacote, utilizamos o comando: `npm uninstall nome_do_pacote`;**
  - **O pacote também é removido do arquivo `package.json`;**