// à editer : 
var min_height = 900;
var min_width  = 1600;
var url        = "https://www.psytoolkit.org/cgi-bin/psy2.4.1/survey?s=kmdPt";

// script -------------------------------------------------------------------------------------------
var is_safari = /^((?!chrome|android).)*safari+ie/i.test(navigator.userAgent);
var height = window.screen.availHeight;
var width = window.screen.availWidth;
var is_compatible = (!is_safari && height >= min_height && width >= min_width );

if(!is_compatible) {

    var safari_exclusion = {
        type: "html-keyboard-response",
        stimulus:
        "<p>Unfortunately, your computer is not compatible with this experiment.</p>" +
        "<p>Among the possible reasons :</p>" +
        "<ul><li>You are using Safari</li><li>Your screen resolution is too low (lower than 1600 x 900) </li></ul>",
        choices: jsPsych.NO_KEYS
    };

    var timeline_safari = [];

    timeline_safari.push(safari_exclusion);
    jsPsych.init({timeline: timeline_safari});

} else {
  window.location.href = url;
}
