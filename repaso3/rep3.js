function hashTags(tit) {
    let pal, hash;
    tit = tit.toLowerCase();
    
    pal = tit.split(" ");
    pal.sort((a, b) => b.length - a.length);
    
    hash = pal.slice(0, 3);
   
    for( let i = 0; i < hash.length; i++ ){
        hash[i] = '#' + hash[i];
    }
   
    return 'Hashtags: ["' + hash[0] + '","' + hash[1] + '","' + hash[2] + '"]';
}  