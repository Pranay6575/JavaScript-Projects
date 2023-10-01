let updateTime = () => {
  let d = new Date();
  usa.innerHTML = d
    .toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    })
    .split(", ")[1];
  china.innerHTML = d
    .toLocaleString("en-US", {
      timeZone: "Asia/Shanghai",
    })
    .split(", ")[1];
  india.innerHTML = d
    .toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    })
    .split(", ")[1];

    let alarmhour = alarm.value.split(":")[0];
    let alarmmin = alarm.value.split(":")[1];
    if(d.getHours() == alarmhour && d.getMinutes() == alarmmin){
      console.log("Alarm is Ringing");
      let audioUrl = "https://samplelib.com/lib/preview/mp3/sample-3s.mp3";
      let audio = new Audio(audioUrl);
      audio.play();
    }
};

setInterval(updateTime, 1000);
