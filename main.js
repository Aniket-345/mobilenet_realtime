function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier("MobileNet",modelloded)
}

function draw(){
  image(video,0,0,300,300)
  classifier.classify(video,got_result)
}
function modelloded(){
  console.log("model loded")

}
function got_result(error,result){
  if(error==true){
      console.error(error)
  }else{
    console.log(result)
    document.getElementById("result_object_name").innerHTML=result[0].label
    percent=Math.floor(result[0].confidence*100)
    document.getElementById("result_object_accuracy").innerHTML=percent+"%"
  }
 

}



