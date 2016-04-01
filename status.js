function calculateStatus() {
  var $participants,
    sep,
    noVoteLength,
    increaseLength,
    continueLength,
    abandonLength;

  $participants = $(".robin-room-participant");

  noVoteLength = $participants.filter(".robin--vote-class--novote").length;
  increaseLength = $participants.filter(".robin--vote-class--increase").length;
  continueLength = $participants.filter(".robin--vote-class--continue").length;
  abandonLength = $participants.filter(".robin--vote-class--abandon").length;

  sep = " | ";

  return ("No Vote: " + noVoteLength + sep +
    "Grow: " + increaseLength + sep +
      "Stay: " + continueLength + sep +
        "Abandon: " + abandonLength + sep +
          "Total: " + $participants.length +
            " --- Counts Every 5 Minutes");
}

function sendStatus() {
  var $messageBox, $sendSubmit;

  $messageBox = $("input[name=message]");
  $messageBox.val(calculateStatus());

  $sendSubmit = $("input[value=send]");
  $sendSubmit.submit();
}

(function() {
  sendStatus();
  window.setInterval(sendStatus, 1000 * 60 * 5);
})()
