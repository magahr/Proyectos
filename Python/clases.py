class Estudiante:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad   = edad

    def saludar(self):
        return f'Hola soy {self.nombre}'
        
Estudiante1 = Estudiante('Adrian', 31)
print(Estudiante1.saludar())    

class vehiculo:
    def __init__(self, marca, modelo, ano, cant_ruedas):
        self.marca = marca
        self.modelo = modelo
        self.ano    = ano
        self.cant_ruedas = cant_ruedas
    def mostrar_info(self):
        return f'Vehiculo : {self.marca} {self.modelo}, {self.ano}'