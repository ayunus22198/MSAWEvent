# MSAWEvent

Prerequisites: 
- Install Android Studio + Emulator 
- Node.js(most stable version)
- Git 

Running msaw-mobile folder: 
 1. Type npm in your cmd. If error comes saying that 'npm' is not an internal or external command, then you have to check your node installation
 2. Type npm in your cmd. If error comes saying that 'npm' is not an internal or external command, then you have to check your node installation
 3. Make Desktop folder, call it whatever you like 
 4. Go to your browser and navigate to this github repo. Find the clone or download button and copy the https link 
 5. Go to command line and cd into the folder you made in step 2. Then type git clone <url from step 4>
 6. cd into the msaw-mobile folder 
 7. Type npm install, hit enter
 8. Then type npm install -g expo-cli
 9. Have an emulator running in background, Android Studio is good for this. 
 10. Type expo start in msaw-mobile folder, a tab should open in IE if successful 
 11. Click Run on Android Emulator/Device

Features List: 
- Schedule
  - User should be able to choose which events he/she wants to go to 
  - Should filter appropriately 
  - Times should be easily changeable and renders on everyones phone
  - Onclick of event should lead to a description page which has: 
     - Picture (Mandatory) 
     - Information on event (Mandatory) 
     - Summary (Mandatory)
     - Question Poll (Optional)
     - Comments (Optional)
     - Likes Facebook style (optional)
     
- Map
  - has halal places marked on map in vicinity of MSA West area 
  - Leads to description page of restaurant of clicked
- About 
  - Information on Sponsors and who helped make the event happen 
