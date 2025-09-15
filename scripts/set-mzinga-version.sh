#!/usr/bin/env bash

 args=($1)
echo ${args[1]}

# args=($1)
VERSION=$1

if [ $# -gt 1 ]; then
  if [ $2 == "true" ]; then
    FLAGS="--save-exact"
  fi
fi

echo "Setting mzinga version to $VERSION $FLAGS"

npm i -D -w packages/openapi mzinga@$VERSION
npm i -D -w packages/query mzinga@$VERSION
npm i -D -w packages/rbac mzinga@$VERSION
npm i -D -w packages/swagger mzinga@$VERSION

npm i -w packages/testbed mzinga@$VERSION

npm list mzinga
