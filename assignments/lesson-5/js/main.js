const options =
    {weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'};
document.getElementById('lastUpdated').textContent = new Date(document.lastModified).toLocaleDateString('en-US',options);
document.getElementById('currentDate').textContent = new Date(document.lastModified).getFullYear();

function toggleMenu() {

    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function announcement()
{
    var pancakeannouncement = document.getElementsByClassName("pancakehide")[0];
    var date = new Date();
    if (date.getDay() == 5){
        pancakeannouncement.classList.toggle("pancakeshow");
        pancakeannouncement.classList.toggle("pancakehide");
    }
} 

function dates(){
    lastUpdated();
    currentDate();
    announcement();
}