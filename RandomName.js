<!DOCTYPE html>
<html>
<head>
	<meta charset = "utf-8">
	<script type="text/javascript">
	function CreateName()
	{
    	this.Random=Random;
    	this.Generator=Generator;
    	this.RandomName=RandomName;
	} 
 
 	var words =
	{
		"TR" :
		{
			"names" :
					[
					 "abajur", 
					 "başak", 
					 "ceylan", 
					 "davul", 
					 "ekmek", 
					 "futbol", 
					 "girdap", 
					 "hattat", 
					 "iğde",
				 	 "kutu",
				     "ok",
					 "piyano",
					 "renk",
					 "sabun",
					 "tüp",
					 "zincir"
					 
					 ],
			 
			"adjectives" : 
					[
					 "ağır", 
					 "bozuk", 
					 "cılız", 
					 "dar", 
					 "eğri", 
					 "fosforlu", 
					 "güzel",
					 "harika", 
					 "iyi",
					 "kirli",
				     "minik",
					 "nazik",
					 "sakar",				 
					 "tembel",
					 "vurdumduymaz",
					 "zalim"			 
				 ]
		},
		"EN" :
		{
			"names" : 
					[
					 "globe", 
					 "spike", 
					 "gazelle", 
					 "drum", 
					 "bread", 
					 "football", 
					 "eddy", 
					 "penman", 
					 "elaeagnus",
				     "box",
				     "dart",
					 "piano",
					 "color",
					 "soap",
					 "tube",
					 "chain",				
					 ],		
			"adjectives" :
					[
					 "heavy", 
					 "ruined", 
					 "lean", 
					 "narrow", 
					 "curve", 
					 "phosphoric", 
					 "pretty", 
					 "great", 
					 "good",
					 "dirty",
					 "tiny",
					 "courteous",
					 "clumsy",
					 "lazy",
					 "carefree",
					 "brutal",				 
					 ]
		}
	}

	 function Random(maxRange)
	{
		return Math.floor((Math.random() * maxRange) + 1);
	}
	 
	function Generator(count, language)
	{
		var list = [];
		for (i = 0; i < count; i++)
		{
			randName = Random(words[language]["names"].length - 1);
			randAdjective = Random(words[language]["adjectives"].length - 1);
	 
			list.push( words[language]["adjectives"][randAdjective] +" "+words[language]["names"][randName] );
		}
		return list;
	}
	 
	function RandomName(count, language)
	{
		pairList = Generator(count, language);

		for (var i = 0; i < pairList.length; i++)
		{
			document.writeln((i+1) + " : " + pairList[i] + "<br/>");
		}	
	}

    </script>
</head>
<body>
	<script type="text/javascript">

	var example = new CreateName();
	example.RandomName(5,"TR");

	</script>
</body>
</html>
