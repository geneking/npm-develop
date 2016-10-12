const init    = require('../src/init.js');
const start   = require('../src/start.js');
const program = require('commander');
const pkg     = require('../package.json');

program
  .version(pkg.version);

program
  .command('init [project]')
  .description('init project')
  .action(function(project){
      init.run(project);
  });

program
    .command('start')
    .description('start project')
    .option('-p, --port [port]', 'listening port')
    .action(function(port){
        start.run(port);
    });

program.parse(process.argv);
