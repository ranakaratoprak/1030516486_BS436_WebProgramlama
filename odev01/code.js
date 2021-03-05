const secondImages = [
        "cat.jpg",
        "dog1.jpg",
        "dog2.jpg",
];

let tahmin = 2;
let latestIndex;
let html;
let html1;
let html2;

const newGame = () => {
    if(tahmin!==0){
        let index = Math.floor(Math.random()*secondImages.length);
        if(latestIndex === index){
            index = (index+1)%secondImages.length;
        }
        const image = secondImages[index];
        latestIndex = index;
        html = document.getElementById("img0").src=image; 
        if(secondImages[0] === image){
            document.getElementById("alanId").innerHTML="Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
        }
        tahmin-=1;
    }else{
        document.getElementById("alanId").innerHTML="Kaybettin :( Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
    }
}

const newGame1 = () => {
    if(tahmin!==0){
        let index1 = Math.floor(Math.random()*secondImages.length);
        if(latestIndex === index1){
            index1 = (index1+1)%secondImages.length;
        }
        const image1 = secondImages[index1];
        latestIndex = index1;

        html1 = document.getElementById("img1").src=image1; 
        if(secondImages[0] === image1){
            document.getElementById("alanId").innerHTML="Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
        } 
        tahmin-=1;
    }else{
        document.getElementById("alanId").innerHTML="Kaybettin :( Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
    }
}
const newGame2 = () => {
    if(tahmin!==0){
        let index2 = Math.floor(Math.random()*secondImages.length);
        if(latestIndex === index2){
            index2 = (index2+1)%secondImages.length;
        }
        const image2 = secondImages[index2];
        latestIndex = index2;    
        html2 = document.getElementById("img2").src=image2; 
        if(secondImages[0] === image2){
            document.getElementById("alanId").innerHTML="Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
        } 
        tahmin-=1;
    }else{
        document.getElementById("alanId").innerHTML="Kaybettin :( Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
    }
}