# ESP-32-Cam-Intruder-Alert-system-with-Azure-IOT-Hub

This project has a live streaming video with face recognition(I took the example code from arduino IDE) , whenever it finds an intruder 
it will call take picture method and convert that image binary into base 64 string  and send that string to Azure IOT hub using MQTT protocol . 
From Azure IOT hub we will route that message to a Azure Function App which converts that base 64 image to blob and stores that in Azure blob storage , 
whenever a blob is created it will trigger one more function which sends the email with that intruder picture.
