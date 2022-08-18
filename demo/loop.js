let count = 1000;
function loop() {
    if (!count) return;
    window.location.reload();
    count--;
    setTimeout(() => {
        loop();
    }, 10);
}
loop();