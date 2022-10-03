<script>
  function isless(x,y) {return (x<y)};
  function iand(x,y)  {return (x&&y)};
  function igrt(x,y)  {return (x>y)};
  function igrtq(x,y)  {return (x>=y)};
  function ispositive(x) {return (x>0)};
  function ibetween(a,x,y) {return ((a>x)&&(a<y))};
  function dist(a,b){return Math.sqrt((a[0]-b[0])*(a[0]-b[0])+(a[1]-b[1])*(a[1]-b[1]))};
  function indexOf2dArray(array2d, itemtofind) {
           index = [].concat.apply([], ([].concat.apply([], array2d))).indexOf(itemtofind);
           if (index === -1) { return false; }
            numColumns = array2d[0].length;
            row = parseInt(index / numColumns);
            col = index % numColumns;
        return [row, col]; 
    }
</script>
<script type="text/javascript">
 var checkAnswer=[];
 </script>
