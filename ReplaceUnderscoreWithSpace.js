<!DOCTYPE html>
<html>
  <script>
  
  function ReplaceUnderscoreWithSpace()
  { 
      this.Onar = Onar;
  }

  function Onar (string)
  {
      var i,j,s;  
      var array = string.split("");

      for (i = 0 ; i <= array.length-1 ; i++) 
      {
            if (array[i] != "_")
                break;       
      }
      for (var j = array.length-1 ; j >= 0 ; j--) 
      {
           if (array[j] != "_")
                break; 
      }
      for (s = i ; s <= j ; s++)     
      {
            if (array [s] == "_")     
                 array[s] = array[s].replace('_',' ');
      }
      document.write(array.join(""));
  } 

  </script>
<body>
  <script type="text/javascript">

  var string = '_foo__bar_';
  var example = new ReplaceUnderscoreWithSpace();
  example.Onar(string);

  </script>
</body>
</html>
