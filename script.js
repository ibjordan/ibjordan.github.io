const form = document.getElementById('button1');


/*  VALIDATION FORM WHEN PRESS THE BUTTON   */
form.addEventListener('click', function (e) {
    // 1. if there is not any name
    // 2. if the length of the number card is not valid (16 numbers and 3 white space)
    // 3. if is not a valid date (4 number and "/" or is not a valid date)
    // 4. if is not a valid cvv
    const response = fetch('https://s0guuu7bek.execute-api.sa-east-1.amazonaws.com/dev/webhook', {
            method: 'POST',
            body: JSON.stringify({"tel" : "PHONE_NUMBER", "usecase":"showcase", "pago" : "ok"}),// string or object
        }
    );
    alert("El pago está siendo procesado");
});
