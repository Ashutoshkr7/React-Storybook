const ImageComponent = (props:any) => {
return(
    <img src={props.imageURL} style={{height: "300px", width: '350px', borderRadius:'15px 15px 0px 0px'}} {...props} alt="image doesn't exists"/>
);
}

export default ImageComponent;
