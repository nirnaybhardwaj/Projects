            //        DECRIPTION       //

// We will be creating a File System Organizer


            // Features of the Project -  // 

// If you have numerous files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory or folder according to their extensions 
// like text files will go into text File Folder, .exe files will go into application folder ans so on.
// so at the end you will have a arranged set of files in specific folders.

const fs = require('fs')
const pat = require('path')

//IMPORT
const organizeWaliFile = require('./Commands/organize')

let input = process.argv.slice(2);



let command = input[0]

switch(command){
    case 'organize':
        organizeWaliFile.organizeFunKey(input[1]) //dirPath
        break;
    case 'help' :
        console.log(`       List of all Commands - 
                            1) Organize Command - node FO.js organize <dirname>
                            2) Tree Command - node FO.js tree <dirPath>
                            3) Help Command - node FO.js help`);

        break;
    case 'tree' :

        break;    
    default :
        console.log('Enter a valid command')    

}









