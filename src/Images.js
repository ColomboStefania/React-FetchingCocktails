import React, {PureComponent} from 'react'
import { Link } from 'react-router-dom'


export default class Images extends PureComponent {

  renderImage = (image) => {
    return (
      <div key={image.idDrink} drink-id={image.idDrink}>
        <Link to={`./drinks/${image.idDrink}`} ><img src={image.strDrinkThumb} alt="cocktail" /></Link>
        <p>{image.strDrink}</p>
      </div>
    )
  }
  render() {
    const { images } = this.props
    return (
      <div>
      <Link to={"/"}>Back to Homepage</Link>
      { images === null && "Loading..." }
      { images !== null &&
        <div>
          {this.props.images.map(this.renderImage)}
        </div>
      }
      </div>
    )
  }
}
