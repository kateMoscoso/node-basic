const cp = require('child_process');

function execComand(command){
    cp.exec(command, (err, stdout, stderr) => {
        if(err){
            console.log(`Error: ${err}`);
            return;
        }
        if(stdout){
            console.log(`Standard out: \n ${stdout}`);
        }
        if(stderr){
            console.log(`Standard err: \n ${stderr}`);
        }

    });
    execComand("ls");
    execComand("node ./subprocesos/script --base=5");
}