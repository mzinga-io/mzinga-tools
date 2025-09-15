# mzinga tools and plugins

This repository will contain multiple tools and plugins for [mzinga](https://mzinga.io):

## [mzinga-openapi](./packages/openapi/README.md)

[![npm version](https://badge.fury.io/js/mzinga-openapi.svg)](https://www.npmjs.com/package/mzinga-openapi)

Openapi tool for mzinga cms:

- generate openAPI 3 documentation from your MZinga config

## [mzinga-swagger](./packages/swagger/README.md)

[![npm version](https://badge.fury.io/js/mzinga-swagger.svg)](https://www.npmjs.com/package/mzinga-swagger)

Swagger plugin for mzinga cms:

- exposes openapi document generated with `paylmzingaoad-openapi`
- includes a swagger ui
- easy setup as mzinga plugin

## [create-mzinga-api-docs](./packages/create-api-docs/README.md)

[![npm version](https://badge.fury.io/js/create-mzinga-api-docs.svg)](https://www.npmjs.com/package/create-mzinga-api-docs)

CLI for generating openAPI 3 documentation for your MZinga cms

## [mzinga-rbac](./packages/rbac/README.md)

[![npm version](https://badge.fury.io/js/mzinga-rbac.svg)](https://www.npmjs.com/package/mzinga-rbac)

Easy to use Role based access control for your MZinga cms:

- plugin to extend your auth collection(s) with a `roles` property
- lots of predefined access control functions
- tools to combine access control functions to support more complex situations
- fully compatible with any custom access control functions you might already have

## [mzinga-query](./packages/query/README.md)

[![npm version](https://badge.fury.io/js/mzinga-query.svg)](https://www.npmjs.com/package/mzinga-query)

Query utility for your [MZinga](https://mzinga.io):

- create type safe queries
- predefine queries to be constructed with data passed in later (e.g. request data)
- select output fields on REST and Internal API.
