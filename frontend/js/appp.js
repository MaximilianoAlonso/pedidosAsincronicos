fetch("http://localhost:3031/api/movies")
.then(function(response){
  return response.json()
})
.then(function(data) {
  var datas = Array.from(data);
    const array=datas.map(a => a)
console.log(array[1]);

});