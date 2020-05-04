//EJERCICIOS DE VARIABLES

const miComidaPreferida = {
	nombre:'milanesa',
	cantidadDeVecesQueComi: 3,
	cantidadDeVecesQueMeCocinaron: 2,
	ingredientes: ['carne', 'pan rayado', 'huevo', 'sal']
}


miComidaPreferida.llevaMasDe5Ingredientes =  miComidaPreferida.ingredientes.length > 5
miComidaPreferida.cantidadDeVecesQueMeCocine = miComidaPreferida.cantidadDeVecesQueComi - miComidaPreferida.cantidadDeVecesQueMeCocinaron



//EJERCICIOS DE FUNCIONES

function calcularAreaRectangulo (base, altura) {
	const resultado = base * altura
	return resultado
}


function calcularPrecioTotal (precioUnitario, cantidadDeUnidades, costoDeEnvio) { 
	const precioTotal = (precioUnitario * cantidadDeUnidades) + costoDeEnvio
	return precioTotal
}


function dejarPasar (edad) { 
	const esMayor = edad >= 18
	return esMayor

}

// RESULTADOS FUNCIONES

console.log (calcularAreaRectangulo(10, 5))

console.log (calcularPrecioTotal(10, 3, 10))

console.log (dejarPasar(16))


// AJERCICIOS DE IF

function calcularResultadoDeExamen (nota){
	if (nota<4){
		return 'Aplazado'
	} else if (nota<6){
		return 'Recuperar'
	} else if (nota<10){
		return 'Aprobado'
	} else {
		return 'Sobresaliente'
	}
}

console.log (calcularResultadoDeExamen(10))


