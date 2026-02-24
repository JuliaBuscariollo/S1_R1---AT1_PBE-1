import createMulter from "../config/opload.multer.js";

const uploadeFIle = createMulter({
    pasta:'documents',
    tiposPermitidos:[
        'application/pdf',
        'application/msword', // .doc - formato antigo do word 
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document' //.docx
    ],
    tamanhoArquivo: 10 * 1024 * 1024
}).single('doc');

export default uploadeFIle;
