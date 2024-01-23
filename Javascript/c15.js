// Event listener to ensure DOM content is loaded before executing
document.addEventListener("DOMContentLoaded", function () {
    // References to HTML elements
    let todayDate = document.getElementById("todaysdate");
    let todoButton = document.getElementById("whattodo");

    // Event listener for button click
    todoButton.addEventListener("click", displayActivity);

    // Create a new Date object
    let d = new Date();
    // Display the current date
    displayDate();

    // Function to display the current date
    function displayDate() {
        todayDate.innerHTML = d.toDateString();
    }

    // Function to handle button click and display activity
    function displayActivity() {
        // Get day of the week, day of the month, month, and year
        let dayOfWeek = d.getDay();
        let dayOfMonth = d.getDate(); // New line to get day of the month
        let month = d.getMonth(); // New line to get month
        let year = d.getFullYear(); // New line to get year
        let youShould;

        // Different activities for each day of the month
        let dailyActivities = [
            "Read a book.",
            "Go for a walk in the park.",
            "Try a new recipe.",
            "Write in a journal.",
            "Learn a new language.",
            "Do a workout routine.",
            "Call a friend or family member.",
            // Add more activities for the remaining days of the month
        ];

        // Switch statement for day of the week
        switch (dayOfWeek) {
            case 0:
                youShould = "Make a list of things you like to do.";
                break;
            case 1:
                youShould = "Gotta do what ya gotta do!";
                break;
            case 2:
                youShould = "Take time to smell the roses!";
                break;
            case 3:
                youShould = "Don’t forget to eat breakfast!";
                break;
            case 4:
                youShould = "Learn something new today!";
                break;
            case 5:
                youShould = "Take it easy. You’ve earned it!";
                break;
            case 6:
                youShould = "Do one thing from your list of things you like to do.";
                break;
            default:
                youShould = "Hmm. Something has gone wrong.";
                break;
        }

        // Additional messages for day of the month, month, and year
        youShould += "<br>";
        youShould += "<br>Day of the month: " + dayOfMonth;
        youShould += "<br>Month: " + getMonthName(month);
        youShould += "<br>Year: " + year;

        // Output the value of youShould into the thingToDo div
        document.getElementById("thingToDo").innerHTML = youShould;
    }

    // Helper function to get the month name from the index
    function getMonthName(monthIndex) {
        let months = [
            "January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"
        ];
        return months[monthIndex];
    }
});
