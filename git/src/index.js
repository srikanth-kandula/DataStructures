//to import all files in a directory
function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('.', true, /\.js$/));

