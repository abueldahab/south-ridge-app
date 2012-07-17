/*
Copyright (c) 2012 Kristofer Krause, http://kriskrause.com

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

SouthRidge.Utils.CheckConnection = function() {
	if(forge.is.connection.connected()) {
		return true;
	} else {
		SouthRidge.Router.navigate('noconnection', { trigger: true });
		return false;
	}
};

SouthRidge.Utils.Log = function(msg) {
	if (forge.is.mobile()) {
		forge.logging.log(msg);
	}
};

SouthRidge.Utils.SetTopBar = function(title) {
	forge.topbar.setTitle(title);
    forge.topbar.removeButtons();
};

SouthRidge.Utils.ScrollTop = function() {
	setTimeout(function () {
		document.body.scrollTop = 0;
	}, 0);
};

SouthRidge.Utils.DeactivateTabs = function() {
	forge.tabbar.setInactive();
};

SouthRidge.Utils.Loading = function() {
	$("#content").hide();
	$("#loading").show()
};

SouthRidge.Utils.DoneLoading = function() {
	$("#loading").hide();
};