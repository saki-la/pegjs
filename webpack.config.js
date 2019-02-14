"use strict";

const target = require( "@pegjs/bundler/target" );

module.exports = [

    /* packages/pegjs/dist/peg.js */
    target( {

        entry: require.resolve( "pegjs" ),
        library: "peg",
        output: "packages/pegjs/dist/peg.js",

    } ),

    /* packages/pegjs/dist/peg.min.js */
    target( {

        entry: require.resolve( "pegjs" ),
        library: "peg",
        output: "packages/pegjs/dist/peg.min.js",

    } ),

    /* https://pegjs.org/*-bundle.min.js */
    target( {

        entry: {
            "benchmark": require.resolve( "@pegjs/benchmark-suite/browser.js" ),
            "test": require.resolve( "@pegjs/spec-suite/browser.stub.js" ),
        },
        library: [ "peg", "[name]" ],
        output: "docs/.vuepress/public/[name]-bundle.min.js",

    } ),

];