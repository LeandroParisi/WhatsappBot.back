current_dir=$PWD;

lower_name=$(echo "$1" | tr '[:upper:]' '[:lower:]')

file_content="/* eslint-disable class-methods-use-this */

const QueryInterface = require('../Entities/QueryInterface');

class Queries extends QueryInterface {
// No need to be extended yet
}

const $1Queries = new Queries();

module.exports = $1Queries;

"

cd ../src/queries/$1;

touch $1Queries.js;

echo "$file_content" > $1Queries.js;

cd $current_dir;
