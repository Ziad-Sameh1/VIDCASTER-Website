function SearchOperationSerieses() {
  var searchValueFormatted = document.getElementById("mySearch").value.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
  const arrSerieses = ["aliceinborderland","annewithane","arrow","barbarians","clickbait","controlz","cursed","dark","deadlyclass","frontier","lostinspace","love101","moneyheist","mrrobot","paranormal","peakyblinders","queenofthesouth","resurrectionertugrul","shadowandbone","sherlock","shooter","snowpiercer","squidgame","strangerthings","sweettooth","thealist","theblacklist","thecrown","thegooddoctor","thehundred","thelastkingdom","theoriginals","thequeensgambit","therain","thesociety","thewalkingdead","titans","vikings","you","znation","breakingbad","brooklynninenine","emilyinparis","friends","gameofthrones", "lockeandkey","loki","lupin","prisonbreak","thewitcher"];
  const arrSize = arrSerieses.length;
  var isSeriesNotFound=true;
  document.getElementById("notfound").style.display="none";
  for(var i=0; i<arrSize; i++) {
    if(arrSerieses[i].indexOf(searchValueFormatted) == -1) {
      document.getElementById(arrSerieses[i]).style.display="none";
    }
    else {
      document.getElementById(arrSerieses[i]).style.display="";
      isSeriesNotFound=false;
    }
  }
  if(isSeriesNotFound==true){
    document.getElementById("notfound").style.display="block";
  }
}
