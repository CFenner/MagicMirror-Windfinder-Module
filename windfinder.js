Module.register("windfinder", {
	defaults: {
		// windUnit: 'kt',
		updateInterval: 60,
    animationSpeed: 1,
		height: '213px',
		width: '880px',
		protocoll: 'https://',
		apiBase: '.windfinder.com/widget/',
		type: {
			forecast: "forecast/"
		},
		location: "epplesee_rheinstetten"
	},
	start: function() {
		// setUpdateInterval(function(){
	  //   this.updateDom(this.config.animationSpeed * 1000);
		// }.bind(this), this.config.updateInterval * 60 * 1000);
	},
	getDom: function() {
		var wrapper = document.createElement("div");
		var iframe = document.createElement("iFrame");
		iframe.src = this.config. protocoll + config.language + this.config.apiBase
			+ this.config.type.forecast
			+ this.config.location
			+ "?domain=localhost"
			+ "&columns=3"
			+ "&days=3"
			+ "&show_day=1"
			+ "&show_pressure=0"
			+ "&show_clouds=0"
			+ "&show_temperature=1"
			+ "&show_rain=0"
			+ "&show_wind=1"
			+ "&show_waves=1"
			+ "&unit_temperature=c"
			+ "&unit_rain=mm"
			+ "&unit_wind=kts"
			+ "&unit_wave=m";
		iframe.style.border = "none";
		iframe.style.height = this.config.height;
		iframe.style.width = this.config.width;
		wrapper.appendChild(iframe);
		return wrapper;
	}
});
