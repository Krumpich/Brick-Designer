function fun() {
    alert("YOU suck")
}




function SendMail() {


    var params = {

        from_name: "Customer",
        message: "Hello, bla bla bla... Do this:",

                file: [

            {filename: "Test_Cube.stl", path: "./Stl_Files/Test_Cube.stl"}

        ]

/*        file:  document.getElementById("Stl_File")    */

    }

    emailjs.send("service_d91d47k","template_f2mer6e",params).then(function (res){
       
        alert("Success! " + res.status);

        })

}




function takeScreenshot(){

var canvas = document.getElementById('Canvas');
      var context = canvas.getContext('2d');

      // draw cloud
      context.beginPath();
      context.moveTo(170, 80);
      context.bezierCurveTo(130, 100, 130, 150, 230, 150);
      context.bezierCurveTo(250, 180, 320, 180, 340, 150);
      context.bezierCurveTo(420, 150, 420, 120, 390, 100);
      context.bezierCurveTo(430, 40, 370, 30, 340, 50);
      context.bezierCurveTo(320, 5, 250, 20, 250, 50);
      context.bezierCurveTo(200, 5, 150, 20, 170, 80);
      context.closePath();
      context.lineWidth = 5;
      context.fillStyle = '#8ED6FF';
      context.fill();
      context.strokeStyle = '#0000ff';
      context.stroke();

      // save canvas image as data url (png format by default)
      var dataURL = canvas.toDataURL();

      alert(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));

}
