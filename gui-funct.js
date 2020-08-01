var is = require("electron-is");

// Mac and Linux have Bash shell scripts (so the following would work)
//        var child = process.spawn('child', ['-l']);
//        var child = process.spawn('./test.sh');
// Win10 with WSL (Windows Subsystem for Linux)  https://docs.microsoft.com/en-us/windows/wsl/install-win10
//
// Win10 with Git-Bash (windows Subsystem for Linux) https://git-scm.com/   https://git-for-windows.github.io/
//


// GLUE to the screen
function getCommandOutput() {
  return document.getElementById("command-output");
};

function appendOutput(msg) {
  getCommandOutput().value += (msg + '\n');
};


function showOS() {
  if (is.windows())
    appendOutput("Windows Detected.")
  if (is.macOS())
    appendOutput("Apple OS Detected.")
  if (is.linux())
    appendOutput("Linux Detected.")
}

// function getLink() {
//   var Ytlink = document.getElementById("link").value;
// }

function backgroundProcess() {
  const process = require('child_process'); // The power of Node.JS

  showOS();
  // var cmd = (is.windows()) ? 'test2.bat' : './test.sh';
  // console.log('cmd:', cmd);
  // var allCMDyoutubeLink = "youtube-dl -x --audio-format mp3 https://www.youtube.com/watch?v=MAJ0g8fEXTE&list=PLuursoLHbECSIx382lbCaVLTx_eEbLMpK&index=1"
  // var youtubeLink = "https://www.youtube.com/watch?v=MAJ0g8fEXTE&list=PLuursoLHbECSIx382lbCaVLTx_eEbLMpK&index=1"
  var Ytlink = document.getElementById("link").value;
  var child = process.spawn('youtube-dl', ['-x', '--audio-format', 'mp3', Ytlink]);
  // var child = process.spawn('ls', ['-lh', '/usr'])

  child.on('error', function (err) {
    appendOutput('stderr: <' + err + '>');
  });

  child.stdout.on('data', function (data) {
    appendOutput(data);
  });

  child.stderr.on('data', function (data) {
    appendOutput('stderr: <' + data + '>');
  });

  child.on('close', function (code) {
    if (code == 0) {
      // setStatus('Download Complete!');
      // Get the button that opens the modal
      var modal = document.getElementById("myModal");
      // When the user clicks on the button, open the modal
      modal.style.display = "block";

      var closeModal = document.getElementById('closeModal')
      // When the user clicks on <span> (x), close the modal
      closeModal.onclick = function () {
        modal.style.display = "none";
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }

      var openExplorer = document.getElementById('openExplorer')
      openExplorer.onclick = function () {
        var child = process.spawn('explorer', ['.']);
      }

      // var child = process.spawn('explorer',['.']);

    } else {
      setStatus('Download Error, Error Code' + code);
    }
    getCommandOutput().style.background = "DarkGray";
  });
};