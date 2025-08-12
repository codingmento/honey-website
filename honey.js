function SearchData(searchQuery) {
    var cards = document.querySelectorAll('.card'); // تحديد جميع العناصر التي تحتوي على المنتجات
    var resultMessage = document.getElementById('resultMessage'); // تحديد مكان رسالة النتيجة
    var found = false;

    // تحويل النص المدخل إلى حرف صغير لتجاهل حالة الأحرف
    searchQuery = searchQuery.toLowerCase();
    
    // إخفاء جميع المنتجات أولاً
    cards.forEach(function(card) {
        card.style.display = 'none'; 
    });

    // البحث في العناصر وعرض العناصر التي تحتوي على النص المدخل
    cards.forEach(function(card) {
        var title = card.querySelector('h3').innerText.toLowerCase(); // الحصول على النص في الـ h3 داخل المنتج
        if (title.includes(searchQuery) && searchQuery !== '') {
            card.style.display = 'block'; // إظهار العنصر إذا كان يحتوي على النص المدخل
            found = true; // إذا تم العثور على منتج
        }
    });

    // عرض رسالة إذا لم يتم العثور على أي منتج
    if (searchQuery === '') {
        cards.forEach(function(card) {
            card.style.display = 'block'; // إظهار جميع المنتجات إذا كان النص فارغًا
        });
        resultMessage.innerText = 'الأنواع'; // إظهار النص الافتراضي
    } else if (!found) {
        resultMessage.innerText = 'لم يتم العثور على المنتج'; // إذا لم يتم العثور على أي تطابق
    } else {
        resultMessage.innerText = 'تم العثور على المنتج'; // إذا تم العثور على منتجات تتطابق مع النص
    }
}










