function ImageShow({ image }) {
  console.log(image)
  return <div>
    {/* {image.id} */}
    <img src={image.urls.small} alt="" />
  </div>;
}

export default ImageShow;
