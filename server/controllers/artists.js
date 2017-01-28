function artistsController(){
	//View all users
	var data = [{
		"name": "Miley Cyrus",
		"similar": ["Ali Lohan", "Aly & AJ", "Jordan Pruitt", "Raven-Symoné", "Ashlee Simpson", "Jonas Brothers", "Zac Efron", "Selena Gomez", "Corbin Bleu", "Justin Bieber", "Jesse McCartney", "Hilary Duff", "Mitchel Musso", "Miranda Cosgrove", "Vanessa Hudgens", "Emily Osment", "Demi Lovato", "Ashley Tisdale", "Carly Rae Jepsen"]
	}, {
		"name": "Justin Bieber",
		"similar": ["One Direction", "Kevin Rudolf", "Selena Gomez", "Miranda Cosgrove", "Midnight Red", "Travis Garland", "Keke Palmer", "Demi Lovato", "Chris Brown", "Trey Songz", "Karina Pasian", "Kristinia DeBarge", "Jordin Sparks", "Hannah Montana", "Jonas Brothers", "Zac Efron", "Greyson Chance", "Angel", "Katy Perry", "Miley Cyrus", "Taylor Swift", "Mindless Behavior", "Jason Derulo", "Drop City Yacht Club"]
	}, {
		"name": "Adele",
		"similar": ["Kristina Train", "Alessi's Ark", "Lana Del Rey", "Coldplay", "Amy Winehouse", "Lykke Li", "Ellie Goulding", "Passenger", "Rumer", "Joss Stone", "Kate Nash", "Lily Allen", "OneRepublic", "Feist", "Katie Melua", "Gabriella Cilmi", "Florence + The Machine", "Natasha Bedingfield", "Jamie Cullum", "MoZella", "Corinne Bailey Rae", "Basia Bulat", "Ed Sheeran", "KT Tunstall", "Beth Orton", "Nikki Jean", "Jessie Baylin", "Regina Spektor", "Liam Bailey", "Duffy", "Leona Lewis"]
	}, {
		"name": "DJ Khaled",
		"similar": ["Plies", "Sheek Louch", "2 Chainz", "Juicy J", "T.I.", "Birdman", "Gucci Mane", "Ace Hood", "Pitbull", "Fat Joe", "Clinton Sparks", "DJ Drama"]
	}]


	this.index = function(req,res){ 
		res.json("We out here");
	}


	this.getOne = function(req,res){
		
		for (each in data) {
			if (data[each].name.toLowerCase() == req.params.artistname.toLowerCase()) {
				res.json(data[each]);		
			} 
		}
		res.json(req.params.artistname);
	}



}

module.exports = new artistsController();