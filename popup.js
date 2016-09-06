(function(){
	var onTopCheckbox = document.getElementById('openTop');	
	
	var background = browser.extension.getBackgroundPage(); 
	onTopCheckbox.checked = background.focused;

	
	var objects = document.getElementsByTagName('*');
	for(var i = 0; i < objects.length; i++)
	{
		if (objects[i].dataset && objects[i].dataset.message) 
		{
			objects[i].innerHTML = browser.i18n.getMessage(objects[i].dataset.message);
		}
	}
	
	if(onTopCheckbox) {
		onTopCheckbox.addEventListener("click", function() {
			background.focused = this.checked;
			browser.storage.local.set({openTop: this.checked});
		});	
	}
	
})();