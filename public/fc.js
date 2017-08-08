
    // Initialize Firebase SDK
    var config = {
        apiKey: "AIzaSyDFlsisAa2yeDhRjSPdoC6Ez0UjOrSf9sc",
        authDomain: "firechat-demo-app.firebaseapp.com",
        databaseURL: "https://firechat-demo-app.firebaseio.com"
    };
    firebase.initializeApp(config);

    // Get a reference to the Firebase Realtime Database
    var chatRef = firebase.database().ref(),
        target = document.getElementById("firechat-container"),
        authModal = $('#auth-modal').modal({ show: false }),
        chat = new FirechatUI(chatRef, target);

    chat.on('auth-required', function() {
      authModal.modal('show');
      return false;
    });

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        var userId = user.uid,
            username = user.displayName;

        chat.setUser(userId, username);
        $('#user-name').text(username);
        $('#user-info').show();
        setTimeout(function() {
          chat._chat.enterRoom('-Iy1N3xs4kN8iALHV0QA')
        }, 500);
      } else {
        $('#user-info').hide();
        chat._chat.enterRoom('-Iy1N3xs4kN8iALHV0QA')
      }
    });

    function login() {
      authModal.modal('hide');

      // Log the user in via Twitter
      var provider = new firebase.auth.TwitterAuthProvider();
      firebase.auth().signInWithPopup(provider).catch(function(error) {
        console.log("Error authenticating user:", error);
      });
    }

    function logout() {
      firebase.auth().signOut().then(function() {
        location.reload();
      }).catch(function(error) {
        console.log("Error signing user out:", error);
      });
    }
  