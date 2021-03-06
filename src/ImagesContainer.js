import React, {PureComponent} from 'react'
import Images from './Images'
import request from 'superagent'


export default class ImagesContainer extends PureComponent {
  state = {
    images: null
  }
  componentDidMount() {
    request
      .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${this.props.match.params.category}`)
      .then(response => this.updateImages(response.body.drinks), console.error)
      console.log(this.props.match.params.category);
  }
  updateImages = (images) => {
    this.setState({
      images
    })
  }
  render() {
    return (<Images images={this.state.images} />)
  }
}
