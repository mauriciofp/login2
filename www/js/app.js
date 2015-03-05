// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'pascalprecht.translate', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, $translate) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
      
      
      
        if (typeof navigator.globalization !== "undefined"){
      navigator.globalization.getPreferredLanguage(function(language) { 
         //alert((language.value).split("-")[0]);
        $translate.use((language.value).split("-")[0]).then(function(data) {
        //  alert(language.value);
         // $translate.use(language.value).then(function(data) {
              console.log("SUCCESS -> " + data);
                }, function(error) {
              console.log("ERROR -> " + error);
                });
        },null);                    
      }  
      
      
      
      
      
  });
})



.config(function($translateProvider) {
    $translateProvider.translations("en", {
            Login: "Log on",
            Username: "Username",
            Password:   "Password",
            Company: "Company"
        });
    $translateProvider.translations("es", {
            Login: "Ingresar",
            Username: "Usuario",
            Password: "Contraseña",
            Company: "Contraseña"
        });
    
     $translateProvider.translations("de", {
            Login: "Anmeldung",
            Username: "Benutzername",
            Password: "Kennwort",
            Company: "Firma"
        });
    
    
     $translateProvider.translations("fr", {
            Login: "Connexion",
            Username: "Utilisateur",
            Password: "Mot de passe",
            Company: "Société"
        });
    
    $translateProvider.preferredLanguage("en");
    $translateProvider.fallbackLanguage("en");
})





.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.friends', {
      url: '/friends',
      views: {
        'tab-friends': {
          templateUrl: 'templates/tab-friends.html',
          controller: 'FriendsCtrl'
        }
      }
    })
    .state('tab.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'tab-friends': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })

.state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
  })





  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/tab/dash');

  $urlRouterProvider.otherwise('/login');

});
