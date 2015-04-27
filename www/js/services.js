angular.module('starter.services', [])

.service('appServices', function appServices($q) {
    // Wrap the barcode scanner in a service so that it can be shared easily.
    this.scanBarcode = function() {
        // The plugin operates asynchronously so a promise
        // must be used to display the results correctly.
        var deferred = $q.defer();
        try {
            cordova.plugins.barcodeScanner.scan(
                function (result) {  // success
                    deferred.resolve({'error':false, 'result': result});
                }, 
                function (error) {  // failure
                    deferred.resolve({'error':true, 'result': error.toString()});
                }
            );
        }
        catch (exc) {
            deferred.resolve({'error':true, 'result': 'exception: ' + exc.toString()});
        }
        return deferred.promise;
    };

    this.generateBarcode = function() {
        // The plugin operates asynchronously so a promise
        // must be used to display the results correctly.
        var deferred = $q.defer();
        try {
            if (!this.QRCodeId) {
                this.QRCodeId = 0;
            }
            this.QRCodeId++;

            data = "" + this.QRCodeId;
            qrCodeEl = document.getElementById("qrcode");
            hasImg = qrCodeEl.getElementsByTagName("img").length > 0;
            if (hasImg) {
                this.QRCodeImage.makeCode(data); // make another code.
            }
            else {
                this.QRCodeImage = new QRCode(qrCodeEl, data);
            }
            //
            //cordova.plugins.barcodeScanner.encode(
            //    BarcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com",
            //    function(result) {  // success
            //        deferred.resolve({'error':false, 'result': result});
            //        alert("Encode success: " + result);
            //    },
            //    function(result) {  // failure
            //        deferred.resolve({'error':true, 'result': error.toString()});
            //    }
            //);
        }
        catch (exc) {
            deferred.resolve({'error':true, 'result': 'exception: ' + exc.toString()});
        }
        return deferred.promise;
    };
});
