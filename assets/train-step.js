(function () {
  var roots = document.querySelectorAll("[data-train-step]");

  Array.prototype.forEach.call(roots, function (root) {
    var x = Number(root.getAttribute("data-x"));
    var target = Number(root.getAttribute("data-target"));
    var start = Number(root.getAttribute("data-start"));
    var step = Number(root.getAttribute("data-step"));
    var weight = start;

    var meters = document.createElement("div");
    meters.className = "meters";
    meters.innerHTML =
      "<div><span>Input</span><strong data-field='x'></strong></div>" +
      "<div><span>Weight</span><strong data-field='w'></strong></div>" +
      "<div><span>Prediction</span><strong data-field='p'></strong></div>" +
      "<div><span>Loss</span><strong data-field='loss'></strong></div>";

    var actions = document.createElement("div");
    actions.className = "stepper-actions";

    var up = document.createElement("button");
    up.type = "button";
    up.textContent = "Raise the weight";

    var down = document.createElement("button");
    down.type = "button";
    down.textContent = "Lower the weight";

    var reset = document.createElement("button");
    reset.type = "button";
    reset.textContent = "Start again";

    actions.appendChild(up);
    actions.appendChild(down);
    actions.appendChild(reset);

    var status = document.createElement("p");
    status.className = "status";
    status.setAttribute("role", "status");

    root.appendChild(meters);
    root.appendChild(actions);
    root.appendChild(status);

    function lossOf(w) {
      var prediction = w * x;
      return (prediction - target) * (prediction - target);
    }

    function paint(message, kind) {
      meters.querySelector("[data-field='x']").textContent = String(x);
      meters.querySelector("[data-field='w']").textContent = String(weight);
      meters.querySelector("[data-field='p']").textContent = String(weight * x);
      meters.querySelector("[data-field='loss']").textContent = String(lossOf(weight));
      status.textContent = message;
      status.className = "status" + (kind ? " " + kind : "");
    }

    function move(delta) {
      var before = lossOf(weight);
      weight = weight + delta;
      var after = lossOf(weight);
      if (after === 0) {
        paint("Loss is zero. " + weight + " times " + x + " is " + target + ".", "good");
        return;
      }
      if (after < before) {
        paint("Loss fell, from " + before + " to " + after + ".", "good");
        return;
      }
      paint("Loss rose, from " + before + " to " + after + ".", "bad");
    }

    up.addEventListener("click", function () { move(step); });
    down.addEventListener("click", function () { move(-step); });
    reset.addEventListener("click", function () {
      weight = start;
      paint("Weight is back to " + start + ".", "");
    });

    paint("Prediction is " + (start * x) + ". The target is " + target + ".", "");
  });
})();
