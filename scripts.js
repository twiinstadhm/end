document.addEventListener('DOMContentLoaded', function() {
    const logosPath = "./logos/"; // استخدام المسار النسبي هنا
    const team1Select = document.getElementById('team1-select');
    const team2Select = document.getElementById('team2-select');
    const team1Logo = document.getElementById('team1-logo');
    const team2Logo = document.getElementById('team2-logo');

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

    // تعبئة القوائم المنسدلة بالشعارات
    function populateSelect(selectElement) {
        logos.forEach(logo => {
            const option = document.createElement('option');
            option.value = logo;
            option.textContent = logo.replace('.png', ''); // إزالة الامتداد لعرض الاسم فقط
            selectElement.appendChild(option);
        });
    }

    populateSelect(team1Select);
    populateSelect(team2Select);

    // تحديث شعار الفريق الأول عند تغيير الاختيار
    team1Select.addEventListener('change', function() {
        team1Logo.src = logosPath + this.value;
    });

    // تحديث شعار الفريق الثاني عند تغيير الاختيار
    team2Select.addEventListener('change', function() {
        team2Logo.src = logosPath + this.value;
    });
});
