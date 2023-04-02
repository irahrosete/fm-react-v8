import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0
  }

  static defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg']
  }

  // this will not work with a normal function
  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index
      // index is always of type string. whatever comes from the dom is a string. so we added a unary + to turn it into number
    })
  }

  render() {
    // throw new Error('lol error')

    const { active } = this.state
    const { images } = this.props

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              alt='animal thumbnail'
              className={index === active ? 'active' : ''}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel