// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
(function () {
      
      const remote = require('electron').remote; 
      
      function init() { 
        document.getElementById("min_btn").addEventListener("click", function (e) {
          const window = remote.getCurrentWindow();
          window.minimize(); 
        });
        
        document.getElementById("max_btn").addEventListener("click", function (e) {
          const window = remote.getCurrentWindow();
          if (!window.isMaximized()) {
            window.maximize();
          } else {
            window.unmaximize();
          }	 
        });
        
        document.getElementById("close_btn").addEventListener("click", function (e) {
          const window = remote.getCurrentWindow();
          window.close();
        }); 
      }; 
      
      document.onreadystatechange = function () {
        if (document.readyState == "complete") {
          init(); 
        }
      };
})();