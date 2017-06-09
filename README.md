# Efficiency-Window
The following are instructions for a SERNEC Userscript modification written to improve data entry from images. Currently, this is a proof of concept and in the wrong hands has the potential to submit bad data or greatly confuse curators and other users of the device this is installed on.
 
  
This is a hobby effort, If you’d like to help improve the tool or examine the script it is stored here: https://github.com/CapPow/Efficiency-Window
 
This is NOT for general distribution: I'm not being greedy, I just don't want unprepared people submitting bad data.
 
Installation
Only supports chrome. Using chrome, download and install the "Tampermonkey App" 
https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en
Once Tampermonkey is installed, (and presumably activated) navigate to my script repository and a prompt to install the script should be displayed. Install it:
https://github.com/CapPow/Efficiency-Window/raw/master/Efficient%20Occ%20Window.user.js
 
That should be it, you may need to restart chrome after you've taken these steps.
 
Basics:
-This script's only functions are within the occurrence record editor.
-While this script is running, it will always change the way occurrence records are displayed. 
	--This is only a user side change, so think new paint job, not a new car. 
	--When you want to revert to the original display (which shows much more data!) Just click the tampermonkey icon in upper right and click the "Enabled" button to toggle it off. 
	--In our lab, I keep it disabled when I'm not using it to avoid confusion with other users.
-This script aims to remove, or greatly reduce mouse interaction in favor of faster keyboard hotkeys.
-When you're ready to submit a record, always use the "Submit, and go to next" hotkey while using this script.
-You can skip records with the normal " |< < > >| " type navigation arrows.
-Because of image load speeds, a LAN connection over wifi can greatly speed up this process.

Features to know:
-All script specific hotkeys require the ctl button to be held down while using them. (This is an attempt to avoid already claimed buttons)
-Depending on your internet connection, it will attempt to automatically zoom in on the bottom right of the image for label information.
-It will add a small version of the same image below the zoom window, so you can quickly check for annotations it may have "zoomed past."
-The "bump" hotkeys bump the zoomed image left or up in order to adjust for odd labels or annotations.
-The "Zoom Out" hotkey zooms to the default Full image view.
-The "Label zoom" hotkey returns to the bottom right zoom position.
-SERNEC already has some default native zoom hotkeys which you may find useful also, just click on the "Zoom?" link.
-When a record opens, It may attempt to guess the scientific name or state based on the last record you submitted.
	--When it guesses a field, that field will be highlighted, this is your warning to verify it.
		--If the guess was correct, just press tab and you'll move to the next field.
		--If the guess is wrong, since it is highlighted no backspace is required. Just start typing the new value and it will replace the guess.

Getting Started:
-To database sets of records you'll have to build a relevant search and edit the records within that search.  
	--To do this, select "Edit Existing Occurrence Records" under the data editor control panel for the correct institution. This is just below the "Add Skeletal Records" that you're accustomed to using.
	--Then, build a relevant search. This is Highly modifiable to single out fields that need entered. But for now, the basic operation will probably be:
	--Check the "With Images" Box
	--In Custom field 1 select "Scientific Name" and change Equals to "IS NULL", then "Click Display Table."
	--Obviously, This type of search will return every record WITH a photo but WITHOUT a scientific name. The first few records may be ones without a legible scientific name, They're easy to spot because they have a few other fields entered. Notice after a point records are suddenly uniformly empty. That's a good starting point.
	--From this point you're ready to enter data and use the "Submit and Next Hotkey."
 
 
