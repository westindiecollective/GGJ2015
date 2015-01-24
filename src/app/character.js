function pickRandom (arr) {
  return arr[Math.floor(Math.random() * arr.length - 1)];
}

var Story = React.createClass({
  render: function () {
  
    var adjective = pickRandom(data.adjective);
    var race = pickRandom(data.race);
    var dclass = pickRandom(data.dclass);
    var location = pickRandom(data.location);
    var backstory = pickRandom(data.backstory);
  
    return (
      <section id='story'>
        {adjective} {race} {dclass} from {location} who {backstory}
      </section>
    );
  }
});
