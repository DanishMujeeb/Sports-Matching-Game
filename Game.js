// Below are some global variables used throughout the program
let currentlyClicked = [false, false, false, false, false, false, false, false, false, false, false, false];
let images = new Map();
let imgIDs = ["#img1", "#img2", "#img3", "#img4", "#img5", "#img6", "#img7", "#img8", "#img9", "#img10",
"#img11", "#img12"];
let imageOne = "";
let imageTwo = "";
let imageCount = 12;

$(document).ready(function() { // Start of doc ready

    var timer = setInterval(function() { // This function creates a timer 

        var count = parseInt($('#theTarget').html()); // Gets the number that is in the span tag
        if(imageCount == 0)
            return;
        if (count !== 0) 
            $('#theTarget').html(count - 1); // Reduces the number in the span tag by 1
        else 
        {
            clearInterval(timer); // Clears the timer (the timer is done)
            let popup = document.getElementById("popup2"); // Finds the element that has id popup2
            popup.classList.add("open-popup"); // Runs the CSS that is called open-popup 
        }
    }, 1000); // Runs every second

    let clicked = [false, false, false, false, false, false, false, false, false, false, false, false];
    let count = [0, 0, 0, 0, 0, 0];

    $("#img1").click(function(event) { // Runs when the image with id img1 is clicked

        if(clicked[0])
            $("#img1").prop("src", images.get("#img1")); // Shows the same image if img1 has been clicked on before

        if(!clicked[0])
        {
            let num = Math.round(Math.random()*6); // Gets a random number
            while(true)
            {
                if(count[num] < 2) // Checks if the random number has been selected twice already
                {
                    count[num]++;
                    $("#img1").prop("src", "images/Ball"+num+".jpg"); // Displays one of the balls in the place of img1
                    images.set("#img1", "images/Ball"+num+".jpg");
                    // Puts a key of #img1 and the path of the image of the ball as the value in the HashMap
                    break;
                }
                else
                    num = Math.round(Math.random()*6);
            }
            clicked[0] = true;
        }

        if(imageOne == "")
            imageOne = images.get("#img1"); // Makes imageOne equal to the value of #img1
        else if(imageTwo == "")
        {
            // Checks if the user clicks on the same image two times in a row
            if(currentlyClicked[0] && imageOne == images.get("#img1")) 
                return;
            imageTwo = images.get("#img1"); // Makes imageTwo equal to the value of #img1
        }
        currentlyClicked[0] = true;
        if(imageOne != "" && imageTwo != "")
            // Calls the findMatch function after waiting for half a second
            setTimeout(function(){findMatch(imageOne, imageTwo);}, 500); 

    });

    $("#img2").click(function(event) { // Runs when the image with id img2 is clicked

        if(clicked[1])
            $("#img2").prop("src", images.get("#img2")); // Shows the same image if img2 has been clicked on before

        if(!clicked[1])
        {
            let num = Math.round(Math.random()*6); // Gets a random number
            while(true)
            {
                if(count[num] < 2) // Checks if the random number has been selected twice already
                {
                    count[num]++;
                    $("#img2").prop("src", "images/Ball"+num+".jpg"); // Displays one of the balls in the place of img2
                    images.set("#img2", "images/Ball"+num+".jpg");
                    // Puts a key of #img2 and the path of the image of the ball as the value in the HashMap
                    break;
                }
                else
                    num = Math.round(Math.random()*6);
            }
            clicked[1] = true;
        }

        if(imageOne == "")
            imageOne = images.get("#img2"); // Makes imageOne equal to the value of #img2
        else if(imageTwo == "")
        {
            // Checks if the user clicks on the same image two times in a row
            if(currentlyClicked[1] && imageOne == images.get("#img2"))
                return;
            imageTwo = images.get("#img2"); // Makes imageTwo equal to the value of #img2
        }
        currentlyClicked[1] = true;
        if(imageOne != "" && imageTwo != "")
            // Calls the findMatch function after waiting for half a second
            setTimeout(function(){findMatch(imageOne, imageTwo);}, 500);
        
    });
    
    $("#img3").click(function(event) { // Runs when the image with id img3 is clicked

        if(clicked[2])
            $("#img3").prop("src", images.get("#img3")); // Shows the same image if img3 has been clicked on before
 
        if(!clicked[2])
        {
            let num = Math.round(Math.random()*6); // Gets a random number
            while(true)
            {
                if(count[num] < 2) // Checks if the random number has been selected twice already
                {
                    count[num]++;
                    $("#img3").prop("src", "images/Ball"+num+".jpg"); // Displays one of the balls in the place of img3
                    images.set("#img3", "images/Ball"+num+".jpg");
                    // Puts a key of #img3 and the path of the image of the ball as the value in the HashMap
                    break;
                }
                else
                    num = Math.round(Math.random()*6);
            }
            clicked[2] = true;
        }

        if(imageOne == "")
            imageOne = images.get("#img3"); // Makes imageOne equal to the value of #img3
        else if(imageTwo == "")
        {
            // Checks if the user clicks on the same image two times in a row
            if(currentlyClicked[2] && imageOne == images.get("#img3"))
                return;
            imageTwo = images.get("#img3"); // Makes imageTwo equal to the value of #img3
        }
        currentlyClicked[2] = true;
        if(imageOne != "" && imageTwo != "")
            // Calls the findMatch function after waiting for half a second
            setTimeout(function(){findMatch(imageOne, imageTwo);}, 500);
        
    });
    
    $("#img4").click(function(event) { // Runs when the image with id img4 is clicked

        if(clicked[3])
            $("#img4").prop("src", images.get("#img4")); // Shows the same image if img4 has been clicked on before

        if(!clicked[3])
        {
            let num = Math.round(Math.random()*6); // Gets a random number
            while(true)
            {
                if(count[num] < 2) // Checks if the random number has been selected twice already
                {
                    count[num]++;
                    $("#img4").prop("src", "images/Ball"+num+".jpg"); // Displays one of the balls in the place of img4
                    images.set("#img4", "images/Ball"+num+".jpg");
                    // Puts a key of #img4 and the path of the image of the ball as the value in the HashMap
                    break;
                }
                else
                    num = Math.round(Math.random()*6);
            }
            clicked[3] = true;
        }

        if(imageOne == "")
            imageOne = images.get("#img4"); // Makes imageOne equal to the value of #img4
        else if(imageTwo == "")
        {
            // Checks if the user clicks on the same image two times in a row
            if(currentlyClicked[3] && imageOne == images.get("#img4"))
                return;
            imageTwo = images.get("#img4"); // Makes imageTwo equal to the value of #img4
        }
        currentlyClicked[3] = true;
        if(imageOne != "" && imageTwo != "")
            // Calls the findMatch function after waiting for half a second
            setTimeout(function(){findMatch(imageOne, imageTwo);}, 500);
        
    });

    $("#img5").click(function(event) { // Runs when the image with id img5 is clicked

        if(clicked[4])
            $("#img5").prop("src", images.get("#img5")); // Shows the same image if img5 has been clicked on before

        if(!clicked[4])
        {
            let num = Math.round(Math.random()*6); // Gets a random number
            while(true)
            {
                if(count[num] < 2) // Checks if the random number has been selected twice already
                {
                    count[num]++;
                    $("#img5").prop("src", "images/Ball"+num+".jpg"); // Displays one of the balls in the place of img5
                    images.set("#img5", "images/Ball"+num+".jpg");
                    // Puts a key of #img5 and the path of the image of the ball as the value in the HashMap
                    break;
                }
                else
                    num = Math.round(Math.random()*6);
            }
            clicked[4] = true;
        }

        if(imageOne == "")
            imageOne = images.get("#img5"); // Makes imageOne equal to the value of #img5
        else if(imageTwo == "")
        {
            // Checks if the user clicks on the same image two times in a row
            if(currentlyClicked[4] && imageOne == images.get("#img5")) 
                return;
            imageTwo = images.get("#img5"); // Makes imageTwo equal to the value of #img5
        }
        currentlyClicked[4] = true;
        if(imageOne != "" && imageTwo != "")
            // Calls the findMatch function after waiting for half a second
            setTimeout(function(){findMatch(imageOne, imageTwo);}, 500);
        
    });

    $("#img6").click(function(event) { // Runs when the image with id img6 is clicked

        if(clicked[5])
            $("#img6").prop("src", images.get("#img6")); // Shows the same image if img6 has been clicked on before

        if(!clicked[5])
        {
            let num = Math.round(Math.random()*6); // Gets a random number
            while(true)
            {
                if(count[num] < 2) // Checks if the random number has been selected twice already
                {
                    count[num]++;
                    $("#img6").prop("src", "images/Ball"+num+".jpg"); // Displays one of the balls in the place of img6
                    images.set("#img6", "images/Ball"+num+".jpg");
                    // Puts a key of #img6 and the path of the image of the ball as the value in the HashMap
                    break;
                }
                else
                    num = Math.round(Math.random()*6);
            }
            clicked[5] = true;
        }

        if(imageOne == "")
            imageOne = images.get("#img6"); // Makes imageOne equal to the value of #img6
        else if(imageTwo == "")
        {
            // Checks if the user clicks on the same image two times in a row
            if(currentlyClicked[5] && imageOne == images.get("#img6"))
                return;
            imageTwo = images.get("#img6"); // Makes imageTwo equal to the value of #img6
        }
        currentlyClicked[5] = true;
        if(imageOne != "" && imageTwo != "")
            // Calls the findMatch function after waiting for half a second
            setTimeout(function(){findMatch(imageOne, imageTwo);}, 500);
        
    });

    $("#img7").click(function(event) { // Runs when the image with id img7 is clicked

        if(clicked[6])
            $("#img7").prop("src", images.get("#img7")); // Shows the same image if img7 has been clicked on before

        if(!clicked[6])
        {
            let num = Math.round(Math.random()*6); // Gets a random number
            while(true)
            {
                if(count[num] < 2) // Checks if the random number has been selected twice already
                {
                    count[num]++;
                    $("#img7").prop("src", "images/Ball"+num+".jpg"); // Displays one of the balls in the place of img7
                    images.set("#img7", "images/Ball"+num+".jpg");
                    // Puts a key of #img7 and the path of the image of the ball as the value in the HashMap
                    break;
                }
                else
                    num = Math.round(Math.random()*6);
            }
            clicked[6] = true;
        }

        if(imageOne == "")
            imageOne = images.get("#img7"); // Makes imageOne equal to the value of #img7
        else if(imageTwo == "")
        {
            // Checks if the user clicks on the same image two times in a row
            if(currentlyClicked[6] && imageOne == images.get("#img7"))
                return;
            imageTwo = images.get("#img7"); // Makes imageTwo equal to the value of #img7
        }
        currentlyClicked[6] = true;
        if(imageOne != "" && imageTwo != "")
            // Calls the findMatch function after waiting for half a second
            setTimeout(function(){findMatch(imageOne, imageTwo);}, 500);
        
    });

    $("#img8").click(function(event) { // Runs when the image with id img8 is clicked

        if(clicked[7])
            $("#img8").prop("src", images.get("#img8")); // Shows the same image if img8 has been clicked on before

        if(!clicked[7])
        {
            let num = Math.round(Math.random()*6); // Gets a random number
            while(true)
            {
                if(count[num] < 2) // Checks if the random number has been selected twice already
                {
                    count[num]++;
                    $("#img8").prop("src", "images/Ball"+num+".jpg"); // Displays one of the balls in the place of img8
                    images.set("#img8", "images/Ball"+num+".jpg");
                    // Puts a key of #img8 and the path of the image of the ball as the value in the HashMap
                    break;
                }
                else
                    num = Math.round(Math.random()*6);
            }
            clicked[7] = true;
        }

        if(imageOne == "")
            imageOne = images.get("#img8"); // Makes imageOne equal to the value of #img8
        else if(imageTwo == "")
        {
            // Checks if the user clicks on the same image two times in a row
            if(currentlyClicked[7] && imageOne == images.get("#img8"))
                return;
            imageTwo = images.get("#img8"); // Makes imageTwo equal to the value of #img8
        }
        currentlyClicked[7] = true;
        if(imageOne != "" && imageTwo != "")
            // Calls the findMatch function after waiting for half a second
            setTimeout(function(){findMatch(imageOne, imageTwo);}, 500);
        
    });

    $("#img9").click(function(event) { // Runs when the image with id img9 is clicked

        if(clicked[8])
            $("#img9").prop("src", images.get("#img9")); // Shows the same image if img9 has been clicked on before

        if(!clicked[8])
        {
            let num = Math.round(Math.random()*6); // Gets a random number
            while(true)
            {
                if(count[num] < 2) // Checks if the random number has been selected twice already
                {
                    count[num]++;
                    $("#img9").prop("src", "images/Ball"+num+".jpg"); // Displays one of the balls in the place of img9
                    images.set("#img9", "images/Ball"+num+".jpg");
                    // Puts a key of #img9 and the path of the image of the ball as the value in the HashMap
                    break;
                }
                else
                    num = Math.round(Math.random()*6);
            }
            clicked[8] = true;
        }

        if(imageOne == "")
            imageOne = images.get("#img9"); // Makes imageOne equal to the value of #img9
        else if(imageTwo == "")
        {
            // Checks if the user clicks on the same image two times in a row
            if(currentlyClicked[8] && imageOne == images.get("#img9"))
                return;
            imageTwo = images.get("#img9"); // Makes imageTwo equal to the value of #img9
        }
        currentlyClicked[8] = true;
        if(imageOne != "" && imageTwo != "")
            // Calls the findMatch function after waiting for half a second
            setTimeout(function(){findMatch(imageOne, imageTwo);}, 500);
        
    });

    $("#img10").click(function(event) { // Runs when the image with id img10 is clicked

        if(clicked[9])
            $("#img10").prop("src", images.get("#img10")); // Shows the same image if img10 has been clicked on before

        if(!clicked[9])
        {
            let num = Math.round(Math.random()*6); // Gets a random number
            while(true)
            {
                if(count[num] < 2) // Checks if the random number has been selected twice already
                {
                    count[num]++;
                    $("#img10").prop("src", "images/Ball"+num+".jpg"); // Displays one of the balls in the place of img10
                    images.set("#img10", "images/Ball"+num+".jpg");
                    // Puts a key of #img10 and the path of the image of the ball as the value in the HashMap
                    break;
                }
                else
                    num = Math.round(Math.random()*6);
            }
            clicked[9] = true;
        }

        if(imageOne == "")
            imageOne = images.get("#img10"); // Makes imageOne equal to the value of #img10
        else if(imageTwo == "")
        {
            // Checks if the user clicks on the same image two times in a row
            if(currentlyClicked[9] && imageOne == images.get("#img10"))
                return;
            imageTwo = images.get("#img10"); // Makes imageTwo equal to the value of #img10
        }
        currentlyClicked[9] = true;
        if(imageOne != "" && imageTwo != "")
            // Calls the findMatch function after waiting for half a second
            setTimeout(function(){findMatch(imageOne, imageTwo);}, 500);
        
    });

    $("#img11").click(function(event) { // Runs when the image with id img11 is clicked

        if(clicked[10])
            $("#img11").prop("src", images.get("#img11")); // Shows the same image if img11 has been clicked on before

        if(!clicked[10])
        {
            let num = Math.round(Math.random()*6); // Gets a random number
            while(true)
            {
                if(count[num] < 2) // Checks if the random number has been selected twice already
                {
                    count[num]++;
                    $("#img11").prop("src", "images/Ball"+num+".jpg"); // Displays one of the balls in the place of img11
                    images.set("#img11", "images/Ball"+num+".jpg");
                    // Puts a key of #img11 and the path of the image of the ball as the value in the HashMap
                    break;
                }
                else
                    num = Math.round(Math.random()*6);
            }
            clicked[10] = true;
        }

        if(imageOne == "")
            imageOne = images.get("#img11"); // Makes imageOne equal to the value of #img11
        else if(imageTwo == "")
        {
            // Checks if the user clicks on the same image two times in a row
            if(currentlyClicked[10] && imageOne == images.get("#img11"))
                return;
            imageTwo = images.get("#img11"); // Makes imageTwo equal to the value of #img11
        }
        currentlyClicked[10] = true;
        if(imageOne != "" && imageTwo != "")
            // Calls the findMatch function after waiting for half a second
            setTimeout(function(){findMatch(imageOne, imageTwo);}, 500);
        
    });

    $("#img12").click(function(event) { // Runs when the image with id img12 is clicked

        if(clicked[11])
            $("#img12").prop("src", images.get("#img12")); // Shows the same image if img12 has been clicked on before

        if(!clicked[11])
        {
            let num = Math.round(Math.random()*6); // Gets a random number
            while(true)
            {
                if(count[num] < 2) // Checks if the random number has been selected twice already
                {
                    count[num]++;
                    $("#img12").prop("src", "images/Ball"+num+".jpg"); // Displays one of the balls in the place of img12
                    images.set("#img12", "images/Ball"+num+".jpg") 
                    // Puts a key of #img12 and the path of the image of the ball as the value in the HashMap
                    break;
                }
                else
                    num = Math.round(Math.random()*6);
            }
            clicked[11] = true;
        }

        if(imageOne == "")
            imageOne = images.get("#img12"); // Makes imageOne equal to the value of #img12
        else if(imageTwo == "")
        {
            // Checks if the user clicks on the same image two times in a row
            if(currentlyClicked[11] && imageOne == images.get("#img12"))
                return;
            imageTwo = images.get("#img12"); // Makes imageTwo equal to the value of #img12
        }
        currentlyClicked[11] = true;
        if(imageOne != "" && imageTwo != "")
            // Calls the findMatch function after waiting for half a second
            setTimeout(function(){findMatch(imageOne, imageTwo);}, 500);
        
    });

    $("#btnPlayAgain").click(function(event) { // Runs when the button with id btnPlayAgain is clicked
        location.reload(); // Resets the webpage
    });

    $("#btnPlayAgain2").click(function(event) { // Runs when the button with id btnPlayAgain2 is clicked
        location.reload(); // Resets the webpage
    });

}); // End of doc ready

function findMatch(firstImage, secondImage) // Checks if the two images that are clicked are the same or not
{
    if(firstImage == secondImage) // Runs if both images are the same
    {
        for(i=0;i<12;i++)
        {
            if(currentlyClicked[i])
            {
                $(imgIDs[i]).css("visibility", "hidden"); // Hides the images
                currentlyClicked[i] = false;
                imageCount--;
                if(imageCount == 0)
                {
                    let popup = document.getElementById("popup"); // Finds the element that has id popup
                    popup.classList.add("open-popup");  // Runs the CSS that is called open-popup 
                }
            }
        } 
    }
    else if(firstImage != secondImage) // Runs if the two images are different
    {
        for(i=0;i<12;i++)
        {
            if(currentlyClicked[i])
            {
                $(imgIDs[i]).prop("src","images/card.png"); // Props up the original card image
                currentlyClicked[i] = false; 
            }
        }
    }
    
    // Resets imageOne and imageTwo
    imageOne = "";
    imageTwo = ""; 
}
