// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");

var stringOfBuffer = (
    function stringOfBuffer (buffer) { return buffer.toString(); }
  );

function jsonStringfy(dict) {
  var jsonStringfy$1 = (
        function(obj) {
          return JSON.stringify(obj, null, 2);
        }
      );
  try {
    return /* Some */[Curry._1(jsonStringfy$1, dict)];
  }
  catch (exn){
    return /* None */0;
  }
}

exports.stringOfBuffer = stringOfBuffer;
exports.jsonStringfy   = jsonStringfy;
/* stringOfBuffer Not a pure module */