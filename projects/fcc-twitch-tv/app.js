var co = {
	arrChans : [ "ESL_SC2","OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas","comster404", "brunofin"],
	clientId : 'iw98j243ve7powy6zicrrqeqyo566e',
	chansDataArr : []
};

var fBlock = {
	setChanObj: function(chan) {
	  var obj = {name:"",followers: 0, logoUrl: "", chanUrl: "", banner: "", chanStatus: ""};
	  if(chan.display_name !== null) {obj.name = chan.display_name;} 
	  if(chan.followers !== null) {obj.followers = chan.followers;}
      if(chan.logo !== null) {obj.logoUrl = chan.logo;}
	  if(chan.url !== null) {obj.chanUrl = chan.url;}
	  if(chan.profile_banner !== null) {obj.banner = chan.profile_banner;} 
	  if(chan.status !== null) {obj.chanStatus = chan.status;}
	  co.chansDataArr.push(obj);
	  fBlock.getStatus(chan.display_name, obj);
	},
	runChans: function() {
	  for(var i = 0; i < co.arrChans.length; i++){
		  $.ajax({
			type: 'GET',
			url: 'https://api.twitch.tv/kraken/channels/' + co.arrChans[i],
			headers: {
			  'Client-ID': co.clientId
			},
			success: function(data) {
				fBlock.setChanObj(data);
			},
			error: function(errorThrown, textStatus) {
				if(textStatus === "error"){
					var message = errorThrown.responseText.split(":").pop().replace('"', '').replace('"}', '');
					var chan = errorThrown.responseText.split(":").pop().replace('"', '').replace('"}', '').split("'").splice(1,1);

					$('#' + chan).html('<h4>&nbsp&nbsp' + message + '</h4>');
					$('#' + chan).delay(3000).fadeOut();
				};
			}
		});
	  }
	},
	setDom: function(chanObj) {
	    var img = document.createElement("img");
		    img.src = chanObj.logoUrl;
		    img.width = 50;
		    img.height = 50; 
		    $('#' + chanObj.name).append(img);
		    $('#' + chanObj.name).children().after('<a href="' + chanObj.chanUrl + '">' + chanObj.chanStatus + '</a>');
	},
	getStatus: function(chan, chanObj) {
	  $.ajax({
		type: 'GET',
		url: 'https://api.twitch.tv/kraken/streams/' + chan,
		headers: {
		  'Client-ID': co.clientId
		},
		success: function(data) {
	      var bool;
	      if(data.stream === null){
	    	bool = false;
	      } else {
	    	bool = true;
	      };
	      $('#' + chan).data('online', bool);
		},
		complete: function (data) {
			fBlock.setDom(chanObj);
		}
	  });
	},
	hideShow: function(e) {
		switch(e.target.innerText) {
		    case "All":
		        e.target.innerHTML = "Offline";
		        Array.from(document.querySelectorAll('div.display-width')).map(function(cd){
					if($(cd).data('online') === false) { $(cd).hide() } else {
						$(cd).show();
					};
				});
		        break;
		    case "Offline":
		        e.target.innerHTML = "Online";
		        Array.from(document.querySelectorAll('div.display-width')).map(function(cd){
					if($(cd).data('online') === true) { $(cd).hide() } else {
						$(cd).show();
					};
				});
		        break;
	        case "Online":
		        e.target.innerHTML = "All";
		        Array.from(document.querySelectorAll('div.display-width')).map(cd => $(cd).show());
		        break;
		    default:
		        
		}
	}
};

var lBlock ={
	list: function() {
		document.getElementById('online-switch').addEventListener('click', fBlock.hideShow);
	}
};

(function(){ 
	fBlock.runChans();
	lBlock.list();
}());

window.fBlock = fBlock;
window.co = co;
