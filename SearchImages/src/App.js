import React from 'react';
import unsplash from './api/unsplash';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  state = { images: [] };

  //** async onSearchSubmit(term){} is converted into onSearchSubmit = async (term) => {} while changing it to arrow function */
  onSearchSubmit = async (term) => {
    // console.log(term);
    //** changing axios to unsplash as we created custom client */
    const response = await unsplash.get('/search/photos', {
      //** Including query parameter called query that contain search terms that we want to use */
      params: { query: term },
    });
    // console.log(response.data.results);
    console.log(this);
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* Found {this.state.images.length} images */}
        <ImageList imgs={this.state.images} />
      </div>
    );
  }
}

export default App;
