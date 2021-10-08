function SearchOperation() {
  var searchValueFormatted = document.getElementById("mySearch").value.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
  const arrFilms = ["alaaddin","annabelle","aquaman","13goingon30","16wishes","47metersdown","6underground","avengersendgame","armyofthedead","cindrella","beautyandthebeast","darkwaters","godzilla","holidate","venom","homealone","howtoloseaguyin10days","it","joker","thetomorrowwar","jumanji","justifysociety","karatekid","likeaboss","callofthewild","mebeforeyou","monsterhunter","murdermystery","ocean8","wrathofman","outsidethewire","someonegreat","spiderman","tallgirl","theplatform","theconjuring","thedarktower","thefaultinourstars","hachiko","thegreathack","loverosie","thekissingbooth","themeg", "theperfectdate","theprincessswitch","freeguy","thewarwithgrandpa","toalltheboyivelovedbefore","transformers","war","wonder"];
  const arrSize = arrFilms.length;
  var isFilmNotFound=true;
  document.getElementById("notfound").style.display="none";
  for(var i=0; i<arrSize; i++) {
    if(arrFilms[i].indexOf(searchValueFormatted) == -1) {
      document.getElementById(arrFilms[i]).style.display="none";
    }
    else {
      document.getElementById(arrFilms[i]).style.display="";
      isFilmNotFound=false;
    }
  }
  if(isFilmNotFound==true){
    document.getElementById("notfound").style.display="block";
  }
}
