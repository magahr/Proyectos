
print("Hola Mundo")
numero = 10
numero2 = 10
numero3 = numero + numero2
print ("valor de numero ", numero)
print ("valor de la posicion de memoria de numero ", id(numero))
print ("valor de numero2 ", numero2)
print ("valor de la posicion de memoria de numero2 ", id(numero2))
print ("valor de numero3 ", numero3)
print ("valor de la posicion de memoria de numero3 ", id(numero3))
print ("Tipo de datos de la variable numero ", type(numero))

letra = "Prueba"
print ("Tpo de la variable letra :", type(letra))
lista = [1,2,3,4,5,6,7]
print('Valor de la lista : ',lista)
print('El tipo de esta variable es ', type(lista))

diccionario = {
    "nombre": "Adrian"
}
print("Dictionary ", diccionario["nombre"])

estudiantes = ["Manuel", "Johonatha"]

print("Estudiantes antes de ingregar ", estudiantes)
estudiantes.append("pepito")
print("Estudiantes despues de ingregar ", estudiantes)
curso = {
    'nombre':'full stack',
    'categoria':'Tecnologia',
    'grupo':8
}
print (curso)
