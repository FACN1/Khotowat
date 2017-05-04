const khotowat = (function () {

  function getQuestions (callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readeState === 4 && xhr.status === 200) {
        callback(null, JSON.parse(xhr.responseText))
      }
      else if (xhr.status === 500) {
        const errorMessage = xhr.responseText;
        callback(errorMessage, null)
      }
    }
    xhr.open('GET', '/questions');
    xhr.send();
  }

  function renderQpage (error, questionPageArr) {

  }
});
