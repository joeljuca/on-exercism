# trim it with xargs
name="`echo $1 | xargs`"

if [ -n "${name}" ]; then
  echo "Hello, ${name}!"
else
  echo 'Hello, World!'
fi