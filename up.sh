#!/bin/bash
git branch
echo The current branch that you worked on and want to commit ?
read branch
echo commit msg ?
read commitmsg
read -p "merge main ? [Y/n/M] " prompt


# ----------------------------------
# Colors
# ----------------------------------
NOCOLOR='\033[0m'
RED='\033[0;31m'
GREEN='\033[0;32m'
ORANGE='\033[0;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
LIGHTGRAY='\033[0;37m'
DARKGRAY='\033[1;30m'
LIGHTRED='\033[1;31m'
LIGHTGREEN='\033[1;32m'
YELLOW='\033[1;33m'
LIGHTBLUE='\033[1;34m'
LIGHTPURPLE='\033[1;35m'
LIGHTCYAN='\033[1;36m'
WHITE='\033[1;37m'

if [[ $prompt == "y" || $prompt == "Y" || $prompt == "yes" || $prompt == "Yes" ]]; then
    echo yes
    echo -e ${BLUE}git switch $branch ${NOCOLOR}
    git switch $branch
    echo -e ${BLUE}git pull ${NOCOLOR}
    git pull 
    echo -e ${BLUE}git add . ${NOCOLOR}
    git add .
    echo -e ${BLUE}git commit -m "$commitmsg" ${NOCOLOR}
    git commit -m "$commitmsg" 
    echo -e ${BLUE}git push ${NOCOLOR}
    git push
    echo -e ${BLUE}git switch main ${NOCOLOR}
    git switch main
    echo -e ${BLUE}git pull ${NOCOLOR}
    git pull
    echo -e ${BLUE}git push ${NOCOLOR}
    git push
    echo -e ${BLUE}git merge $branch ${NOCOLOR}
    git merge $branch 
    echo -e ${BLUE}git push ${NOCOLOR}
    git push
    echo -e ${BLUE}git ftp push ${NOCOLOR}
    git ftp push
    echo -e ${BLUE}git switch $branch ${NOCOLOR}
    git switch $branch 
    echo -e ${BLUE}git merge main ${NOCOLOR}
    git merge main 
    echo -e ${BLUE}git push ${NOCOLOR}
    git push
    echo fertig
    sleep 120
else
    if [[ $prompt == "M" || $prompt == "m" ]]; then
        echo merge 
        git switch $branch
        git pull 
        echo the branch you want $branch to merge to
        read $tobranch
        git merge $tobranch 
        git push
    else
        echo no
        git switch $branch
        git pull
        git add .
        git commit -m "$commitmsg" 
        git push
    fi
fi