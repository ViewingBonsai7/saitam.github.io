    function evento_1()
    {
        alert('Bienvenido!');
    }
    function evento_2()
    {
        alert('Un gran mundo por conocer!');
    }
    function evento_3()
    {
        alert('Espero que te guste mi contenido!');
    }

    function calcular_operacion()
    {
        /**
         Vamos a comenzar la programaciòn en javascript 
         */
        var numero1= (document.getElementById("numero1_ingreso").value);
        var operacion= (document.getElementById("lista_operaciones").value);
        var numero2= (document.getElementById("numero2_ingreso").value);
        alert("Se va a "+operacion+" el numero "+ numero1 +" con el numero: " +numero2)
    }