//        DECRIPTION       //

// We will be creating a File System Organizer


// Features of the Project -  // 

// If you have numerous files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory or folder according to their extensions 
// like text files will go into text File Folder, .exe files will go into application folder ans so on.
// so at the end you will have a arranged set of files in specific folders.



//IMPORT
const organizeWaliFile = require('./Commands/organize')

const helpWaliFile = require('./Commands/help')

const treeWaliFile = require('./Commands/tree')

let input = process.argv.slice(2);



let command = input[0]

switch (command) {
    case 'organize':
        organizeWaliFile.organizeFunKey(input[1]) //dirPath
        break;
    case 'help':
        helpWaliFile.hepWaliKey()

        break;
    case 'tree':
        treeWaliFile.treeWAliKey()    
    
        break;
    default:
        console.log('Enter a valid command')

}

// Recursion - A function or a method calling itself until the edge is reached

// function fact(n){
    
//     if(n ==0 || n == 1){
//         return 1;
//     }else{
//         return n * fact(n - 1)
//     }
// }

// let ans = fact(5)
// console.log(ans)



    










