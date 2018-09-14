<!-- Scripts -->
<script type='text/javascript'>
function getImage(post_id,code) {
	parent = document.getElementById(&#39;post-image&#39;+post_id);
	var image = &quot;&quot;;
	var imgExists = code.indexOf(&#39;src=&quot;&#39;);
	if (imgExists &gt; -1) {
    	var i = imgExists + 5;
    	code = code.substr(i);
    	code = code.substr(0, code.indexOf(&#39;&quot;&#39;));
    	image = code; 
    }
  	if (image.length &gt; 0){
		var isVideoYT = code.indexOf(&#39;youtube&#39;);
  		if (isVideoYT &gt; -1){
			parent.innerHTML = &quot;<iframe src='&quot;+image+&quot;'/>&quot;;	
    	}else{
			parent.innerHTML = &quot;<img src='&quot;+image+&quot;'/>&quot;;
		}
    }else{
		parent.innerHTML = &quot;<img src='http://www.pinnacleeducations.in/wp-content/uploads/2017/05/no-image.jpg'/>&quot;;
	}
}
function getSnippet(post_id,code) {
	parent = document.getElementById(&#39;post-snippet&#39;+post_id);
	code = strip(code);
	code = code.substr(0,150);
	parent.innerHTML = code;
}
function strip(html){
   var doc = new DOMParser().parseFromString(html, &#39;text/html&#39;);
   return doc.body.textContent || &quot;&quot;;
}

</script>
<!-- End Scripts -->