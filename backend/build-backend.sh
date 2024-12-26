echo "running npm install"
npm install
echo "running npm run build"
npm run build 
echo "npm run sequelize --prefix backend db:seed:undo:all"
npm run sequelize --prefix backend db:seed:undo:all 
echo "npm run sequelize --prefix backend db:migrate:undo:all"
npm run sequelize --prefix backend db:migrate:undo:all 
echo "npm run sequelize --prefix backend db:migrate"
npm run sequelize --prefix backend db:migrate 
echo "npm run sequelize --prefix backend db:seed:all"
npm run sequelize --prefix backend db:seed:all