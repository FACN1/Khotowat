var khotowat = (function () {

  var getQuestions = (callback) => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readeState === 4 && xhr.status === 200) {
        callback(null, JSON.parse(xhr.responseText))
      }
      else if (xhr.status === 500) {
        var errorMessage = xhr.responseText;
        callback(errorMessage, null)
      }
    }
    xhr.open('GET', '/questions');
    xhr.send();
  }

  var renderQpage = (error, questionPageArr) => {

  }
});
