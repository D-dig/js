
var numposts = 100;
var standardstyling = true;
/*programmer and maker of this code is belong to founder of http://www.ardilas.com*/

function startpost(json){
  for (var i = 0; i < numposts; i++){
    var entry = json.feed.entry[i];
    var posttitle = entry.title.$t;
    var posturl;
    
    if (i == json.feed.entry.length) break;
    
    for (var k = 0; k < entry.link.length; k++){
      if (entry.link[k].rel == 'alternate'){
        posturl = entry.link[k].href;break;
      }
    }
        
    posttitle = posttitle.link(posturl);
    if (standardstyling) document.write('<li>');
    
    document.write(posttitle);
  }
  
  if (standardstyling) document.write('</li>');
}

function finished(){
  document.write('<br /><br /><a href="http://www.ardilas.com/2015/08/cara-membuat-bikin-daftar-isi-sitemap-blogger-blogspot-dengan-berdasarkan-label-kategori-topik-tertentu.html" style="font-size: 10 px; text-decoration:none; color: #616469;" target="_blank" title="Cara Ke-3 Buat Daftar Isi Dengan Label Tertentu di Blogspot">Sitemap</a>');
}
