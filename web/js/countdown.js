
/*
 Count down until any date script-
 By JavaScript Kit (www.javascriptkit.com)
 Over 200+ free scripts here!
 */


//change the text below to reflect your own,
var before="Christmas!"
var current="Today is Christmas. Merry Christmas!"
var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")

function countdown(yr,m,d){
    theyear=yr;themonth=m;theday=d
    var today=new Date()
    var todayy=today.getYear()
    if (todayy < 1000)
        todayy+=1900
    var todaym=today.getMonth()
    var todayd=today.getDate()
    var todayh=today.getHours()
    var todaymin=today.getMinutes()
    var todaysec=today.getSeconds()
    var todaystring=montharray[todaym]+" "+todayd+", "+todayy+" "+todayh+":"+todaymin+":"+todaysec
    futurestring=montharray[m-1]+" "+d+", "+yr
    dd=Date.parse(futurestring)-Date.parse(todaystring)
    dday=Math.floor(dd/(60*60*1000*24)*1)
    dhour=Math.floor((dd%(60*60*1000*24))/(60*60*1000)*1)
    dmin=Math.floor(((dd%(60*60*1000*24))%(60*60*1000))/(60*1000)*1)
    dsec=Math.floor((((dd%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1)
    if(dday==0&&dhour==0&&dmin==0&&dsec==1){
        document.getElementById("countdown-container").innerHTML=current
        return
    }
    else
        document.getElementById("countdown-container").innerHTML="ONLY "+dday+ " DAYS, "+dhour+" HOURS, "+dmin+" MINUTES, AND "+dsec+" SECONDS LEFT"
    setTimeout("countdown(theyear,themonth,theday)",1000)
}
//enter the count down date using the format year/month/day
countdown(2015,11,21)