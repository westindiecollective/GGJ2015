var React = require('react');

var Story = React.createClass({
  render: function () {
  
    if (!!this.props.success) {
      var successMessage = (
        <div>
          <h2>Well done!</h2>
          <p>MacLorem MacIpsum</p>
          <button onClick={this.props.onNext}>Next &rarr;</button>
        </div>
      );
    }
  
    return (
      <section className='intro'>
        <div className='container'>
        
          <h2>Scene #{this.props.counter}</h2>
          <p>{this.props.content}</p>
          
          <p>So, what do we do now ?</p>
          
          { successMessage }
        </div>
      </section>
    );
  }
});

module.exports = Story;