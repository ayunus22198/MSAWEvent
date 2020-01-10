exports.addQuestion = (req, res) => {
  let { question, idOfAsker, idOfPresentation } = req.body;
  let question = new Question({
    question: questios,
    idOfAsker: idOfAsker,
    idOfPresentation: idOfPresentation
  });
  question.save.then((question) => {
    if(question) {
      return res.status(201).json({question});
    } else {
      return res.status(404).json({'Err'});
    }
  })
}

exports.getQuestions = (req, res) => {
  let { idOfPresentation } = req.body;
  Question.find({idOfPresentation: idOfPresentation}).sort('dateBegin', 1).then((questions) => {
    if(questions) {
      return res.status(201).json({question});
    } else {
      return res.status(201).json({'Error': 'Error'});
    }
  })
}
