

var stimed = new $.stimed({
		timeTarget: '.site-clock',
	  fps: 30,
});

stimed.style.create([
  {target:'body', time:'00:00', property:'background-color', value:'#000033'},
  {target:'body', time:'06:00', property:'background-color', value:'#9999FF'},
	
  {target:'body', time:'12:00', property:'background-color', value:'#CCFFFF'},
  {target:'body', time:'18:00', property:'background-color', value:'#3333CC'},
  {target:'body', time:'24:00', property:'background-color', value:'#000033'}
]);

