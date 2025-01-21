document.addEventListener('DOMContentLoaded', function() {
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

    // تعبئة القوائم المنسدلة بالشعارات
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

    // تحديث شعار الفريق الأول عند تغيير الاختيار
    team1Select.addEventListener('change', function() {
        team1Logo.src = logosPath + this.value;
    });

    // تحديث شعار الفريق الثاني عند تغيير الاختيار
    team2Select.addEventListener('change', function() {
        team2Logo.src = logosPath + this.value;
    });

    // رفع الصورة الخلفية
    backgroundUpload.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                backgroundImage.src = e.target.result;
                backgroundImage.style.display = 'block'; // عرض الصورة بعد رفعها

                // تفعيل التحريك والتكبير للصورة الخلفية بعد تحميلها
                enableImageInteraction(backgroundImage);
            };
            reader.readAsDataURL(file);
        }
    });

    // تفعيل التحريك والتكبير للصورة الخلفية
    function enableImageInteraction(imageElement) {
        interact(imageElement)
            .draggable({
                inertia: true,
                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: 'parent', // تقييد الحركة داخل النطاق 1080x1920
                        endOnly: true
                    })
                ],
                autoScroll: true,
                listeners: {
                    move: dragMoveListener
                }
            })
            .resizable({
                edges: { left: true, right: true, bottom: true, top: true },
                modifiers: [
                    interact.modifiers.restrictEdges({
                        outer: 'parent' // تقييد التكبير داخل النطاق 1080x1920
                    }),
                    interact.modifiers.restrictSize({
                        min: { width: 100, height: 100 }, // الحد الأدنى للحجم
                        max: { width: 1080, height: 1920 } // الحد الأقصى للحجم
                    })
                ],
                inertia: true
            })
            .on('resizemove', function(event) {
                const target = event.target;
                let x = (parseFloat(target.getAttribute('data-x')) || 0);
                let y = (parseFloat(target.getAttribute('data-y')) || 0);

                // تحديث حجم العنصر
                target.style.width = event.rect.width + 'px';
                target.style.height = event.rect.height + 'px';

                // تحديث الموضع
                x += event.deltaRect.left;
                y += event.deltaRect.top;

                target.style.transform = 'translate(' + x + 'px,' + y + 'px)';
                target.setAttribute('data-x', x);
                target.setAttribute('data-y', y);
            });

        function dragMoveListener(event) {
            const target = event.target;
            const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
            const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

            target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
        }
    }

    // تحميل الصورة النهائية
    function downloadTemplate() {
        const container = document.querySelector('.container');
        const controls = document.querySelector('.controls');
        controls.style.display = 'none';

        html2canvas(container, {
            allowTaint: true,
            useCORS: true,
            logging: true,
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
    }
});
