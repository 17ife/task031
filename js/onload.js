var map = {
  "beijing": [
    "北京大学", "清华大学", "中国人民大学", "北京师范大学"
  ],
  "shanghai": [
    "复旦大学", "上海交通大学", "	同济大学", "华东师范大学"
  ],
  "zhejiang": [
    "浙江大学", "中国美术学院", "浙江财经大学", "浙江工业大学"
  ]
}
function onload(){
    document.getElementById("inSchoolBtn").addEventListener("click",function(){
        change_type();
    })
    document.getElementById("outSchoolBtn").addEventListener("click",function(){
        change_type();
    })
    changeSchool()
}

function change_type(){
    var chkObjs = document.getElementsByName("stundent_type");
    if(chkObjs[0].checked){ 
        //in school
        document.getElementById("inschool").style.display = "block"
        document.getElementById("outschool").style.display = "none"
    }else{
        //out school
        document.getElementById("inschool").style.display = "none"
        document.getElementById("outschool").style.display = "block"
    }
}

function changeSchool(){
    var city = document.getElementById("city");
    var innerHTML_Str = "";
    map[city.value].forEach(function(result) {
        innerHTML_Str +="<option value =''>"+result+"</option>";
    });
    document.getElementById("shool").innerHTML = innerHTML_Str;
    // console.log(innerHTML_Str)
}