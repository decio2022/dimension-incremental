var newsArray;

function numToOrd(num){
  let numMod100 = num % 100
  let ord = ""
  if (Math.floor(numMod100 / 10) == 1) ord = "th"
  else {
    switch(numMod100 % 10) {
    case 1:
      ord = "st"
      break;
    case 2:
      ord = "nd"
      break;
    case 3:
      ord = "rd"
      break;
    default:
      ord = "th"
    }
  }
  return num.toLocaleString() + ord
}

function familyGuyGenerate(x = player.points){
  x = new ExpantaNum(x).max(1)
  let count
  if (x.lte("10^^10")) count = new ExpantaNum(10).pow(x.slog(10).sub(1)).floor().min(1e9)
  else if (x.lte("10^^1e10")) count = x.slog(10).pow(9).min(1e90)
  else count = x.slog(10).log10().pow(90)
  let output = ""
  if (count.lte(7.5)){
    for (let i = new ExpantaNum(1); i.lte(count); i = i.add(1)){
      output = output + "<h" + i.toString() + ">Family guy</h" + i.toString() + ">"
    }
  } else{
    output = output + "<h1>Family guy</h1><h2>Family guy</h2><h3>Family guy</h3>..."
    if (count.lt(1e15)){
      for (let i = -2; i <= 0; i++){
        output = output + "<h" + count.add(i).toString() + ">Family guy</h" + count.add(i).toString() + ">"
      }
    } else output = output + "<h" + count.toString() + ">Family guy</h" + count.toString() + ">"
  }
  return output + "Family guy"
}

function layerNameGenerate(x = player.points){
  x = new ExpantaNum(x).max(10)
  let input = x
  let slogInf = new ExpantaNum(inf()).slog(10)
  let superLayer = x.slog(10).sub(slogInf).max(0).floor()
  if (x.gte(inf())){
    if (x.slog(10).gte(inf())){
      x = x.slog(10)
    } else {
      x = slogadd(x, superLayer.mul(-1))
    }
  }
  let layer = x.log10().logBase(inflog()).floor()
  let res = ExpantaNum.pow(10,x.log10().div(inflog().pow(layer))).div(10)
  if (input.slog(10).gte(inf())) return "Your points is enough to do a Meta Layer " + formatWhole(layer.max(1)) + " reset. When you reset, you will have " + format(isNaN(res)?1:res) + " layer points."
  else if (input.log10().gte(inf())) return "Your points is enough to do a Mk" + formatWhole(superLayer.add(1)) + " Layer " + formatWhole(layer.max(1)) + " reset. When you reset, you will have " + format(isNaN(res)?1:res) + " layer points."
  else if (input.gte(inf())) return "Your points is enough to do a Layer " + formatWhole(layer) + " reset. When you reset, you will have " + format(res) + " layer points."
  else return "Your points isn't enough to do a Layer " + formatWhole(1) + " reset, sorry about that."
}

// newsticker function start

function updateNewsArray() {
  newsArray = [
    // Total: 17
    [() => "!ban @" + numToOrd(Math.floor(Math.random()*100)) + " Exe k LG Fan ban evade", Math.random() <= 1/1.778**0],
    // 1% if generate 2
    // Range: 0 - 99
    // Ref: On January 2022, the user was banned due to evade the ban on LNGI Game discord server
    [() => "!ban @" + numToOrd(Math.floor(10**(Math.random()*8+2))) + " Exe k LG Fan ban evade", Math.random() <= 1/1.778**1],
    // Range: 100 - 1e10
    [() => "!ban @" + formatWhole(slogadd(Math.random()*9+1,2)) + "th Exe k LG Fan ban evade", Math.random() <= 1/1.778**2],
    // Range: 1e10 - e1e10
    [() => "!ban @" + formatWhole(tet10(Math.random()*7+3)) + "th Exe k LG Fan ban evade", Math.random() <= 1/1.778**3],
    // Range: e1e10 - 1F10
    [() => "!ban @" + formatWhole(tet10(slogadd(Math.random()*9+1,1))) + "th Exe k LG Fan ban evade", Math.random() <= 1/1.778**4],
    // Range: 1F10 - F1e10
    [() => "!ban @" + formatWhole(tet10(slogadd(Math.random()*9+1,2))) + "th Exe k LG Fan ban evade", Math.random() <= 1/1.778**5],
    // Range: F1e10 - Fe1e10
    [() => "!ban @" + formatWhole(tet10(tet10(Math.random()*7+3))) + "th Exe k LG Fan ban evade", Math.random() <= 1/1.778**6],
    // Range: Fe1e10 - F1F10
    [() => "!ban @" + formatWhole(pent10(Math.random()*7+3)) + "th Exe k LG Fan ban evade", Math.random() <= 1/1.778**7],
    // Range: F1F10 - 1G10
    [() => "!ban @" + formatWhole(pent10(slogadd(Math.random()*9+1,1))) + "th Exe k LG Fan ban evade", Math.random() <= 1/1.778**8],
    // Range: 1G10 - G1e10
    [() => "!ban @" + formatWhole(pent10(slogadd(Math.random()*9+1,2))) + "th Exe k LG Fan ban evade", Math.random() <= 1/1.778**9],
    // Range: G1e10 - Ge1e10
    [() => "!ban @" + formatWhole(pent10(tet10(Math.random()*7+3))) + "th Exe k LG Fan ban evade", Math.random() <= 1/1.778**10],
    // Range: Ge1e10 - G1F10
    [() => "!ban @" + formatWhole(pent10(tet10(slogadd(Math.random()*9+1,1)))) + "th Exe k LG Fan ban evade", Math.random() <= 1/1.778**11],
    // Range: G1F10 - GF1e10
    [() => "!ban @" + formatWhole(pent10(tet10(slogadd(Math.random()*9+1,2)))) + "th Exe k LG Fan ban evade", Math.random() <= 1/1.778**12],
    // Range: GF1e10 - GFe1e10
    [() => "!ban @" + formatWhole(pent10(tet10(tet10(Math.random()*7+3)))) + "th Exe k LG Fan ban evade", Math.random() <= 1/1.778**13],
    // Range: GFe1e10 - GF1F10
    [() => "!ban @" + formatWhole(pent10(pent10(Math.random()*7+3))) + "th Exe k LG Fan ban evade", Math.random() <= 1/1.778**14],
    // Range: GF1F10 - G1G10
    [() => "!ban @" + formatWhole(new ExpantaNum.hyper(6)(10,Math.random()*7+3)) + "th Exe k LG Fan ban evade", Math.random() <= 1/1.778**15],
    // Range: G1G10 - 1H10
    [() => "!ban @" + formatWhole(hyper(Math.random()*6+7)) + "th Exe k LG Fan ban evade", Math.random() <= 1/1.778**16],
    // Range: 1H10 - 2J10
    // Game based, no 1%
    [() => layerNameGenerate(), player.points.gte(ExpantaNum.pow(2,1024))],
    [() => familyGuyGenerate(), true],
    [() => "Number Generated: " + format(player.points.add(1).pow(player.prestige[1].max(1).log10())) + " (based on points and dots)", true],
    // Points, Dots
    [() => "Number Generated: " + format(powExp(player.points.add(1),0.5).pow(player.prestige[2].max(1).tetrate(2))) + " (based on points and lines)", player.dimShift >= 1],
    // Points, Lines
    [() => "Number Generated: " + format(powExp(ExpantaNum.pow(10,player.prestige[1]), player.prestige[2].add(1).sqrt())) + " (based on dots and lines)", player.dimShift >= 1],
    // Dots, Lines
    [() => "Number Generated: " + format(ExpantaNum.pow(10,powExp(player.lineSegments,0.5).pow(player.points.max(10).slog(10)))) + " (based on points and line segments)", player.milestone[2].includes(2)],
    // Points, L. Segments
    [() => "Number Generated: " + format(player.lineSegments.add(1).pow(player.prestige[1])) + " (based on dots and line segments)", player.milestone[2].includes(2)],
    // Dots, L.Segments
    [() => "Number Generated: " + format(powExp(player.lineSegments.add(1),player.prestige[2].pow(2))) + " (based on lines and line segments)", player.milestone[2].includes(2)],
    // Lines, L.Segments
    [() => "Number Generated: " + format(player.points.add(1).pow(player.string.max(1))) + " (based on points and string length)", player.milestone[2].includes(5)],
    // Points, String
    [() => "Number Generated: " + format(slogadd(player.prestige[1].max(1).pow(player.string.max(10).log10()),1)) + " (based on dots and string length)", player.milestone[2].includes(5)],
    // Dots, String
    [() => "Number Generated: " + format(powExp(slogadd(player.string,1).pow(player.prestige[2].tetrate(2)),player.string.max(10).log10())) + " (based on lines and string length)", player.milestone[2].includes(5)],
    // Lines, String
    [() => "Number Generated: " + format(powExp(slogadd(player.lineSegments,1),player.string.log10().div(10))) + " (based on line segments and string length)", player.milestone[2].includes(5)],
    // L.Segments, String

    [() => "Number Generated: " + format(powExp(player.points, Math.random()+0.5)) + " (based on points)", true],
    // Points, RNG
    [() => "Number Generated: " + format(player.prestige[1].max(1).tetrate(Math.random()+1.01)) + " (based on dots)", true],
    // Dots, RNG
    [() => "Number Generated: " + format(slogadd(Math.random(),3).pow(player.prestige[2].tetrate(2))) + " (based on lines)", player.dimShift >= 1],
    // Lines, RNG
    [() => "Number Generated: " + format(powExp(player.lineSegments,player.lineSegments.max(1).log10().pow(0.5).mul(Math.random()))) + " (based on line segments)", player.milestone[2].includes(2)],
    // L.Segments, RNG
    [() => "Number Generated: " + format(slogadd(player.string.pow(player.string.max(1).log10().pow(2).mul(Math.random())),1)) + " (based on string)", player.milestone[2].includes(5)],
    // String, RNG

    [() => "You are currently in " + formatWhole(player.dimShift) + " dimensional space", true],
    [() => "You are having " + format(player.prestige[1].div(LAYERS.gainSoftcap(1)),4) + "x more dots than softcap, dots require now goes " + format(player.prestige[1].div(LAYERS.gainSoftcap(1)).pow(LAYERS.softcapExp(1).sub(1)),4) + "x faster", player.prestige[1].gte(LAYERS.gainSoftcap(1))],
    [() => "You are having " + format(player.prestige[1].div(LAYERS.req(2)).mul(100),4) + "% of dots than lines require", player.dimShift >= 1],
    [() => "Current tab: " + player.tab + ", Current subtab (Tab 1): " + player.subtab[1] + ", Current subsubtab (Tab 1): " + player.subsubtab[1], true],
    [() => "NaN(illion) Detected", player.points.gte("1e3000000003")],
    [() => "Your points is equal to 2^^" + format(player.points.slog(2), 4) + " or 3^^" + format(player.points.slog(3), 4), true],
    [() => "Your points is equal to " + format(player.points.max(1+1e-15).ssrt()) + "^" + format(player.points.max(1+1e-15).ssrt()) + " or 10^" + format(player.points.max(10**(1+1e-15)).log10().ssrt(),4) + "^" + format(player.points.max(10**(1+1e-15)).log10().ssrt(),4), true],
    [() => "Points gain formula: " + format(getPointsGainMulti()) + "^" + format(getPointsGainExp()), true],
  ]
}

// 7 tickers are related to underages

function getAllTickersLength(type = "array", row = 10){
  let output = []
  for (let i=0;i<=newsArray.length-1;i++){
    if (type == "array"){
      output.push(newsArray[i][0]().length)
    } else {
      output = output + (newsArray[i][0]().length).toString() + ", "
      if ((i+1)%row==0) output = output + `<br>`
    }
  }
  return output
}

// newsticker function starts

document.addEventListener("visibilitychange", function() {if (!document.hidden) {scrollNextMessage();}}, false);
var scrollTimeouts = [];
function scrollNextMessage() {
  updateNewsArray();
  var s = document.getElementById('news');
  
  var nextMsgIndex
  var nextMsgCond

  //select a message at random

  try {
    nextMsgCond = false
    while (!nextMsgCond) {
      // randomly choose from either normal news or aarex news
      var array = newsArray
      nextMsgIndex = Math.min(Math.floor(Math.random() * array.length), array.length);
      var func = array[nextMsgIndex][1]
      nextMsgCond = typeof(func) == "function" ? func() : eval(func);
    }
  } catch(e) {
    console.log("Newsarray doesn't work at idx " + nextMsgIndex)
  }

  scrollTimeouts.forEach(function(v) {clearTimeout(v);});
  scrollTimeouts = [];

  //set the text
	var m = array[nextMsgIndex][0];
	if (typeof(m) == "function") m = m()
  if (AFactived && Math.random() < 0.41) m = Math.random() < 0.5 ? "April Fool " + (new Date().getYear()+1900) : "ha ha april fool prank"
	s.textContent = m

  //get the parent width so we can start the message beyond it
  let parentWidth = s.parentElement.clientWidth;

  //set the transition to blank so the move happens immediately
  s.style.transition = '';
  //move div_text to the right, beyond the edge of the div_container
  s.style.transform = 'translateX('+parentWidth+'px)';

  //we need to use a setTimeout here to allow the browser time to move the div_text before we start the scrolling
  scrollTimeouts.push(setTimeout( function() {
    //distance to travel is s.parentElement.clientWidth + s.clientWidth + parent padding
    //we want to travel at rate pixels per second so we need to travel for (distance / rate) seconds
    let dist = s.parentElement.clientWidth + s.clientWidth + 20; //20 is div_container padding
    let rate = AFactived ? 141 : 100; //change this value to change the scroll speed
    let transformDuration = dist / rate;
    if (!AFactived){
      player.tickerTimes++
    }
    //set the transition duration
    s.style.transition = 'transform '+transformDuration+'s linear';
    let textWidth = s.clientWidth;
    //we need to move it to -(width+parent padding) before it won't be visible
    s.style.transform = 'translateX(-'+(textWidth+5)+'px)';
    //automatically start the next message scrolling after this one finishes
    //you could add more time to this timeout if you wanted to have some time between messages
    scrollTimeouts.push(setTimeout(scrollNextMessage, Math.ceil(transformDuration * 1000)));
  }, 100));
}
