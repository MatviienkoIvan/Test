var strJson = '[{"id": 1, "model": "Opel", "color": "red"},{"id": 2, "model": "Opel", "color": "black"},{"id": 3, "model": "BMW", "color": "black"},{"id": 4, "model": "BMW", "color": "red"},{"id": 5, "model": "BMW", "color": "white"},{"id": 6, "model": "Subaru", "color": "black"},{"id": 7, "model": "Hyundai","color": "red"}]'	
var param = JSON.parse(strJson)

var result = [];
	param.map(function(item){
		let res ={};
		res.id = item.id;
		if(item.model=="BMW"){
			res.title = "Best car";
		}else if(item.color == "red"){
			res.title = item.color + " car"
		}else if(item.color == "black"){
			res.title = item.color + " car"
		}else{
			res.title ="Сar"
		}
		result.push(res)
	});
console.log(result)