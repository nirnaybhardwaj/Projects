const fs = require('fs')

const pat = require('path')

let types = {
    media: ["mp4", "mkv", "mp3", "jpg"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
        "docx",
        "doc",
        "pdf",
        "xlsx",
        "xls",
        "odt",
        "ods",
        "odp",
        "odg",
        "odf",
        "txt",
        "ps",
        "tex",
    ],
    app: ["exe", "dmg", "pkg", "deb"],
};


function organizeFun(dirPath) {

    let desPath

    if (dirPath == undefined) {
        console.log('Please Enter a Valid Directory Path')
        //Check whether folder path  is given or not
        return;
    }
    else {
        let doesExist = fs.existsSync(dirPath)
        // here we are checking the folder path exists or not

        if (doesExist == true) {
            desPath = pat.join(dirPath, 'organizedFiles')
            //so first i will have to make a path for a folder
            //D:\WEBSITES\File System Organizer\test folder\organizedFiles

            if (fs.existsSync(desPath) == false) {
                fs.mkdirSync(desPath) // we will create this folder if it does not already exists
            }
            else {
                console.log('Folder already exists')
            }
        }
        else {
            console.log('Please Enter a Valid Path')
        }
    }

    organizeHelper(dirPath, desPath)
}



function organizeHelper(src, dest) {
    let childNames = fs.readdirSync(src) //read the file and folder
    // console.log(childNames)

    //method check it is file or folder in fs module
    for (let i = 0; i < childNames.length; i++) {
        let childAddress = pat.join(src, childNames[i]) // path is identified for all children
        let checkForFile = fs.lstatSync(childAddress).isFile() //check it is file or not
        // console.log(childAddress +" " + checkForFile)

        if (checkForFile == true) {
            let fileCategory = getCategory(childNames[i])// return the category

            console.log(childNames[i] + " belongs to " + fileCategory)

            sendFiles(childAddress, dest, fileCategory)
        }
    }
}

function getCategory(name) {
    let ext = pat.extname(name)
    ext = ext.slice(1)// 0 hat jaega 1 s shuru hoga last tk
    // console.log(ext)


    // FOR-IN LOOP (NEW LOOP FOR OBJECTS)

    for (let type in types) {
        // console.log(types[type])
        let cTypeArr = types[type]
        // console.log(types[type])

        for (let i = 0; i < cTypeArr.length; i++) {
            if (ext == cTypeArr[i]) {
                return type;
            }
        }
    }

    return "others";

}


function sendFiles(srcFilePAth, dest, fileCategory) {
    let catPath = pat.join(dest, fileCategory)// here we are making category path to create folders

    if (fs.existsSync(catPath) == false) {
        fs.mkdirSync(catPath)
    }

    let fileName = pat.basename(srcFilePAth)// file actual name
    let destPath = pat.join(catPath, fileName)


    fs.copyFileSync(srcFilePAth, destPath)
    fs.unlinkSync(srcFilePAth)

    console.log(fileName + " copied to " + fileCategory)

}


// for export 
module.exports = {
    organizeFunKey: organizeFun
}