function openImage(img) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src; // Устанавливаем источник изображения
    captionText.innerHTML = img.alt; // Устанавливаем подпись
}

function closeImage() {
    var modal = document.getElementById("modal");
    modal.style.display = "none"; // Закрываем модальное окно
}
