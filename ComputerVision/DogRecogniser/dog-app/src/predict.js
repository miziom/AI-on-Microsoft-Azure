$(function () {

    var url = "";
    var predictionKey = "";
    var contentType = "";

    var fs = require("fs");
    var _ = require('underscore');

    // Store the value of a selected image for display
    var imageBytes;

    // Handle clicks of the Upload Image button
    $("#select_button").click(function () {

        $('#analysisResults').html('');

        // Load the image and show it in the window
        const electron = require('electron');
        const dialog = require('electron').dialog;
        var va = electron.remote.dialog.showOpenDialog();
        var contents = fs.readFileSync(va[0], "base64");
        imageBytes = fs.readFileSync(va[0]);

        $('#previewImage').html('<img width="240" src="data:image/png;base64,' + contents + '" />');

        // Submit the image to the Custom Vision Service
        $.ajax({
            type: "POST",
            url: url,
            data: imageBytes,
            processData: false,
            headers: {
                "Prediction-Key": predictionKey,
                "Content-Type": contentType
            }
        }).done(function (data) {
            var predictions = data.predictions;
            var dogs = [predictions.find(o => o.tagName === 'Spaniel Blenheim'),
                predictions.find(o => o.tagName === 'Pomeranian'),
                predictions.find(o => o.tagName === 'Komondor'),
                predictions.find(o => o.tagName === 'Germanshepherd'),
                predictions.find(o => o.tagName === 'French Bulldog'),
                predictions.find(o => o.tagName === 'Doberman'),
                predictions.find(o => o.tagName === 'Dingo'),
                predictions.find(o => o.tagName === 'Corgi Cardigan'),
                predictions.find(o => o.tagName === 'Collie'),
                predictions.find(o => o.tagName === 'Chow'),
                predictions.find(o => o.tagName === 'Beagle'),
                predictions.find(o => o.tagName === 'Basenji'),
                predictions.find(o => o.tagName === 'Appenzeller'),
                predictions.find(o => o.tagName === 'Airedale'),
                predictions.find(o => o.tagName === 'Eskimo'),
                predictions.find(o => o.tagName === 'Labrador'),
                predictions.find(o => o.tagName === 'Boxer'),
                predictions.find(o => o.tagName === 'Rottweiler'),
                predictions.find(o => o.tagName === 'Fox Terrier'),
                predictions.find(o => o.tagName === 'Chihuahua')
            ];
            var sortedDogs = _.sortBy(dogs, 'probability').reverse();
            var possibleDog = sortedDogs[0];

            if (possibleDog.probability > 0.9) {
                $('#analysisResults').html('<div class="matchLabel">' + possibleDog.tagName + ' (' + (possibleDog.probability * 100).toFixed(0) + '%)' + '</div>');
            }
            else {
                $('#analysisResults').html('<div class="noMatchLabel">Unknown dog breed</div>');
            }

        }).fail(function (xhr, status, err) {
            alert(err);
        });
    });
});