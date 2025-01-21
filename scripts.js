document.addEventListener('DOMContentLoaded', function () {
    const logosPath = "./logos/";
    const team1Select = document.getElementById('team1-select');
    const team2Select = document.getElementById('team2-select');
    const team1Logo = document.getElementById('team1-logo');
    const team2Logo = document.getElementById('team2-logo');
    const backgroundImage = document.getElementById('background-image');
    const backgroundUpload = document.getElementById('background-upload');

    // قائمة الشعارات
    const logos = [
        "BUNDESLIGA - آينتراخت فرانكفورت.png",
        "BUNDESLIGA - باير ليفركوزن.png",
        "BUNDESLIGA - بايرن ميونخ.png",
        "BUNDESLIGA - بروسيا دورتموند.png",
        "BUNDESLIGA - بروسيا مونشنغلادباخ.png",
        "BUNDESLIGA - فرايبوررغ.png",
        "BUNDESLIGA - ماينز.png",
        "BUNDESLIGA - هولشتاين.png",
        "BUNDESLIGA---هوفنهايم.png",
        "LA LIGA - أتلتيك بلباو.png",
        "LA LIGA - برشلونة.png",
        "LA LIGA - ريال مدريد.png",
        "LA-LIGA---خيتافي.png",
        "LA-LIGA---سيلتا-فيغو.png",
        "LALIGA - ريال بيتيس.png",
        "LALIGA - لاس بالماس .png",
        "PREMIER LEAGUE - آرسنال.png",
        "PREMIER LEAGUE - إبسويتش تاون.png",
        "PREMIER LEAGUE - إيفرتون.png",
        "PREMIER LEAGUE - برايتون.png",
        "PREMIER LEAGUE - برينتفورد.png",
        "PREMIER LEAGUE - بورنموث.png",
        "PREMIER LEAGUE - تشيلسي.png",
        "PREMIER LEAGUE - توتنهام.png",
        "PREMIER LEAGUE - ليفربول .png",
        "PREMIER LEAGUE - مانشستر سيتي.png",
        "PREMIER LEAGUE - نيوكاسل.png",
        "PREMIER-LEAGUE---أستون-فيلا.png",
        "PREMIER-LEAGUE---نوتينغهام.png",
        "SERIA A - إمبولي.png",
        "SERIE A - كومو.png",
        "SERIE A - ميلان.png",
        "SERIE A - نابولي.png",
        "SERIE-A---أتلانتا.png",
        "SERIE-A---يوفنتوس.png",
        "الأخدود.png",
        "الأهلي.png",
        "الإتفاق.png",
        "الاتحاد.png",
        "التعاون.png",
        "الخلود.png",
        "الخليج.png",
        "الرائد.png",
        "الرياض.png",
        "الشباب.png",
        "العروبة.png",
        "الفتح.png",
        "الفيحاء.png",
        "القادسية.png",
        "النصر.png",
        "الهلال.png",
        "الوحدة.png",
        "ضمك.png"
    ];

    function populateSelect(selectElement) {
        logos.forEach(logo => {
            const option = document.createElement('option');
            option.value = logo;
            option.textContent = logo.replace('.png', '');
            selectElement.appendChild(option);
        });
    }

    populateSelect(team1Select);
    populateSelect(team2Select);

    // تغيير شعار الفريق الأول
    team1Select.addEventListener('change', function () {
        team1Logo.src = logosPath + this.value;
        team1Logo.style.display = 'block';
    });

    // تغيير شعار الفريق الثاني
    team2Select.addEventListener('change', function () {
        team2Logo.src = logosPath + this.value;
        team2Logo.style.display = 'block';
    });

    // رفع صورة الخلفية
    backgroundUpload.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                backgroundImage.src = e.target.result;
                backgroundImage.style.display = 'block';
                enableImageInteraction(backgroundImage);
            };
            reader.readAsDataURL(file);
        }
    });

    function enableImageInteraction(imageElement) {
    interact(imageElement)
        .draggable({
            listeners: {
                move: function (event) {
                    const target = event.target;

                    // احصل على القيم الحالية للموقع
                    const dataX = parseFloat(target.getAttribute('data-x')) || 0;
                    const dataY = parseFloat(target.getAttribute('data-y')) || 0;

                    // احسب الموقع الجديد
                    const x = dataX + event.dx;
                    const y = dataY + event.dy;

                    // قم بتحديث موضع الصورة الخلفية
                    target.style.backgroundPosition = `${x}px ${y}px`;

                    // قم بحفظ القيم الجديدة
                    target.setAttribute('data-x', x);
                    target.setAttribute('data-y', y);
                }
            }
        });

    // تكبير/تصغير باستخدام عجلة الفأرة
    imageElement.addEventListener('wheel', function (event) {
        event.preventDefault();

        // احصل على المقياس الحالي
        const scale = parseFloat(imageElement.dataset.scale) || 1;

        // حساب التغيير في المقياس
        const delta = event.deltaY > 0 ? -0.1 : 0.1;
        const newScale = Math.min(Math.max(scale + delta, 0.5), 3); // حدود التكبير بين 0.5 و 3

        // تحديث مقياس الصورة
        imageElement.style.transform = `scale(${newScale})`;
        imageElement.dataset.scale = newScale;
    });
}


    // تحميل القالب كصورة
    window.downloadTemplate = function () {
        const container = document.querySelector('.container');
        const controls = document.querySelector('.controls');
        controls.style.display = 'none';

        html2canvas(container, {
            allowTaint: true,
            useCORS: true,
            logging: true,
            width: 1080,
            height: 1920,
        }).then(canvas => {
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            link.download = 'template-with-logos.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            controls.style.display = 'flex';
        }).catch(error => {
            console.error('حدث خطأ أثناء إنشاء الصورة:', error);
        });
    };
});
