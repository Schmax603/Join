#!/bin/bash
echo The current branch that you worked on and want to commit ?
read branch
echo commit msg ?
read commitmsg
read -p "merge main ? [Y/n/M] " prompt

if [[ $prompt == "y" || $prompt == "Y" || $prompt == "yes" || $prompt == "Yes" ]]; then
    echo yes
    git switch $branch
    git pull 
    git commit -am "$commitmsg" 
    git push
    git switch main
    git pull
    git merge $branch 
    git push
    git ftp push
    git switch $branch 
    git merge main 
    git push
    sleep 10
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
        git commit -am "$commitmsg" 
        git push
    fi
fi