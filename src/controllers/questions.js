module.exports = (req, res, next) => {
  const answers = req.cookie;
  console.log(answers);
  res.render('questions', {title : 'أسئلة', answers});
}
