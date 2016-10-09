
var focused = false;
browser.storage.local.get("openTop",function (element) {
	focused = element.openTop?true:false;
});


var title = browser.i18n.getMessage("menuName");

if(!title) title = "open as inPrivate";



browser.contextMenus.create({"title": title, "id": "parent", "contexts": ["link"]});

browser.contextMenus.onClicked.addListener(function(info, tab) {			
	var params = {
		url: info.linkUrl,
		focused: focused,			
		inPrivate: true
	};
	browser.windows.create(params);
	
});	



