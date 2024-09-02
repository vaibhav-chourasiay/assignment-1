
console.log("loaded ..")
AOS.init();
const prefixImage = "http://127.0.0.1:5500/assets/screenshots/"
const imagesList = []

const sideBar = document.querySelector(".sidebar");
const sliderList = document.querySelector(".slider-list");
const initialImageIndex = 1;
const numberOfImages = 7;

let imageUrls = [];
let elements = [];
let fileNames = [];

const getFileName =  (imageUrls) => {
    const listFileNames = [];

    for (let i = 0; i < imageUrls.length; i++) {
        const parts = imageUrls[i].split('/'); // Splits the URL by slashes
        const filename = parts.pop(); // Gets the last part: "1.jpg"
        const number = filename.split('.')[0];
        
        listFileNames.push(Number(number));
    }

    return listFileNames;
   
}

const galleryElementGenerator = ()=> {

    for (let i = 0; i < sliderList.children.length; i++) {
      const srcValue =   sliderList.children[i].firstElementChild.src;

        imageUrls.push(srcValue);
        elements.push(sliderList.children[i].firstElementChild)
    }
    fileNames = getFileName(imageUrls);
    // console.log(elements,fileNames);

}


const toggleMenu = () => {
    sideBar.classList.toggle("no-display")
}

const prev = () => {

elements = [];
imageUrls = [];
fileNames = [];
galleryElementGenerator();

    for (let i = fileNames.length - 1 ; i >= 0; i--) {
        console.log(fileNames);
        // 1 image -> 0 x -> 7
        if(fileNames[i] - 1 >    0) {
            
            elements[i].src = `${prefixImage}/${fileNames[i]-1}.webp`;
        }
        else {
            fileNames[i] = 7;
            elements[i].src = `${prefixImage}/${fileNames[i]}.webp`;
        }
    }

}

const next = () => {
elements = [];
imageUrls = [];
fileNames = [];
galleryElementGenerator();


        for (let i = 0; i < fileNames.length; i++) {
            // 7 image -> 8 x -> 1
            if(fileNames[i] + 1 < 8) {
                
                elements[i].src = `${prefixImage}/${fileNames[i]+1}.webp`;
            }
            else {
                fileNames[i] = 1;
                elements[i].src = `${prefixImage}/${fileNames[i]}.webp`;
            }
        }
            console.log(fileNames);

}
     
   

