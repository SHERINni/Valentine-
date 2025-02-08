body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #fbe8e7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.envelope-container {
    background: red;
    padding: 20px;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
}

.envelope button {
    background: white;
    border: none;
    padding: 10px;
    margin-top: 10px;
    cursor: pointer;
    font-size: 16px;
}

.card {
    background: pink;
    padding: 40px;
    border-radius: 10px;
    position: relative;
    margin-top: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.hidden {
    display: none;
}

.buttons {
    margin-top: 20px;
}

#yesBtn, #noBtn {
    font-size: 18px;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin: 10px;
}

#yesBtn {
    background-color: red;
    color: white;
    border-radius: 5px;
}

#noBtn {
    background-color: white;
    color: black;
    border-radius: 5px;
    position: absolute;
}