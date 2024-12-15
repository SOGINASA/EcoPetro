ymaps.ready(init);

        function init() {
            // Создание карты с фокусом на Петропавловск
            var map = new ymaps.Map("map", {
                center: [54.88, 69.15], // Координаты центра города Петропавловск
                zoom: 12
            });
        }