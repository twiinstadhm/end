document.addEventListener('DOMContentLoaded', function() {
    const logosPath = "./logos/";
    const team1Select = document.getElementById('team1-select');
    const team2Select = document.getElementById('team2-select');
    const team1Logo = document.getElementById('team1-logo');
    const team2Logo = document.getElementById('team2-logo');

    // قائمة الشعارات
    const logos = [
        "BUNDESLIGA - بايرن ميونخ.png",
        "PREMIER LEAGUE - مانشستر سيتي.png",
        // ... بقية الشعارات
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

// تحميل الصورة النهائية
function downloadTemplate() {
    const container = document.querySelector('.container');

    html2canvas(container).then(canvas => {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'template-with-logos.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }).catch(error => {
        console.error('حدث خطأ أثناء إنشاء الصورة:', error);
    });
}
