

	var goods = {
	"28292" : {
		"name" : "Банан",
		"cost" : 30,
		"img" : "https://cdn2.iconfinder.com/data/icons/jetflat-fruits/90/002_014_banana_banan_plant_herb_fruit_food-128.png",
		"sklad" : "да"
	},
	"23729" : {
		"name" : "Помидор",
		"cost" : 40,
		"img" : "https://cdn0.iconfinder.com/data/icons/nature-life-in-color/128/tomato-color-128.png",
		"sklad" : "нет"
	},
	"11223" : {
		"name" : "Клубника",
		"cost" : 60,
		"img" : "https://cdn3.iconfinder.com/data/icons/fruits-and-vegetables-13/32/strawberry-fruit-berry-128.png",
		"sklad" : "да"
	}
};

console.log(goods);
var out = '';
for (var key in goods) {
	out+='Название: '+goods[key].name + '<br>';
	out+='Цена: '+goods[key].cost + '<br>';
	out+='Наличие: '+goods[key].sklad + '<br>';
	// <img src="">
	out+='<img src="'+goods[key].img+'">';
	out+='<hr>';
}
document.getElementById('out').innerHTML = out;




