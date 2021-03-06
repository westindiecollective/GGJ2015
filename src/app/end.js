var React = require('react');
var html2canvas = require('../../vendor/html2canvas');
var jsPDF = require('../../vendor/jspdf.min.js');

var Buzz = require('node-buzz');

var End = React.createClass({
  
  playMusic: function() {
    this.state.music.play();
  },
  
  generatePDF: function() {
    this.setState({
      generating: true
    });
  },
  
  generatePDFFile: function() {
    var self = this;
    var pdf = new window.jsPDF('landscape');

    pdf.addHTML(document.getElementById('diploma'), function() {
      pdf.save('diploma.pdf');
      self.setState({
        generating: false
      });
    });
  },
  
  getInitialState: function () {
    return {
      name: localStorage.getItem('username'),
      music: new Buzz.sound("sounds/success", {formats: [ "mp3", "wav" ]}),
    };
  },
  
  render: function() {
    
    if(this.state.generating) {
      var diploma = (
        <div id='diploma' onLoad={this.generatePDFFile}>
          <img src='DiplomeDIYACADEMY.png'/>
          <div className='content'>
            <p>Awarded to {this.state.name}</p>
          </div>
        </div>
      );
    } else {
      var diploma = (
        <div className='container'>
          <p>Well done, you're now graduated ! You can now get your diploma. Click on the button and wait for the file.</p>
          <button className='button' onClick={this.generatePDF}>Get your diploma</button>
        </div>
      );
    }
    
    return (
      <section className='success' onLoad={this.playMusic}>
        { diploma }
      </section>
    );
  }
  
});

module.exports = End;