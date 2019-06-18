module.exports.home = function (req, res) {
  //console.log(req);
  return res.render('home', {
    title: "home",
    LIST: list


  });
}
var list = [
  {
    description: "why do I need to use it?",
    category: "Personal",
    date: "25/12/2019"
  },
  {
    description: "Very OK",
    category: "work",
    date: "20/11/2019"
  }
]
module.exports.description = function (req, res) {
  //console.log(req);
  // console.log(req.body);
  list.push(req.body)
  return res.render('home', {
    title: "home",
    LIST: list
  });
}

