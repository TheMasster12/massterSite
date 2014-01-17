#!/bin/bash

cd ~/development/web/massterSite

if [ ! -d "./dist" ]; then
  echo "Please generate dist/ folder by running grunt."
  exit
fi

scp -r ./dist/ ubuntu@gs-hq:~/
ssh ubuntu@gs-hq << 'EOF'

  sudo su
    cd /home/apache/mass
    rm -rf /home/apache/mass/**
    cp -r /home/ubuntu/dist/** .
    exit

  rm -rf ~/dist

  exit

EOF
