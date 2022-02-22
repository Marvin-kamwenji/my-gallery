import React from "react";
import Gallerys from "react-photo-gallery";

const photo = [
    {
        src: "../assets/a.jpg",
        width: 3,
        height: 4
    },
    {
        src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fc.tenor.com%2FcBNUUf7oT5oAAAAd%2Fnature-calm.gif&imgrefurl=https%3A%2F%2Ftenor.com%2Fview%2Fnature-calm-gif-18192321&tbnid=xs5-vF64faSabM&vet=12ahUKEwjSr-6br5P2AhV8gv0HHe_RAAQQMygBegUIARCHAg..i&docid=znzrNmX-R0IG9M&w=638&h=380&q=nature%20gifs&ved=2ahUKEwjSr-6br5P2AhV8gv0HHe_RAAQQMygBegUIARCHAg",
        width: 3,
        height: 4
    },
    {
        src: "https://www.google.com/imgres?imgurl=https%3A%2F%2F64.media.tumblr.com%2F8a35b143cf857cf6ec52ea783c5f81c9%2Ftumblr_on1hxqZOgl1r9i2iuo1_r2_500.gifv&imgrefurl=https%3A%2F%2Fbeautiful-nature-gifs.tumblr.com%2Fpost%2F160223989432&tbnid=mXZ9MnpEv3kgeM&vet=12ahUKEwjSr-6br5P2AhV8gv0HHe_RAAQQMygCegUIARCKAg..i&docid=HjTE8sE0g1uZqM&w=500&h=278&q=nature%20gifs&ved=2ahUKEwjSr-6br5P2AhV8gv0HHe_RAAQQMygCegUIARCKAg",
        width: 3,
        height: 4
    },
    {
        src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fc.tenor.com%2FTwDRx6gwXMEAAAAd%2Fwaterfall-nature.gif&imgrefurl=https%3A%2F%2Ftenor.com%2Fview%2Fwaterfall-nature-butterflies-sun-gif-16022888&tbnid=lkSkt2RXWmQNwM&vet=12ahUKEwjSr-6br5P2AhV8gv0HHe_RAAQQMygHegUIARCZAg..i&docid=G8jXawajLbXmtM&w=640&h=360&q=nature%20gifs&ved=2ahUKEwjSr-6br5P2AhV8gv0HHe_RAAQQMygHegUIARCZAg",
        width: 3,
        height: 4
    },
    {
        src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.gifer.com%2FVuDf.gif&imgrefurl=https%3A%2F%2Fgifer.com%2Fen%2FVuDf&tbnid=XUU2IONsA--K5M&vet=12ahUKEwjSr-6br5P2AhV8gv0HHe_RAAQQMygMegUIARCoAg..i&docid=tyAjjcRyyvqbJM&w=782&h=544&q=nature%20gifs&ved=2ahUKEwjSr-6br5P2AhV8gv0HHe_RAAQQMygMegUIARCoAg",
        width: 3,
        height: 4
    },
    {
        src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F0c%2Fe6%2F00%2F0ce60052576c01d62f9702921f4061d3.gif&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F385902261804149761%2F&tbnid=L5YfzawWJ6664M&vet=12ahUKEwjSr-6br5P2AhV8gv0HHe_RAAQQMygXegUIARDJAg..i&docid=stSgbIKo5XN0YM&w=830&h=552&q=nature%20gifs&ved=2ahUKEwjSr-6br5P2AhV8gv0HHe_RAAQQMygXegUIARDJAg",
        width: 3,
        height: 4
    },
    {
        src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.makeagif.com%2Fmedia%2F8-07-2018%2Fk3SGbK.gif&imgrefurl=https%3A%2F%2Fmakeagif.com%2Fgif%2Fnature-gifs-k3SGbK&tbnid=OVNUrWm7oe6kqM&vet=12ahUKEwjSr-6br5P2AhV8gv0HHe_RAAQQMygoegUIARCAAw..i&docid=zV9y2yH1cB7vbM&w=400&h=230&q=nature%20gifs&ved=2ahUKEwjSr-6br5P2AhV8gv0HHe_RAAQQMygoegUIARCAAw",
        width: 3,
        height: 4
    },
    {
        src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fae%2Fa6%2F68%2Faea668a381c99256ff48cdd479791617.gif&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F421860690078351016%2F&tbnid=7uzQEuBxFs7JQM&vet=12ahUKEwjSr-6br5P2AhV8gv0HHe_RAAQQMyg8egQIARB4..i&docid=zCLFBZIW3Z9HrM&w=724&h=452&q=nature%20gifs&ved=2ahUKEwjSr-6br5P2AhV8gv0HHe_RAAQQMyg8egQIARB4",
        width: 3,
        height: 4
    },
    {
        src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcutewallpaper.org%2F26%2Fbeautiful-nature-gif-wallpaper%2Fbest-nature-4-k-gifs-gfycat.gif&imgrefurl=https%3A%2F%2Fcutewallpaper.org%2F26%2Fbeautiful-nature-gif-wallpaper%2Fview-page-26.html&tbnid=Opzi_apwpS7WPM&vet=12ahUKEwjSr-6br5P2AhV8gv0HHe_RAAQQMyhkegUIARD4AQ..i&docid=S88dmNh2mDsXGM&w=444&h=250&q=nature%20gifs&ved=2ahUKEwjSr-6br5P2AhV8gv0HHe_RAAQQMyhkegUIARD4AQ",
        width: 3,
        height: 4
    },
    {
        src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia2.giphy.com%2Fmedia%2FEPjZkui5ZpBLy%2Fgiphy.gif&imgrefurl=https%3A%2F%2Fwww.primogif.com%2Fp%2FEPjZkui5ZpBLy&tbnid=xq9zL-vixE6bLM&vet=10CEcQMyh-ahcKEwiw8-zfr5P2AhUAAAAAHQAAAAAQAg..i&docid=bs9bE5fsM7KQgM&w=509&h=410&q=nature%20gifs&ved=0CEcQMyh-ahcKEwiw8-zfr5P2AhUAAAAAHQAAAAAQAg",
        width: 3,
        height: 4
    },
    {
        src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Farchive.org%2Fdownload%2Fanimalnaturegifs%2Fdog%2520on%2520beach%2520gif.GIF&imgrefurl=https%3A%2F%2Farchive.org%2Fdetails%2Fanimalnaturegifs&tbnid=5cLRD9ni0zM_HM&vet=10CMkBEDMoqAFqFwoTCLDz7N-vk_YCFQAAAAAdAAAAABAC..i&docid=YkTCOhHwO6iLJM&w=355&h=186&q=nature%20gifs&ved=0CMkBEDMoqAFqFwoTCLDz7N-vk_YCFQAAAAAdAAAAABAC",
        width: 3,
        height: 4
    }
];

const Content = {
    height: "700px",
    display: "inline-flex",
    float: "left",
    width: "auto",
    overflowX: "scroll",
    img: {
        borderRadius: "10px"
    }
};

function Gallery(){
    return(
        <div className="flex space-x-3 overflow-y-scroll scrollbar-hide p-3 -ml-3">
             <Gallerys direction={"row"} margin={40} photos={photo} />
             ))
        </div>

    );
}

export default Gallery;