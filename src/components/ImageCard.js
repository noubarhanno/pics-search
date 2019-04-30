import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {spans: 0};

    this.imageRef = React.createRef();
  }

  componentDidMount(){
      // we just add event listener to the imageRef and we didn't use 
      // console.log(this.imageRef.current.clientHeight);
      // because when we call componentDidMount the image in this instance
      // of time has not been loaded and we could not extract the image height 
      // from the Image itself , 
      // Note that when we console log this.imageRed we can have the reference 
      // but inside that property there will be nothing unless we expand the property
      // then the browser automatically fetch the data inside because in that time the 
      // image would be fully loaded
      this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
