      let alarmTimeout;

         // Function to toggle the theme
         function toggleTheme() {
            const body = document.body;
            const themeStyle = document.getElementById('theme-style');

            if (body.classList.contains('dark-theme')) {
                body.classList.remove('dark-theme');
                body.classList.add('light-theme');
                // Update the theme style to the light theme
                themeStyle.textContent = `
                    body.light-theme {
                        background-color: white;
                        color: black;
                    }
                    #logo-container {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 80%; 
            background-image: url('nsslogo2.png');
            background-size: cover;
            background-position: center; 
            width: 24%; 
            
        }

        /* Light Theme Text Color */
        body.light-theme h1,
        body.light-theme label,
        body.light-theme #button,
        body.light-theme #hour,
        body.light-theme #minute,
        body.light-theme #ampm,
        body.light-theme #dismiss-btn {
            color: black;
        }

        #heading {
            color: white;
            margin-left: 240px;
            margin-top: 200px;
            font-size:70px;
            
        }

        #alarm-form {
            background-color: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 10px;
            margin-top: 10px;
            width: 30%;
            margin-left: 340px;
            font-size:40px;
        }

        #alarm-time {
            font-size: 40px;
            color: white;
        }

        #dismiss-btn {
            padding: 10px 20px;
            border-radius: 10px;
            font-size: 25px;
            background-color: white;
            color: black;
            border: none;
            cursor: pointer;
            display: none;
            font-family: 'Rouge Script', cursive;
        }

        label {
            color: white;
        }

        #button{
            margin-top: 5px;
            padding: 10px;
            font-family: 'Rouge Script', cursive;
            border-radius: 20px;
            font-size:30px;
        }

        #hour,#minute{
            margin-top: 5px;
            padding: 10px;
            font-family: 'Rouge Script', cursive;
            border-radius: 20px;
            font-size:30px;
        }
        #ampm{
            margin: 2px;
            font-family: 'Rouge Script', cursive;
            border-radius: 10px;
            font-size: 20px;
        }
                `;
            } else {
                body.classList.remove('light-theme');
                body.classList.add('dark-theme');
               
                themeStyle.textContent = `
                    body {
                        font-family: 'Rouge Script', cursive;
                        text-align: center;
                        background-color: black;
                        color: white;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        height: 100vh;
                        margin: 0;
                        padding: 0;
                        overflow: hidden;
                    }
                    /* Dark Theme Text Color */
        body.dark-theme h1,
        body.dark-theme label,
        body.dark-theme #button,
        body.dark-theme #hour,
        body.dark-theme #minute,
        body.dark-theme #ampm,
        body.dark-theme #dismiss-btn {
            color: white;
        }
                    #logo-container {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 80%; 
            background-image: url('nsslogo2.png');
            background-size: cover;
            background-position: center; 
            width: 24%; 
            
        }

        #heading {
            color: white;
            margin-left: 240px;
            margin-top: 200px;
            font-size:70px;
            
        }

        #alarm-form {
            background-color: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 10px;
            margin-top: 10px;
            width: 30%;
            margin-left: 340px;
            font-size:40px;
        }

        #alarm-time {
            font-size: 40px;
            color: white;
        }

        #dismiss-btn {
            padding: 10px 20px;
            border-radius: 10px;
            font-size: 25px;
            background-color: white;
            color: black;
            border: none;
            cursor: pointer;
            display: none;
            font-family: 'Rouge Script', cursive;
        }

        label {
            color: white;
        }

        #button{
            margin-top: 5px;
            padding: 10px;
            font-family: 'Rouge Script', cursive;
            border-radius: 20px;
            font-size:30px;
        }

        #hour,#minute{
            margin-top: 5px;
            padding: 10px;
            font-family: 'Rouge Script', cursive;
            border-radius: 20px;
            font-size:30px;
        }
        #ampm{
            margin: 2px;
            font-family: 'Rouge Script', cursive;
            border-radius: 10px;
            font-size: 20px;
        }
                `;
            }
        }
function setAlarm() {
    const hour = parseInt(document.getElementById('hour').value);
    const minute = parseInt(document.getElementById('minute').value);
    const ampm = document.getElementById('ampm').value;

    const now = new Date();
    const alarmTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), ampm === "PM" ? hour + 12 : hour, minute);

    const timeDiff = alarmTime - now;
    if (timeDiff <= 0) {
        alert("Please set a future alarm time.");
        return;
    }

    document.getElementById('alarm-time').innerText = `Alarm set for ${hour}:${minute} ${ampm}`;
    document.getElementById('dismiss-btn').style.display = 'block';

    alarmTimeout = setTimeout(triggerAlarm, timeDiff);
}

function triggerAlarm() {
    document.getElementById('alarm-time').innerText = "Time to Wake Up!";
    playAlarmSound();
}

function playAlarmSound() {
// const audio = new Audio('https://raw.githubusercontent.com/Kalashnikov42/NSSindcutions_AlarmApp/ecb17282d87c6533c3485335cea52324ad885a8b/alarm-clock-short-6402.mp3');
const audio = document.getElementById('alarm-sound');
audio.play();
}

function dismissAlarm() {
clearTimeout(alarmTimeout);
document.getElementById('alarm-time').innerText = "";
document.getElementById('dismiss-btn').style.display = 'none';
stopAlarmSound();
}

function stopAlarmSound() {
    const audio = document.getElementById('alarm-sound');
    audio.pause();
    audio.currentTime = 0;
}
