PgBarcodeScanAndGen
================
First of All, many thanks to Joe Linoff for his original PgBarcodeScanner.
This app is based on his work https://github.com/jlinoff/PgBarcodeScanner.
I moved things around a bit to have (what I think) is a slightly more refined MVC, as well as I added Generate Tab that displays and regenerates the QR Code. The QR Code generator is not based on the original Cordova plugin, which doesn't seem to work at the moment, rather on davidshimjs-qrcode library http://davidshimjs.github.io/qrcodejs/

Refer to Joe Linoff's github page for explanation on what he has done. On my part, I added the barcode generator library to www, and moved things around a bit.

As per Joe's comment, I strongly encourage everyone to use ripple simulator. It's great, especially if you are trying to simulate Android. Ripple seems to be able to simulate scanning for iPhone, though not for any other platform. Neither iOS emulator nor Android emulator will let you scan, at least on Mac. Feel free to test it live. For Android, you could connect your device and run ionic run android. This will install the app and run it on your device.
