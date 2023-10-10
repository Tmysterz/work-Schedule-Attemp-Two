// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    var saveButtons = document.querySelectorAll('.btn');

    saveButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var timeBlock = button.closest('.time-block');

            var timeBlockId = timeBlock.id;

            var eventInput = timeBlock.querySelector('.description');

            var userInput = eventInput.value;

            if (typeof Storage !== 'undefined') {
                localStorage.setItem(timeBlockId, userInput);
                alert('Event saved to local storage');
            } else {
                alert('local storage is not supported in this browser');
            }
        });
    });

    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.

    var timeDisplayEl = $('#time-display');

    function displayTime() {
        var rightNow = dayjs().format('dddd, MMMM D');
        timeDisplayEl.text(rightNow);
    }
    displayTime();
  });
  