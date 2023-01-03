function ImageShow({ image }) {
  // console.log(image);

  return (
    <div>
      <a href={image.urls.full} rel="noreferrer" target="_blank">
        <img src={image.urls.small} alt={image.alt_description} />
      </a>{" "}
      <h3>{image.description ? image.description : image.alt_description}</h3>{" "}
      <br /> <hr />
    </div>
  );
}

export default ImageShow;
