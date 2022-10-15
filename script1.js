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