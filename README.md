# backEnd_whatsappBot
Back end for whatsapp Bot

## Description
Backend built on NodeJs with Sequelize to manage restaurant order app

## Setup

1) npm install
2) install postgres - https://www.postgresql.org/download/
3) Create .env file on project root with the following variables:
</br>
SECRET="desired-secret-for-login-token-creation"
</br>
PORT=3030
</br>
NODE_ENV=local
</br>
DB_USER="usename-of-your-local-postgress-user"
</br>
DB_PASSWORD="password-of-your-local-postgress-user"
</br>
HOSTNAME=127.0.0.1
</br>
</br>

4) npm run db - create database
5) npm run up - run migrations and seeds
6) npm run dev


Attention!
There may be some bugs since it's a project beeing developed