function openModal(image) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = image.src;
    captionText.innerHTML = image.alt;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}


function parseDate(s) {
		var b = s.split(/\D/);
		return new Date(b[0],b[1]-1,b[2],b[3],b[4],b[5]);
	}

    // Funktion zum Auslesen der EXIF-Daten für ein Bild
    function readExifData(imageId, exifId) {
        const imgElement = document.getElementById(imageId);
        EXIF.getData(imgElement, function() {
            const allExif = EXIF.getAllTags(this);
			const exposure = 1 / 1/ allExif.ExposureTime;

			const options = {
				year: "numeric",
				month: "long",
				day: "numeric",
			};

            const exifInfo = `
			<p><span class="iconify" data-icon="mdi-camera"></span> ${allExif.Make} ${allExif.Model}</p>
			<p>${allExif.FocalLength}mm</p>
			<p>f/${allExif.FNumber}</p>
			<p>1/${exposure}s</p>
			<p>ISO ${allExif.ISOSpeedRatings}</p>
			<br>
			<p>${parseDate(allExif.DateTimeOriginal).toLocaleString('de-DE', options)}</p>`;
            document.getElementById(exifId).innerHTML = `<strong>Details:</strong> ${exifInfo}`;
        });
    }

    // EXIF-Daten für jedes Bild auslesen
    window.onload = function() {
        readExifData('img1', 'exif1');
		readExifData('img2', 'exif2');
		readExifData('img3', 'exif3');
		readExifData('img5', 'exif5');
		readExifData('img6', 'exif6');
		readExifData('img7', 'exif7');
		readExifData('img8', 'exif8');
        // Füge weitere Aufrufe für mehr Bilder hinzu
		
    };