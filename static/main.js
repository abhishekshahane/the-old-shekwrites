var b = 1;
function greet()
{
    // Creating cookie here.
    var alerted = localStorage.getItem('alerted') || '';
    if (alerted != 'yes') {
     alert("Hello, and welcome to ShekWrites! Please ensure that you have the latest version of your browser to have a smooth experience, and make sure that you are using a laptop(and not a phone). Thank you!");
     localStorage.setItem('alerted','yes');
    }
}
// Function for future use.
function nav()
{
    document.getElementsByClassName("nav").style.width = "250px";
}
var n = 1;
var count = 0;
function a()
{
    if (n == 1)
    {
        var seconds = 30;
        var countdown = setInterval(function() {
            seconds--;
            document.getElementById("countdown").textContent = "You have " + seconds + " seconds left, hurry!";
            if (seconds <= 0) clearInterval(countdown);
            if(seconds == 0)
            {
                // You can find the average per second by dividing the user's clicks by the seconds.
                // In this case, the number of seconds were thirty.
                var average = count / 30;
                if (count > 120)
                {
                    alert("Wow! You are pretty fast!")
                    alert("Thanks for playing the click test, your score was " + count + " , Share it!");
                    alert("Also, Your average was " + average + " CPS.");
                }
                else if (count > 100 && count < 120)
                {
                    alert("Not bad, but you could improve.");
                    alert("Thanks for playing the click test, your score was " + count + " , Share it!");
                    alert("Also, Your average was " + average + " CPS.");
                }
                else
                {
                    alert("You can do better, try again by refreshing the page.");
                    alert("Thanks for playing the click test, your score was " + count + " , Share it!");
                    alert("Also, Your average was " + average + " CPS.");
                }
        }
        }, 1000);
        n--;
    }
    count++;

    /*
    We are only going to run the timer function when
    n is clicked the first time, so it doesn't run
    for every single click.
    */

    // Also, displaying the clicks below the seconds using the
    // textContent feature.
    document.getElementById("count").textContent = "Clicks: " + count;
}

