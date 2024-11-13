const url = "https://api.openweathermap.org/data/2.5/";
const key = "5ecf8adfdb3b70d3be926b09a6d9be81";

const setQuery = (e) => {
    if (e.keyCode == '13') {  
        getResult(searchBar.value);
    }
};

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`; 
    fetch(query)
        .then(weather => weather.json())
        .then(displayResult)
        .catch(error => {
            console.error("Error fetching weather data: ", error);
        });
};

const displayResult = (result) => {
    let city = document.querySelector('.city');
    city.innerText = `${result.name}, ${result.sys.country}`;

    let temp = document.querySelector('.temp');
    temp.innerText = `${Math.round(result.main.temp)}°C`;

    let desc = document.querySelector('.desc');
    desc.innerText = result.weather[0].description;  

    let minmax = document.querySelector('.minmax');
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`;

    generateSentence(result.main.temp);
};

const generateSentence = (temp) => {
    let sentence = "";

    if (temp >= 30) {
        sentence = [
            "Ya böyle sıcak havada dışarı mı çıkılır? Git, bilgisayarın başına otur, bir de sunucuya bağlan, ne varsa yap!",
            "Dışarıda 30 derece, ama ben hâlâ ‘for loop’ döndürmeye çalışıyorum. Herhalde yazılımcıyım, soğuyorum…",
            "Sıcak hava mı? Benim için sıcak olan tek şey, bilgisayarımın fanı!",
            "Yaz geldi, dışarıda güneş, ben hâlâ bilgisayarımı ‘debug’ ediyorum. Kim demiş bilgisayarın başında eğlence yok diye?"
        ];
    } else if (temp >= 20) {
        sentence = [
            "Hava güzel, dışarı çıkıp biraz gezeyim dedim ama önce bu kodu bir çözüme kavuşturayım, sonra bakarız.",
            "Tam dışarı çıkacakken hava ısındı, ama neyse ki bilgisayarımda hala ‘bug’ var, çözülmesi gereken işler bitmedi!",
            "Sıcak değil, serin de değil, ama bir kitap alıp okumak için harika bir hava. ‘Ctrl+S’ ile kaydettim, okumaya başlıyorum.",
            "İdeal hava, ideal çalışma havası. Bilgisayarımı alıp çayımla birlikte masama oturmak için bi' neden daha!"
        ];
    } else if (temp >= 10) {
        sentence = [
            "Dışarıda hava serin, hiç dışarı çıkmam. Hem zaten bilgisayarımda çözülecek o kadar çok şey var ki…",
            "Serin bir günde, ‘git git’ diye dışarı çıkmıyorum, oturup bir ‘for loop’ yazıyorum, çünkü dışarıda iş yok.",
            "Hava serin, dışarı çıkıp biraz yürüyebilirim ama önce şu kitabı bir bitireyim, ‘debug’ yapmadan rahatlayamam.",
            "Serin havada dışarı çıkmaktansa, bilgisayarımın başında oturmak daha ‘comfort’! Dışarıda ne yapayım?"
        ];
    } else if (temp >= 0) {
        sentence = [
            "Hava soğuk, dışarıda kimse yok ama bilgisayarım hâlâ açık. Kimse ‘programming’ yapmaz mı, ben yaparım!",
            "Soğuk mu? Dışarı çıkmak yerine oturup kitap okumak ve kod yazmak çok daha sıcak. Bunu kimse anlayamaz tabii!",
            "Bugün dışarıda soğuk ama kitapla ısınmak mümkün. Kafanı ‘reset’le, içeri gir ve biraz sayfa çevir.",
            "Soğuk hava ve kitaplar! Bu karışım harika. Hadi, bir fincan çay al, kendini ‘debug’ et."
        ];
    } else {
        sentence = [
            "Dışarıda -5 derece, dışarı çıkmam, bilgisayarımın başında oturmak çok daha sıcak! Kimse dışarıda donmak zorunda değil!",
            "Soğukta dışarı çıkmak zor? Aynen, ben de tam kodları ‘compile’ etmeyi planlıyordum.",
            "Sıfırın altı mı? Bu kadar soğukta dışarı çıkmak neye yarar ki, bilgisayarımın fanı zaten ısındı!",
            "Soğuk hava mı? Dışarı çıkmaya gerek yok, kitapla ısınırım! Bu kadar kolay!"
        ];
    }

    const randomSentence = sentence[Math.floor(Math.random() * sentence.length)];

    document.querySelector('.sentence').innerText = randomSentence;
};

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keypress', setQuery);
