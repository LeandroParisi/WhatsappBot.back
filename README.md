# backEnd_whatsappBot
Back end for whatsapp Bot

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
1) npm run db - create database
2) npm run up - run migrations and seeds
3) npm run dev

Attention!
There may be some bugs since it's a project beeing developed