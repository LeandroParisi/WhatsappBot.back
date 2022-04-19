file=../../src/controllers/index.js;

new_content="const $1Router = require('./$1/$1Router'); \n";

while IFS= read -r line; do
  new_content="$new_content $line\n"
done < "$file"

echo $new_content > $file;

head -n -2 $file > tmp.txt && mv tmp.txt $file

echo "$1Router\n};" >> $file