MVP 

the prototype should be able to:
A.	Give a report on the participants  
  a.	Summary of topics of discussion
B.	Assists participants
  a.	Instantly notify the name and profile of the person / people you’re talking to

Question:
app or browser app?

todo list:
1. Microphone Access:
APIs to access the microphone (e.g., the MediaDevices.getUserMedia() API in JavaScript).

2. Bluetooth:
DOes Web Bluetooth API allows web applications to measure proximity?
*safari doesn't support Bluetooth access to web application(ffs)-> if the MVP is on browser, only resort to voice recording to match people?
https://stackoverflow.com/questions/59594993/is-there-a-workaround-for-ios-pwas-to-talk-to-bluetooth-devices

3. Spacy
Transcript by the NLP is used to match people.
To boost the accuracy recordings of people in the conversation will need to be collated.
Pick up topics for the organiser to see(LLM)

3. Database
Database of event participants
