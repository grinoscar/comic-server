

var DB = require('nosql');
let nosql = DB.load('/home/glenn/src/comic-server/data/comics.nosql');

const mockIndex = {
  comics: [
    {
      title: 'Girl Genuis',
      frequency: ['M', 'W', 'F'],
      homePage: 'http://www.girlgeniusonline.com/',
      imageSource: 'http://www.girlgeniusonline.com/ggmain/strips/ggmain${date|YYYYMMDD}.jpg',
    },
    {
      title: 'Questionable Content',
      frequency: ['M', 'Tu', 'W', 'Th', 'F'],
      homePage: 'http://questionablecontent.net/',
      imageSource: 'http://www.questionablecontent.net/comics/${sequence|no leading zeroes}.png',
    },
    {
      title: 'Trekker',
      homePage: 'http://trekkercomic.com/',
      imageSource: 'http://trekkercomic.com/wp-content/uploads/2011/09/2011-09-21_Trekker_pg001.jpg',
    },
  ]
};


exports.showAll = (req, res) => {
  const findAll = (builder) => {
    builder.callback( (err, response) => {
      const wrapper = {};
      console.log('dataset', response);
      wrapper.comics = response;
      res.json(wrapper);
    });
  }
    
  nosql.refresh().find().make(findAll);
};

exports.initDB = (req, res) => {
  mockIndex.comics.forEach((comic) => {
    console.log('inserting ', comic);
    nosql.insert(comic);
  });
  nosql.refresh();
  res.status(202).send({});
}