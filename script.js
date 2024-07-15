// script.js

document.addEventListener('DOMContentLoaded', function () {
    const baseUrl = 'https://arthurvandelay.dev/imgix/templates/PostTemplate.png?';

    function updateImageUrl() {
        const titleText = document.getElementById('titleText').value.trim();
        const subtitleText = document.getElementById('subtitleText').value.trim();
        const fontSize = document.getElementById('fontSize').value.trim() || '64';
        const fontColor = document.getElementById('fontColor').value.trim() || 'ffffff';
        const fontFamily = document.getElementById('fontFamily').value;
        const textAlign = document.getElementById('textAlign').value; // Use only the first part (left, center, right)
        const lineHeight = document.getElementById('lineHeight').value.trim() || '1.5';
        const textShadow = document.getElementById('textShadow').value.trim() || '1';
        const textWidth = document.getElementById('textWidth').value.trim() || '1400';
        const textPadding = document.getElementById('textPadding').value.trim() || '100';
        const textYPosition = document.getElementById('textYPosition').value.trim() || '50';

        let imageUrl = baseUrl;
        const text = `${encodeURIComponent(titleText)}%20${encodeURIComponent(subtitleText)}`;
        imageUrl += `txt=${text}`;
        imageUrl += `&txt-color=${fontColor}`;
        imageUrl += `&txt-size=${fontSize}`;
        imageUrl += `&txt-font=${fontFamily}`;
        imageUrl += `&txt-align=${textAlign}`;
        imageUrl += `&txt-line-height=${lineHeight}`;
        imageUrl += `&txt-shad=${textShadow}`;
        imageUrl += `&txt-fit=max`;
        imageUrl += `&txt-w=${textWidth}`;
        imageUrl += `&txt-pad=${textPadding}`;
        imageUrl += `&txt-y=${textYPosition}p`;
        imageUrl += `&blend-mode=overlay`; // Ensure the text is blended over the image

        return imageUrl;
    }

    function showImagePreview(file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imagePreview = document.getElementById('imagePreview');
            imagePreview.src = e.target.result;
            imagePreview.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
    }

    document.getElementById('imageUpload').addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            showImagePreview(file);
        }
    });

    document.getElementById('loadImageUrl').addEventListener('click', function () {
        const imageUrl = document.getElementById('imageUrl').value.trim();
        if (imageUrl) {
            const imagePreview = document.getElementById('imagePreview');
            imagePreview.src = imageUrl;
            imagePreview.classList.remove('hidden');
        }
    });

    document.getElementById('updateImage').addEventListener('click', function () {
        document.getElementById('customImage').src = updateImageUrl();
    });

    document.getElementById('generateUrl').addEventListener('click', function () {
        const imageUrl = updateImageUrl();
        window.open(imageUrl, '_blank');
    });
});
