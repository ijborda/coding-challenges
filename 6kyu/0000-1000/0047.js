// extract file name

class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        return dirtyFileName.split('_').slice(1).join('_').split('.').slice(0,-1).join('.');
    }
}

// Test
let x = FileNameExtractor.extractFileName("1_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34")
console.log(x) // 'FILE_NAME.EXTENSION'  