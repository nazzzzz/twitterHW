var Twit = require('twit');




var bot = new Twit({
//access keys
});

//https://www.w3schools.com/js/js_random.asp
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

bot.get('search/tweets', { q: '"fake news"', result_type: 'recent'}, function(err, data, response) {
  var tweets = data.statuses.filter(function(t) {
    if (t.text.toUpperCase().includes('FAKE NEWS')) {
      return true;
    } else {
      return false;
    }
  });

  var facts = [ 

"It takes 8 minutes 17 seconds for light to travel from the Sun’s surface to the Earth.",

"10 percent of all human beings ever born are alive at this very moment.",

"The Earth spins at 1,000 mph but it travels through space at an incredible 67,000 mph.",

"Every year over one million earthquakes shake the Earth.",

"The largest ever hailstone weighed over 1kg and fell in Bangladesh in 1986.",

"Every second around 100 lightning bolts strike the Earth.",

"Every year lightning kills 1000 people.",

"In October 1999 an Iceberg the size of London broke free from the Antarctic ice shelf .",

"If you could drive your car straight up you would arrive in space in just over an hour.",

"Human tapeworms can grow up to 22.9m.",

"The Earth is 4.56 billion years old…the same age as the Moon and the Sun.",

"The dinosaurs became extinct before the Rockies or the Alps were formed.",

"Female black widow spiders eat their males after mating.",

"If our Sun were just an inch in diameter, the nearest star would be 445 miles away.",

"The Australian billygoat plum contains 100 times more vitamin C than an orange.",

"Astronauts cannot belch – there is no gravity to separate liquid from gas in their stomachs.",

"DNA was first discovered in 1869 by Swiss Friedrich Mieschler.",

"The molecular structure of DNA was first determined by Watson and Crick in 1953.",

"The first synthetic human chromosome was constructed by US scientists in 1997.",

"The thermometer was invented in 1607 by Galileo.",

"Englishman Roger Bacon invented the magnifying glass in 1250.",

"Alfred Nobel invented dynamite in 1866.",

"Wilhelm Rontgen won the first Nobel Prize for physics for discovering X-rays in 1895.",

"The wingspan of a Boeing 747 is longer than the Wright brother’s first flight.",

"An electric eel can produce a shock of up to 650 volts.",

"The earliest wine makers lived in Egypt around 2300 BC.",

"The Ebola virus kills 4 out of every 5 humans it infects.",

"In 5 billion years the Sun will run out of fuel and turn into a Red Giant.",

"A pig’s orgasm lasts for 30 minutes.",

"Without its lining of mucus your stomach would digest itself.",

"Humans have 46 chromosomes, peas have 14 and crayfish have 200.",

"There are 60,000 miles of blood vessels in the human body.",

"Utopia ia a large, smooth lying area of Mars.",

"A quarter of the world’s plants are threatened with extinction by the year 2010.",

"Each person sheds 40lbs of skin in his or her lifetime.",

"At 15 inches the eyes of giant squids are the largest on the planet.",

"The Universe contains over 100 billion galaxies.",

"Quasars emit more energy than 100 giant galaxies.",

"One in every 2000 babies is born with a tooth.",

"The African Elephant gestates for 22 months.",

"Each rubber molecule is made of 65,000 individual atoms."
];


  var tweet = tweets[Math.floor(Math.random() * tweets.length)];;
  var nameID = tweet.id_str;
  //console.log(tweet);
  var text = tweet.text;
  var fact = facts[getRndInteger(0, facts.length)]
  
  //console.log(tweet.id_str);
  text = 'Here is a scientific fact for you, @' + tweet.user.screen_name + ': ' + fact;
  text = text.substring(0, 140);
  
  var myTweet = {
    in_reply_to_status_id_str: nameID,
    status: text
  }


  //console.log(text);
  bot.post('statuses/update', myTweet, function(err, data, response) {
    //console.log(data)
  })
 
});

/*bot.get('statuses/show/847603191134822400', function (err, reply) {
  if (err) return console.log('error:', err)

  console.log(reply)

})

/*bot.post('statuses/update', {
    in_reply_to_status_id: '847603191134822400',
    status: '@brucebarbet2 test'
  }, function(err, data, response) {
    //console.log(data)
  })
  */
