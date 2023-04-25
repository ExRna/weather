
//利用fetch 进行连接并获取数据
fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-544ABB46-CE93-4E13-A7F5-3542BCEB80BF")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //console.log(data);
    //将数据呈现到页面上
    let show = document.querySelector(".show");
    let WxData, PopData, MinTData, CIData, MaxTData;

    const select = document.querySelector(".select");
    select.addEventListener("change", function () {
      // 清空显示
      show.innerHTML = "";

      // 获取选择的值
      const value = select.value;

      data.records.location.forEach((location) => {
        const locationName = location.locationName;
        if (value === locationName) {
          let weatherData = location.weatherElement;

          WxData = weatherData[0].time[0].parameter.parameterName;
          console.log(WxData);
          PopData = weatherData[1].time[0].parameter;
          MinTData = weatherData[2].time[0].parameter;
          CIData = weatherData[3].time[0].parameter;
          MaxTData = weatherData[4].time[0].parameter;

          show.innerHTML +=
            "<div>" +
            //locationName + ": " +
            WxData + "," +
            PopData.parameterName + PopData.parameterUnit + "," +
            MinTData.parameterName + MinTData.parameterUnit + "," +
            CIData.parameterName + "," +
            MaxTData.parameterName + MaxTData.parameterUnit +
            "</div>";
        }
      });
    });
  });


