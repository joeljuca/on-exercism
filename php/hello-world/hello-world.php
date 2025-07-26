<?php

function helloWorld ($name = null) {
  if (strlen($name) > 0) {
    return "Hello, $name!";
  }
  else {
    return 'Hello, World!';
  }
}