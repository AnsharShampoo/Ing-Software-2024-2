from flask import Flask
from sqlalchemy import and_, or_
from alchemyClasses.Usuario import Usuario
from alchemyClasses.Pelicula import Pelicula
from alchemyClasses.Renta import Renta
from alchemyClasses import db
from cryptoUtils.CryptoUtils import cipher
from hashlib import sha256
from datetime import date
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://lab:Developer123!@localhost:3306/lab_ing_software'
app.config.from_mapping(
    SECRET_KEY='dev'
)
db.init_app(app)

#Una funci´on que inserte al menos 1 registro en cada tabla cada vez que sea ejecutada, como se tiene una
#tabla con llaves for´aneas, se tiene que tener en cuenta que existan los registros en las otras dos tablas.
def insertar_registros():
    with app.app_context():
        nuevo_usuario = Usuario(nombre="Carlos", apPat="Sánchez", apMat="López", password=sha256("password123".encode()).hexdigest(), email="juanito@gmail.com")
        db.session.add(nuevo_usuario)
        db.session.commit()
        nueva_pelicula = Pelicula(nombre="Ghost in the Shell", genero="Ciencia Ficción", duracion=120, inventario=10) 
        db.session.add(nueva_pelicula)
        db.session.commit()
        nueva_renta = Renta(idUsuario=1, fecha_renta='2024-02-24',idPelicula=1, dias_de_renta=5, estatus=0) 
        db.session.add(nueva_renta)
        db.session.commit()

#Una funci´on que filtre a la tabla Usuario a todos los usuarios cuyo apellido termine en alguna cadena
#especificada por el usuario.
def filtrar_usuario_por_apellido(apellido):
    with app.app_context():
        usuarios = db.session.query(Usuario).filter(Usuario.apPat.like(f'%{apellido}')).all()
        for usuario in usuarios:
            print(usuario)
    return usuarios

#Una funci´on que dado el nombre de una pel´ıcula (entrada de funci´on o entrada de usuario) y un g´enero,
#si dicha pel´ıcula existe, se le cambie el g´enero a dicha pel´ıcula.
def cambiar_genero_pelicula(nombre, genero):
    with app.app_context():
        pelicula = db.session.query(Pelicula).filter(Pelicula.nombre == nombre).first()
        if pelicula:
            pelicula.genero = genero
            db.session.commit()
            print(f"Se ha cambiado el genero de la pelicula {nombre} a {genero}")
        else:
            print(f"No se encontro la pelicula {nombre}")

#Una funci´on que elimine todas las rentas anteriores a 3 d´ıas a la fecha en que se ejecuta la funci´on, ejemplo,
#si la ejecuto el 23 de Enero de 2024, todas las rentas que tengan fecha anterior o igual al 19 de Enero de
#2024 deber´an de ser eliminadas, hasta que dicha funci´on de ejecute.
def eliminar_rentas_viejas():
    with app.app_context():
        fecha_actual = date.today()
        fecha_hace_tres_dias = fecha_actual.replace(day=fecha_actual.day-3)
        db.session.query(Renta).filter(Renta.fecha_renta <= fecha_hace_tres_dias).delete()
        db.session.commit()


def ver_registros():
    tabla = input("Ingrese el nombre de la tabla (usuarios, peliculas, rentar): ").lower()
    if tabla == 'usuarios':
        print("Esta es la tabla de USUARIOS: \n")
        usuarios = Usuario.query.all()
        for usuario in usuarios:
            print(usuario.idUsuario, usuario.nombre, usuario.apPat, usuario.apMat, usuario.email)
    elif tabla == 'peliculas':
        print("Esta es la tabla de PELICULAS: \n")
        peliculas = Pelicula.query.all()
        for pelicula in peliculas:
            print(pelicula.idPelicula, pelicula.nombre, pelicula.genero, pelicula.duracion)
    elif tabla == 'rentar':
        print("Esta es la tabla de RENTAS: \n")
        rentas = Renta.query.all()
        for renta in rentas:
            print(renta.idRentar, renta.idUsuario, renta.idPelicula, renta.fecha_renta, renta.dias_de_renta, renta.estatus)
    else:
        print("Nombre de tabla no válido! :( \n ¡Intenta de nuevo! \n)")

def filtrar_por_id():
    tabla = input("Ingrese el nombre de la tabla (usuarios, peliculas, rentar): ").lower()
    id = int(input("Ingrese el ID del registro: "))
    if tabla == 'usuarios':
        print(f"Este es el usuario con ID {id}:")
        usuario = Usuario.query.get(id)
        if usuario:
            print(usuario.idUsuario, usuario.nombre, usuario.apPat, usuario.apMat, usuario.email)
        else:
            print("Usuario no encontrado.")
    elif tabla == 'peliculas':
        print(f"Esta es la película con ID {id}:")
        pelicula = Pelicula.query.get(id)
        if pelicula:
            print(pelicula.idPelicula, pelicula.nombre, pelicula.genero, pelicula.duracion)
        else:
            print("Película no encontrada.")
    elif tabla == 'rentar':
        print(f"Esta es la renta con ID {id}:")
        renta = Renta.query.get(id)
        if renta:
            print(renta.idRentar, renta.idUsuario, renta.idPelicula, renta.fecha_renta, renta.dias_de_renta, renta.estatus)
        else:
            print("Renta no encontrada.")
    else:
        print("Nombre de tabla no válido.")

def actualizar_registro():
    tabla = input("Ingrese el nombre de la tabla (usuarios, peliculas, rentar): ").lower()
    id = int(input("Ingrese el ID del registro a actualizar: "))
    if tabla == 'usuarios' or tabla == 'peliculas':
        nuevo_nombre = input("Ingrese el nuevo nombre: ")
        if tabla == 'usuarios':
            usuario = Usuario.query.get(id)
            if usuario:
                usuario.nombre = nuevo_nombre
                db.session.commit()
                print("Nombre del usuario actualizado.")
            else:
                print("Usuario no encontrado.")
        elif tabla == 'peliculas':
            pelicula = Pelicula.query.get(id)
            if pelicula:
                pelicula.nombre = nuevo_nombre
                db.session.commit()
                print("Nombre de la película actualizado.")
    elif tabla == 'rentar':
        nueva_fecha = input("Ingrese la nueva fecha de renta (YYYY-MM-DD): ")
        renta = Renta.query.get(id)
        if renta:
            renta.fecha_renta = nueva_fecha
            db.session.commit()
            print("Fecha de renta actualizada.")
        else:
            print("Renta no encontrada.")
    else:
        print("Nombre de tabla no válido.")

def eliminar_registro():
    tabla = input("Ingrese el nombre de la tabla (usuarios, peliculas, rentar): ").lower()
    opcion = input("Desea eliminar un registro por ID (ingrese 'id') o todos los registros (ingrese 'todos'): ").lower()
    
    if tabla == 'usuarios':
        if opcion == 'id':
            id = int(input("Ingrese el ID del usuario a eliminar: "))
            usuario = Usuario.query.get(id)
            if usuario:
                db.session.delete(usuario)
                db.session.commit()
                print(f"Usuario con ID {id} eliminado.")
            else:
                print("Usuario no encontrado.")
        elif opcion == 'todos':
            Usuario.query.delete()
            db.session.commit()
            print("Todos los usuarios han sido eliminados.")
    
    elif tabla == 'peliculas':
        if opcion == 'id':
            id = int(input("Ingrese el ID de la película a eliminar: "))
            pelicula = Pelicula.query.get(id)
            if pelicula:
                db.session.delete(pelicula)
                db.session.commit()
                print(f"Película con ID {id} eliminada.")
            else:
                print("Película no encontrada.")
        elif opcion == 'todos':
            Pelicula.query.delete()
            db.session.commit()
            print("Todas las películas han sido eliminadas.")
    
    elif tabla == 'rentar':
        if opcion == 'id':
            id = int(input("Ingrese el ID de la renta a eliminar: "))
            renta = Renta.query.get(id)
            if renta:
                db.session.delete(renta)
                db.session.commit()
                print(f"Renta con ID {id} eliminada.")
            else:
                print("Renta no encontrada.")
        elif opcion == 'todos':
            Renta.query.delete()
            db.session.commit()
            print("Todas las rentas han sido eliminadas.")
    
    else:
        print("Nombre de tabla no válido.")

if __name__ == '__main__':
    with app.app_context():
        while True:
            print("Buenas Ferfong! ¿Qué deseas hacer hoy?")
            print("1. Ver los registros de una tabla")
            print("2. Filtrar los registros de una tabla por id")
            print("3. Actualizar un registro")
            print("4. Eliminar un registro")
            opcion = input("Seleccione una opción: ")

            if opcion == '1':
                ver_registros()
            elif opcion == '2':
                filtrar_por_id()
            elif opcion == '3':
                actualizar_registro()
            elif opcion == '4':
                eliminar_registro()
            else:
                print("Opción no válida bro u.u ¡Intenta de nuevo!")