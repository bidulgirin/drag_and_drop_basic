// 즉시 실행 함수 : 전역함수를 오염시키지 않고 지역변수만 사용하기 위해서 사용할것임
(function () {
    // drag and drop api 를 사용하기전 기본 드래그 드랍은 어떻게 동작하는지 알아보자
    const container = document.getElementById("container"); // 공통부모요소

    // 공통 부모 요소에 이벤트 리스너 한 번만 추가
    container.addEventListener("dragover", function (event) {
        if (event.target.classList.contains("drag_box")) {
            event.preventDefault(); // 기본 동작 방지 (드롭 가능하게 하기)
        }
    });

    container.addEventListener("drop", function (event) {
        if (event.target.classList.contains("drag_box")) {
            event.preventDefault();
            const data = event.dataTransfer.getData("text");
            const draggedElement = document.getElementById(data);
            event.target.appendChild(draggedElement);
        }
    });

    container.addEventListener("dragstart", function (event) {
        if (event.target.classList.contains("dragging_item")) {
            event.dataTransfer.setData("text", event.target.id);
        }
    });
})();
