export default class Dino {
  static getDino(par, words) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://dinoipsum.herokuapp.com/api/?format=json&words=${words}&paragraphs=${par}`;
      request.onload = function() {
        (this.status === 200) ? resolve(request.response): reject(request.response);
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}