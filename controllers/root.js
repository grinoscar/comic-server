var DB = require('nosql');

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
  res.json(mockIndex);
};