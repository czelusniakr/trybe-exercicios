#!/bin/zsh

# utilizei como referência esse código: https://github.com/paulohbsimoes/trybe-exercises/blob/master/01-fundamentos/bloco-01-unix-bash-e-shell-script/dia-03-unix-e-bash-part-1/parte-1.sh

# exercício 1
# cria diretório chamado unix_tests e navega até ele

mkdir unix_tests
cd unix_tests

# exercício 2
# cria arquivo de texto chamado trybe.txt

touch trybe.txt

# exercício 3
# cria uma cópia do arquivo trybe.txt chamado trybe_backup.txt

cp trybe.txt trybe_backup.txt

# exercício 4
# renomeia o arquivo trybe.txt

mv trybe.txt trybe1.txt

# exercício 5
# cria novo diretório chamado backup em unix_tests

mkdir backup

# exercício 6
# move o arquivo trybe_backup.txt para o diretório backup

mv trybe_backup.txt backup

# exercício 7
# cria novo diretório chamado backup2 em unix_tests

mkdir backup2

# exercício 8
# move o arquivo trybe_backup.txt da pasta backup para a pasta backup2

mv backup/trybe_backup.txt backup2

# exercício 9
# apaga a pasta backup

rmdir backup

# exercício 10
# renomeia a pasta backup2 para backup

mv backup2 backup

# exercício 11
# mostra o path completo do diretório atual e lista todos os arquivos dentro dele

pwd
ls

# exercício 12
# apaga o diretório backup

rmdir -fr backup

# exercício 13
# limpa o terminal

clear

# cria arquivo de texto chamado skills.txt para os exercícios 14 e 15

echo "Internet\nUnix\nBash\nHTML\nCSS\nJavaScript\nReact\nSQL" >> skills.txt

# exercício 14
# mostra na tela as primeiras 5 skills do arquivo skills.txt

head -5 skills.txt

# exercício 15
# mostra na tela as últimas 4 skills do arquivo skills.txt

tail -4 skills.txt

# exercício 16
# apaga todos os arquivos que terminam em .txt

rm *.txt

