current_dir=$PWD;

lower_name=$(echo "$1" | tr '[:upper:]' '[:lower:]')

file_content="const $1Service = require('../../services/$1/$1Services');

const BaseController = require('../Entities/BaseController');

class Controller extends BaseController {

}

const $1Controller = new Controller($1Service);

// $1Controller.removeEndpoints(['deleteOne']);
// $1Controller.addMiddlewares('all', [authenticateUser]);

module.exports = $1Controller;"

cd ../src/controllers/$1;

touch $1Controller.js;

echo "$file_content" > $1Controller.js;

cd $current_dir;
