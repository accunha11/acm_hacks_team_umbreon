# Welcome to Team Umbreon's Project Repo!

## Setting up your environment

1. [Install Node.js](https://nodejs.org/en/)
2. [Install Git](https://git-scm.com/)
3. [Install Homebrew (for mac users only)](https://brew.sh/)
4. [Install Watchmen (for mac users only)](https://facebook.github.io/watchman/docs/install#buildinstall)
5. [Install VSCode](https://code.visualstudio.com/download)

On your terminal/command line, run the following commands:
1. npm install
2. npm install --global expo-cli
3. npm install --global react-native-cli

You might get an error saying something like "Access denied" for the last two commands. If that happens, simply remove "--global" from the commands. You will run the following instead:
1. npm install
2. npm install expo-cli
3. npm install react-native-cli


## Installing Dependencies

Open a new terminal within VSCode (press ^~), run the following commands:

1. cd koality
2. npm install
3. npm install react-native-cli
4. npm install @react-navigation/native --save
5. npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view --save
6. npm install @react-navigation/bottom-tabs --save
7. npm install react-native-vector-icons --save
8. npm install @react-navigation/stack --save
9. expo start (will start the development server, you can scan the qr code on your phone or open in web browser)

**Important:** You may find that you need to import from other dependencies not listed here, if that happens you will get an error saying "module not found". The error will tell you the name of the missing module and all you'll have to do is run `npm install module-name`. Please also add that command to the list below so we can all have an updated list of necessary dependencies.

Extra dependencies:
1. 