current_dir=$PWD;

lower_name=$(echo "$1" | tr '[:upper:]' '[:lower:]')

file_content="const BaseRouter = require('../Entities/BaseRouter');
	const $1Controller = require('./$1Controller');

	const $1Router = new BaseRouter('/$lower_name', $1Controller.getRoutes());

	module.exports = $1Router;"


cd ../src/controllers/$1;

touch $1Router.js;

echo "$file_content" > $1Router.js;

cd $current_dir;
