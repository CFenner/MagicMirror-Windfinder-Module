Module.register("windfinder",{

	defaults: {
		windUnit: 'kt'
		prependString: 'System temperature: '
		updateInterval: 60
	},
	start: function() {
		this.temperature = 'fetching ...';
		this.sendSocketNotification('CONNECT');
setUpdateInterval(this.load, this.config.updateInterval);
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
var iframe = document.createElement('iFrame');
		//wrapper.innerHTML = ;
		return wrapper;
	}
});
