$(function() {
	event.preventDefault();
    var countryList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
    $( ".country" ).autocomplete({
        source: function(request, response) {
            var results = $.ui.autocomplete.filter(countryList, request.term);
            response(results.slice(0, 15));
        },
        change: function( event, ui ) {
        	event.preventDefault();
        	
      	  if ( !ui.item ) {
      	    var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex($(this).val()) + "$", "i" ), valid = false;

      	    $("#country").children("option").each(function() {
      	      if ($(this).text().match(matcher)) {
      	        this.selected = valid = true;
      	        return false;
      	      }
      	    });

      	    if (!valid) {
      	      // remove invalid value, as it didn't match anything
      	      $(this).val("");
      	      $("#country").val("");
      	      return false;
      	    }
      	  }
      	},
    	minLength:2,
    }).focus(function(){
    	$(this).autocomplete("search");
    });
    
    var statusList = ["Importer","Exporter","Importer & Exporter"];
    $( "#primaryStatus" ).autocomplete({
        source: statusList,
        change: function( event, ui ) {
        	event.preventDefault();
        	
        	  if ( !ui.item ) {
        	    var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex($(this).val()) + "$", "i" ), valid = false;
        	    $("#primaryStatus").children("option").each(function() {
        	      if ($(this).text().match(matcher)) {
        	        this.selected = valid = true;
        	        return false;
        	      }
        	    });

        	    if (!valid) {
        	      // remove invalid value, as it didn't match anything
        	      $(this).val("");
        	      $("#primaryStatus").val("");
        	      return false;
        	    }
        	  }
        	},
        minLength:0,
        
    }).focus(function(){
    	$(this).autocomplete("search");
    });
    
    var gender = ["Male","Female"];
    $("#gender").autocomplete({
        source: gender,
        change: function( event, ui ) {
        	event.preventDefault();
        	
        	  if ( !ui.item ) {
        	    var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex($(this).val()) + "$", "i" ), valid = false;

        	    $("#gender").children("option").each(function() {
        	      if ($(this).text().match(matcher)) {
        	        this.selected = valid = true;
        	        return false;
        	      }
        	    });

        	    if (!valid) {
        	      // remove invalid value, as it didn't match anything
        	      $(this).val("");
        	      $("#gender").val("");
        	      return false;
        	    }
        	  }
        	},
        minLength:0,
    }).focus(function(){
    	$(this).autocomplete("search");
    });
    
    var owner = ["Yes","No"];
    $("#isOwner").autocomplete({
        source: owner,
        change: function( event, ui ) {
        	event.preventDefault();
        	
        	  if ( !ui.item ) {
        	    var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex($(this).val()) + "$", "i" ), valid = false;

        	    $("#isOwner").children("option").each(function() {
        	      if ($(this).text().match(matcher)) {
        	        this.selected = valid = true;
        	        return false;
        	      }
        	    });

        	    if (!valid) {
        	      // remove invalid value, as it didn't match anything
        	      $(this).val("");
        	      $("#isOwner").val("");
        	      return false;
        	    }
        	  }
        	},
        minLength:0,
    }).focus(function(){
    	$(this).autocomplete("search");
    });
    
    var importVolume = ["Upto 10%","10% to 25%", "25% to 50%", "50% to 75%", "75% to 100%"];
    $("#importVolume").autocomplete({
        source: importVolume,
        change: function( event, ui ) {
        	event.preventDefault();
        	
        	  if ( !ui.item ) {
        	    var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex($(this).val()) + "$", "i" ), valid = false;

        	    $("#importVolume").children("option").each(function() {
        	      if ($(this).text().match(matcher)) {
        	        this.selected = valid = true;
        	        return false;
        	      }
        	    });

        	    if (!valid) {
        	      // remove invalid value, as it didn't match anything
        	      $(this).val("");
        	      $("#importVolume").val("");
        	      return false;
        	    }
        	  }
        	},
        minLength:0,
    }).focus(function(){
    	$(this).autocomplete("search");
    });
    
    var exportVolume = ["Upto 10%","10% to 25%", "25% to 50%", "50% to 75%", "75% to 100%"];
    $("#exportVolume").autocomplete({
        source: exportVolume,
        change: function( event, ui ) {
        	event.preventDefault();
        	
        	  if ( !ui.item ) {
        	    var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex($(this).val()) + "$", "i" ), valid = false;

        	    $("#exportVolume").children("option").each(function() {
        	      if ($(this).text().match(matcher)) {
        	        this.selected = valid = true;
        	        return false;
        	      }
        	    });

        	    if (!valid) {
        	      // remove invalid value, as it didn't match anything
        	      $(this).val("");
        	      $("#exportVolume").val("");
        	      return false;
        	    }
        	  }
        	},
        minLength:0,
    }).focus(function(){
    	$(this).autocomplete("search");
    });
    
  });