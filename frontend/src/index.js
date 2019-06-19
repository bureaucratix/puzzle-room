window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    loadKitchen();
});

function clearScene(){
    const container = document.getElementById("content");
    while (container.firstChild) {
    container.removeChild(container.firstChild);
    }
}