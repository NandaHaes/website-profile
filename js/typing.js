document.addEventListener("DOMContentLoaded", () => {

    const typing = document.getElementById("typing-text");

    const words = [
        "Frontend Developer",
        "Graphic Designer",
        "Video Editor",
        "Freelancer"
    ];

    let word = 0;
    let char = 0;
    let deleting = false;

    function type() {

        const current = words[word];
        typing.textContent = current.substring(0, char);

        if(!deleting) {

            char++;

            if(char > current.length){
                deleting = true;
                setTimeout(type,1500);
                return;
            }

        } else {
            char--;
            if(char < 0) {

                deleting = false;
                word = (word + 1) % words.length;
            }
        }

        setTimeout(type, deleting ? 50 : 90);

    }

    type();
});