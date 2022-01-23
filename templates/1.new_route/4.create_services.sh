current_dir=$PWD;

lower_name=$(echo "$1" | tr '[:upper:]' '[:lower:]')

file_content="const { $1 } = require('../../models');
const BaseService = require('../Entities/BaseService');
const $1Queries = require('../../queries/$1/$1Queries');

class Service extends BaseService {
// No need to be extended yet
}

const $1Service = new Service($1, $1Queries);

module.exports = $1Service;
"

cd ../src/services/$1;

touch $1Services.js;

echo "$file_content" > $1Services.js;

cd $current_dir;