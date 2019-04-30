import React from "react";
import SearchBar from "./SearchBar";
import unsplash from '../api/unsplash';
import ImageList from './ImageList';


class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };

  // onSearchSubmit(term){
  //     axios.get('https://api.unsplash.com/search/photos',{
  //         params: {query: term},
  //         headers: {
  //             Authorization: 'Client-ID 5fd49af55ece4f312ab59ef780dbd5b1640d9a7796757951a311961db973e4e8'
  //         }
  //     }).then((response) => {
  //         console.log(response.data.results);
  //     })
  // }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
