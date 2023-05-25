import { Component } from 'react';
// added for handle submit
import { addResort } from '../../utilities/resorts-service';
import './AddResortForm.css';

export default class AddResortForm extends Component {
    state = {
      name: '',
      town: '',
      state: '',
      description: '',
      lat: '',
      long: '',
      logourl: '',
      error: ''
    };

    handleChange = (evt) => {
      this.setState({
        [evt.target.name]: evt.target.value,
        error: ''
      });
    };
    
    handleSubmit = async (evt) => {
      // Prevent form from being submitted to the server
      evt.preventDefault();
      try {
        const formData = {...this.state};
        delete formData.error;
        // The promise returned by the signUp service method 
        // will resolve to the user object included in the
        // payload of the JSON Web Token (JWT)
        const resort = await addResort(formData);
        // Baby step! => console.log(user)
        this.props.setResorts(resort);
      } catch {
        // An error occurred 
        this.setState({ error: 'Add Resort Failed - Try Again' });
      }
      window.location.reload(true);
    };
    
    render() {
      return (
        <div>
          <div className="form-container" id='addResortForm'>
            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <label>Name:</label>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
              <label>Town:</label>
              <input type="text" name="town" value={this.state.town} onChange={this.handleChange} required />
              <label>State:</label>
              <input type="text" name="state" value={this.state.state} onChange={this.handleChange} required />
              <label>Description:</label>
              <input type="textarea" name="description" value={this.state.description} onChange={this.handleChange} required />
              <label>Latitude:</label>
              <input type="text" name="lat" value={this.state.lat} onChange={this.handleChange} required />
              <label>Longitude:</label>
              <input type="text" name="long" value={this.state.long} onChange={this.handleChange} required />
              <label>Resort Logo URL:</label>
              <input type="url" name="logourl" value={this.state.logourl} onChange={this.handleChange} required />
              <button type="submit" className='Addresortbtn'>Add Resort</button>
            </form>
          </div>
          <p className="error-message">&nbsp;{this.state.error}</p>
        </div>
      );
    }
    }