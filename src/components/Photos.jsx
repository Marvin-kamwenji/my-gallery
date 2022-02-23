import React, {useState} from "react";
import Gallery from "react-photo-gallery";
import ImageUploading from 'react-images-uploading';

const photo = [
    {
        src: "https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg",
        width: 5,
        height: 3
    },
    {
        src: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
        width: 5,
        height: 3
    },
    {
        src: "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&w=0&h=pCjvUkNlz9_esVvQw2Wgc8VJZBMgJrB0FQmktCA0KYY=",
        width: 5,
        height: 3
    },
    {
        src: "https://media.istockphoto.com/photos/renewable-energy-and-sustainable-development-picture-id1186330948?k=20&m=1186330948&s=612x612&w=0&h=5aNPCcQ8FcZraX44PEhb2mqcHkow2xMITJMHdh28xNg=",
        width: 5,
        height: 3
    },
    {
        src: "https://5.imimg.com/data5/SELLER/Default/2021/1/NJ/GN/AS/75393646/3d-waterfall-nature-wallpaper-500x500.jpg",
        width: 5,
        height: 3
    },
    {
        src: "https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
        width: 5,
        height: 3
    },
    {
        src: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/10/Karthika-Gupta-Compelling-Nature-Photos-6.jpg?fit=1500%2C1000&ssl=1",
        width: 5,
        height: 3
    },
    {
        src: "https://image.shutterstock.com/image-photo/3d-wallpaper-design-waterfall-sea-260nw-1380925703.jpg",
        width: 5,
        height: 3
    },
    {
        src: "https://5.imimg.com/data5/SELLER/Default/2020/12/GT/CX/ZQ/66617534/3d-nature-wallpaper-500x500.jpg",
        width: 5,
        height: 3
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2vFGaMYMZtpDaPzSYjOLPLtW7D8MAseYzIA&usqp=CAU",
        width: 5,
        height: 3
    },
    {
        src: "https://wallartprints.com/blog/wp-content/uploads/2017/10/hummingbird-nature-pictures-98278440.jpg",
        width: 5,
        height: 3
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

function Photos(){


    const [images, setImages] = useState([]);
const maxNumber = 69;

const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
};


    return(
    <div>
        <ImageUploading
           multiple
           value={images}
           onChange={onChange}
           maxNumber={maxNumber}
           dataURLKey="data_url">

               {
                   ({
                           imageList,
                           onImageUpload,
                           onImageRemoveAll,
                           onImageUpdate,
                           onImageRemove,
                           isDragging,
                           dragProps,
                    }) => (
                        <div className="upload_image-wrapper">
                            <button
                               style={isDragging ? { color: 'red' } : undefined}
                               onClick={onImageUpload}
                               {...dragProps} >
                                  Click or Drop here
                            </button>

                            <button onClick={onImageRemoveAll}>Remove all images</button>
                                {imageList.map((image, index) => (
                                    <div key={index} className="image-item">
                                       <img src={image.data_url} alt="" width="100" />
                                           <div className="image-item__btn-wrapper">
                                              <button onClick={() => onImageUpdate(index)}>Update</button>
                                              <button onClick={() => onImageRemove(index)}>Remove</button>
                                          </div>
                                      </div>
                                ))}
                                 

              {/* DRAG AND DROP FEATURE */}

                 <div {...dragProps}>
                   {isDragging ? "Drop here please" : "Upload space"}
                   {imageList.map((image, index) => (
                   <img key={index} src={image.data_url} />
               ))}
    </div>     
                        </div>
                    )
               }

        </ImageUploading>
        <div className="flex space-x-3 overflow-y-scroll scrollbar-hide p-3 -ml-3">
             <Gallery direction={"row"} margin={40} photos={photo} />
             ))
        </div>

    </div>  
    );
}

export default Photos;