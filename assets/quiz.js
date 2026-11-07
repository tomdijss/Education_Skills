(function () {
  var quizzes = document.querySelectorAll("[data-quiz]");

  Array.prototype.forEach.call(quizzes, function (quiz) {
    var items = quiz.querySelectorAll(".item");

    Array.prototype.forEach.call(items, function (item) {
      var buttons = item.querySelectorAll("button");
      var why = item.querySelector(".why");
      var status = document.createElement("p");
      status.className = "status";
      status.setAttribute("role", "status");
      item.appendChild(status);

      Array.prototype.forEach.call(buttons, function (button) {
        button.addEventListener("click", function () {
          var correct = button.getAttribute("data-answer") === "correct";

          Array.prototype.forEach.call(buttons, function (other) {
            other.classList.remove("picked-right", "picked-wrong");
            other.disabled = false;
          });

          if (correct) {
            button.classList.add("picked-right");
            status.className = "status good";
            status.textContent = "Yes.";
            Array.prototype.forEach.call(buttons, function (other) {
              other.disabled = true;
            });
          } else {
            button.classList.add("picked-wrong");
            status.className = "status bad";
            status.textContent = "Not that one. Look at the prediction again.";
          }

          if (why) why.hidden = !correct;
        });
      });
    });
  });
})();
