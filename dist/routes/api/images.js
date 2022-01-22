"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = __importDefault(require("fs"));
const images = express_1.default.Router();
images.get('/', (req, res) => {
    const imgAttributes = req.query; //  gets the image attributes from the url ex: image name, width, height
    const imgName = imgAttributes.filename; //  save file name value as imageName
    const imgWidth = Number(imgAttributes.width); // save the image width as imgWidth and parse it to integer number
    const imgHeight = Number(imgAttributes.height); // save the image height as imgHeight and parse it to integer number
    const imgPath = `./assets/full/${imgName}.png`; // concatenate the image name with the path
    const resizedImagePath = `./assets/thumb/${imgName}_thumb_${imgWidth}_${imgHeight}.png`; //  generate a new name to the processed image
    //  the image resizing function
    const Resizing = () => __awaiter(void 0, void 0, void 0, function* () {
        //  check if the file name existes, if not the server throws an error to the user to enter a valid file name
        try {
            // the sharp library function, takes the image path as parameter,resize it to the desired (width,height) then save it to the new path
            yield (0, sharp_1.default)(imgPath).resize(imgWidth, imgHeight).toFile(resizedImagePath);
        }
        catch (error) {
            res.send('🔴Wrong file name: please choose a valid image name to be processed!');
        }
        //  send the resized image to the server
        res.sendFile(resizedImagePath, { root: '.' });
    });
    //  cache handling
    const CheckImageExist = () => {
        //  if the resized image is already exists at the 'thumb' folder, the server will send it directly without re-processing it
        if (fs_1.default.existsSync(resizedImagePath)) {
            res.sendFile(resizedImagePath, { root: '.' });
        }
        else {
            // if the image wasn't processed before, the server invoke the 'Resizing' function
            Resizing();
        }
    };
    CheckImageExist();
});
exports.default = images;
