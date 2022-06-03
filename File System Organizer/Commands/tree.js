const fs = require('fs')

const pat = require('path')


function treeFn(dirPath){
    if(dirPath == undefined){
        console.log("Please enter a valid directory path")
    }
    else{
        let doesExist = fs.existsSync(dirPath)


        if(doesExist == true){
            treeHelper(dirPath, ' ')
        }
    }
}

function treeHelper(targetPath, indent){
    let checkForFile = fs.lstatSync(targetPath).isFile()

    if(checkForFile == true){
        let fileName = pat.basename(targetPath)
        console.log(indent + '|---' + fileName)
    }
    else{
        let dirName = pat.basename(targetPath)
        console.log(indent + '|__ ' + dirName)

        let childrenArr = fs.readdirSync(targetPath)
        // console.log(childrenArr)

        for(let i = 0; i < childrenArr.length; i++){
            let childrenPath = pat.join(targetPath, childrenArr[i])
            treeHelper(childrenPath, indent + '\t')
        }
    }
}

module.exports = {
    treeWAliKey : treeFn
}